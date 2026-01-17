import fs from "fs";
import path from "path";

const logFile = path.join(process.cwd(), "conversation-log.json");

export function logConversation({ message, intent, subject }) {
  if (!subject || intent !== "PORTFOLIO") return;

  const entry = {
    message,
    intent,
    subject,
    time: new Date().toISOString(),
  };

  let logs = [];

  if (fs.existsSync(logFile)) {
    logs = JSON.parse(fs.readFileSync(logFile, "utf8"));
  }

  logs.push(entry);

  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
}
