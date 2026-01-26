import { knowledgeBase } from "../knowledgeBase.js";

export function retrieveContext(message) {
  const text = message.toLowerCase();

  if (text.includes("skill")||
    text.includes("programming languages")||text.includes("programming language")
){
      return knowledgeBase.skills;
} 
    
  if (text.includes("project")) return knowledgeBase.projects;
if (
  text.includes("experience") ||
  text.includes("work") ||
  text.includes("job") ||
  text.includes("career")
) {
  return knowledgeBase.experience;
}
if (
  text.includes("academia") ||
  text.includes("education") ||
  text.includes("collage") ||
  text.includes("university")
) {
  return knowledgeBase.academia;
}

  if (text.includes("research") || text.includes("paper"))
    return knowledgeBase.research;
  if (text.includes("contact") || text.includes("email"))
    return knowledgeBase.contact;

  if (
    text.includes("passion") ||
    text.includes("language") ||
    text.includes("languages") ||
    text.includes("interest") ||
    text.includes("hobby") ||
    text.includes("cat") ||
    text.includes("pet")||
    text.includes("poltu")||
    text.includes("puti")||
    text.includes("perona")||
    text.includes("philosophy")
  ){
    return knowledgeBase.passions;
  }

  if (text.includes("github")) return knowledgeBase.github;

  if (text.includes("achievements")) return knowledgeBase.achievements;

  if (text.includes("ielts"))return knowledgeBase.ielts;

  // if (text.includes("language")||text.includes("languages"))
  //   return knowledgeBase.languages;

    

  return knowledgeBase.intro;
}

