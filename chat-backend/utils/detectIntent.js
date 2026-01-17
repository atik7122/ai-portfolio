export function detectIntent(message) {
  const text = message.toLowerCase();

  const portfolioKeywords = [
    "his",
    "zubair",
    "he",
    "experience",
    "skill",
    "project",
    "research",
    "paper",
    "education",
    "contact",
    "email",
    "work",
    "job",
  ];

  const isPortfolioRelated = portfolioKeywords.some((k) =>
    text.includes(k)
  );

  return isPortfolioRelated ? "PORTFOLIO" : "GENERAL";
}
