import { knowledge } from "../ai/knowledge";

export async function askAI(message) {
  const text = message.toLowerCase();

  for (const item of knowledge) {
    if (item.keywords.some((k) => text.includes(k))) {
      return item.reply;
    }
  }

  return (
    "That’s an interesting question. I can best answer questions about Zubair’s projects, skills, research, or experience."
  );
}
