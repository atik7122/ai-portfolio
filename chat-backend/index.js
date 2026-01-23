import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Groq from "groq-sdk";

import { detectIntent } from "./utils/detectIntent.js";
import { getCountryFromIP } from "./utils/getCountryFromIP.js";
import { retrieveContext } from "./utils/retrieveContext.js";
import { getScrollTarget } from "./utils/scrollMap.js";

import {
  getConversationSummary,
  logPortfolioQuestion,
} from "./utils/conversationStore.js";

import { sendSummaryEmail } from "./utils/sendSummaryEmail.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// 🧠 Pronoun memory
let sessionMemory = {
  subject: null,
};

app.use(cors());
app.use(express.json());

/* ----------------------------------------
   MANUAL EMAIL TEST ROUTE
---------------------------------------- */




app.get("/send-summary", async (req, res) => {
  try {
    const summary = getConversationSummary();

    if (!summary || summary.length === 0) {
      return res.send("⚠️ No portfolio questions yet.");
    }

    await sendSummaryEmail();
    res.send("✅ Summary email sent successfully");
  } catch (err) {
    console.error("EMAIL ERROR:", err.message);
    res.status(500).send("❌ Failed to send summary email");
  }
});


/* ----------------------------------------
   CHAT ENDPOINT
---------------------------------------- */


app.get("/", (req, res) => {
  res.send("AI Portfolio Backend is running 🚀");
});

app.get("/api", (req, res) => {
  res.json({ status: "API is live ✅" });
});


app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    /* ---- remember subject ---- */
    if (/zubair|tusar/i.test(userMessage)) {
      sessionMemory.subject = "Zubair Rahman Tusar";
    }

    /* ---- resolve pronouns ---- */
    let resolvedMessage = userMessage;
    if (
      sessionMemory.subject &&
      /\b(him|his|he)\b/i.test(userMessage)
    ) {
      resolvedMessage = `${userMessage} (about ${sessionMemory.subject})`;
    }

    /* ---- intent & context ---- */
    const intent = detectIntent(resolvedMessage);
    const context = retrieveContext(resolvedMessage);

    /* ---- country detection ---- */
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    const country = await getCountryFromIP(ip);

    /* ---- log portfolio questions ---- */
    if (intent === "PORTFOLIO") {
      logPortfolioQuestion({
        question: resolvedMessage,
        country,
        time: new Date().toISOString(),
      });
    }

    /* ---- build AI prompt ---- */
    const messages =
      intent === "PORTFOLIO"
        ? [
            {
              role: "system",
              content:
                "You are an AI assistant for Zubair Rahman Tusar's portfolio. Answer ONLY using the provided context.",
            },
            { role: "system", content: context },
            { role: "user", content: resolvedMessage },
          ]
        : [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            { role: "user", content: resolvedMessage },
          ];

    /* ---- call Groq ---- */
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages,
      temperature: intent === "GENERAL" ? 0.7 : 0.2,
    });

    const reply = completion.choices[0].message.content;

    /* ---- auto email after 5 portfolio questions ---- */
const summary = getConversationSummary();

const totalQuestions = summary
  ? Object.values(summary).reduce((a, b) => a + b.length, 0)
  : 0;

if (totalQuestions >= 5) {
  await sendSummaryEmail();
}


    /* ---- response ---- */
    res.json({
      replyText: reply,
      voiceText: reply,
      scrollTo: getScrollTarget(intent, resolvedMessage),
    });
  } catch (err) {
    console.error("AI ERROR:", err);
    res.json({
      replyText: "Sorry, something went wrong.",
      voiceText: "Sorry, something went wrong.",
      scrollTo: null,
    });
  }
});

/* ----------------------------------------
   SERVER
---------------------------------------- */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

