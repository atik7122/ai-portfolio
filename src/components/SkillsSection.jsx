import { useState } from "react";
import { cn } from "../lib/utils";

/* =======================
   Skill Categories
======================= */
const categories = [
  "all",
  "ml",
  "data",
  "llm",
  "infra",
  "languages",
];

/* =======================
   Skills Data
======================= */
const skills = [
  // 🤖 Vision & Machine Learning
  { name: "PyTorch", level: 90, category: "ml" },
  { name: "TensorFlow", level: 85, category: "ml" },
  { name: "OpenCV", level: 90, category: "ml" },
  { name: "YOLO Detection", level: 85, category: "ml" },
  { name: "OCR Systems", level: 85, category: "ml" },
  { name: "LSTM / RNN", level: 80, category: "ml" },
  { name: "Contextual Bandits", level: 75, category: "ml" },

  // 📊 Data & Geospatial
  { name: "SQL", level: 90, category: "data" },
  { name: "PySpark", level: 80, category: "data" },
  { name: "GeoPandas", level: 85, category: "data" },
  { name: "Spatial Indexing", level: 85, category: "data" },
  { name: "KD / Ball Tree", level: 80, category: "data" },
  { name: "Tableau", level: 75, category: "data" },

  // 🧠 LLM Systems
  { name: "Prompt Engineering", level: 90, category: "llm" },
  { name: "Context Engineering", level: 85, category: "llm" },
  { name: "Retrieval Strategies", level: 85, category: "llm" },
  { name: "Vectorization", level: 80, category: "llm" },
  { name: "RAG Pipelines", level: 85, category: "llm" },
  { name: "Agentic Systems", level: 75, category: "llm" },
  { name: "LLM APIs", level: 80, category: "llm" },

  // 🔧 Infrastructure & Web
  { name: "Docker", level: 85, category: "infra" },
  { name: "Kubernetes", level: 70, category: "infra" },
  { name: "AWS", level: 75, category: "infra" },
  { name: "Azure", level: 70, category: "infra" },
  { name: "Flask", level: 85, category: "infra" },
  { name: "Streamlit", level: 90, category: "infra" },
  { name: "React", level: 80, category: "infra" },
  { name: "Next.js", level: 75, category: "infra" },

  // 💻 Programming Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "C / C++", level: 70, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "TypeScript", level: 75, category: "languages" },
  { name: "SQL (Advanced)", level: 90, category: "languages" },
];

/* =======================
   Skills Section Component
======================= */
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm transition-all capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 hover:bg-secondary"
              )}
            >
              {category === "all" && "All"}
              {category === "ml" && "Vision & ML"}
              {category === "data" && "Data & Geo"}
              {category === "llm" && "LLM Systems"}
              {category === "infra" && "Infra & Web"}
              {category === "languages" && "Languages"}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-xs card-hover"
            >
              <h3 className="font-semibold mb-4">{skill.name}</h3>

              <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary rounded-full animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
