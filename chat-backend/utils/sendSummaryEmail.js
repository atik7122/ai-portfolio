import nodemailer from "nodemailer";
import {
    clearConversationLog,
    getConversationSummary,
} from "./conversationStore.js";

export async function sendSummaryEmail() {
  try {
    const summary = getConversationSummary();
    if (!summary) return;

    let emailBody = `Hello Zubair,

Here are your portfolio visitor insights (per country):

`;

    for (const country of Object.keys(summary)) {
      emailBody += `\n🌍 ${country} (${summary[country].length} questions)\n`;
      for (const q of summary[country]) {
        emailBody += `- ${q}\n`;
      }
    }

    emailBody += `\n— Portfolio AI Assistant 🤖`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "📊 Portfolio Visitor Summary",
      text: emailBody,
    });

    clearConversationLog();
  } catch (err) {
    // 🔥 CRITICAL: NEVER throw email errors
    console.error("EMAIL ERROR (ignored):", err.message);
  }
}
