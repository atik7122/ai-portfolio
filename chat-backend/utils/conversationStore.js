let conversationLog = [];

/* -----------------------------
   LOG QUESTION
----------------------------- */
export function logPortfolioQuestion({ question, country }) {
  conversationLog.push({
    question,
    country: country || "Unknown",
  });
}

/* -----------------------------
   PER-COUNTRY SUMMARY
----------------------------- */
export function getConversationSummary() {
  if (conversationLog.length === 0) return null;

  const grouped = {};

  for (const item of conversationLog) {
    if (!grouped[item.country]) {
      grouped[item.country] = [];
    }
    grouped[item.country].push(item.question);
  }

  return grouped;
}

/* -----------------------------
   CLEAR LOG
----------------------------- */
export function clearConversationLog() {
  conversationLog = [];
}
