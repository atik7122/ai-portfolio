export function getScrollTarget(intent, message) {
  const text = message.toLowerCase();

  if (intent === "PORTFOLIO") {
    if (text.includes("skill")) return "skills";
    if (text.includes("project")) return "projects";
    if (text.includes("research") || text.includes("paper"))
      return "experience";
    if (text.includes("experience") || text.includes("work"))
        return "experience";
    if (text.includes("contact") || text.includes("email"))
      return "contact";
    if (text.includes("academic")|| text.includes("education"))
     return "academic";


    if (
      text.includes("passion") ||
      text.includes("interest") ||
      text.includes("hobby")
    )
      return "passions";

    if (
      text.includes("cat") ||
      text.includes("pet")
    )
      return "passions"; // cats are part of passions

    return "about";
  }

  return null;
}
