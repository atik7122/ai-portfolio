import { knowledge } from "../ai/knowledge";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const text = message.toLowerCase();

  for (let item of knowledge) {
    if (item.keywords.some(k => text.includes(k))) {
      return res.status(200).json({ reply: item.reply });
    }
  }

  return res.status(200).json({
    reply: "Thanks for your question! Please ask about skills, projects, or experience."
  });
}
