const ProjectSection = () => {
  /* ===========================
     Applied / Product Projects
  ============================ */
  const appliedProjects = [
    {
      title: "Paralegal Agent & Visa Petition Agent",
      category: "Agentic AI · RAG · Full-Stack",
      description:
        "Agentic retrieval-augmented drafting system using multi-agent orchestration to generate visa petitions, LoRs, and legal drafts with evaluation and versioning.",
      stack: [
        "Next.js",
        "React",
        "Supabase",
        "PostgreSQL",
        "Vector Search",
        "n8n",
      ],
    },
    {
      title: "Movement-Monitoring Wearable",
      category: "IoT · Edge AI · Healthcare",
      description:
        "Edge-AI wearable performing on-device inference to detect unusual patient movement and trigger caregiver alerts in real time.",
      stack: [
        "Raspberry Pi Zero W",
        "MPU-9250 IMU",
        "Python",
        "Embedded ML",
      ],
    },
  ];

  /* ===========================
     Research & Academic Projects
  ============================ */
  const researchProjects = [
    {
      title: "Sentiment Analysis with Transformer Ensembling",
      category: "Research · NLP · Transformers",
      description:
        "SE-vocabulary augmentation and transformer ensembling achieving 1–26% F1 improvement across software-engineering datasets. Published at ICSOFT 2023.",
      stack: ["Transformers", "PyTorch", "NLP", "Ensembling"],
    },
    {
      title: "Complex Nurse Care Activity Recognition",
      category: "Computer Vision · HAR · Healthcare",
      description:
        "Smartphone-based HAR system robust to noisy labels using denoising filters, overlapping windows, and Random Forests.",
      stack: [
        "Machine Learning",
        "Random Forest",
        "Signal Processing",
        "HAR",
      ],
    },
    {
      title: "Bangla License Plate Detection",
      category: "Computer Vision · Synthetic Data",
      description:
        "Improved Bangla license-plate detection using synthetic data generation from GTA-V to address real-world data scarcity.",
      stack: ["YOLO", "OpenCV", "Synthetic Data"],
    },
  ];

  /* ===========================
     Professional Technical Projects
  ============================ */
  const professionalProjects = [
    {
      icon: "🤖",
      title: "ARPU Enhancer Model",
      description:
        "Contextual multi-armed bandit system integrated with offer recommendation engine.",
      impact: "ARPU uplift optimization",
    },
    {
      icon: "📡",
      title: "Network Coverage Monitor",
      description:
        "Geospatial intelligence system using KD/Ball-tree indexing.",
      impact: "2 weeks → 2 hours processing",
    },
    {
      icon: "🎯",
      title: "New-Site Recommender",
      description:
        "Set-cover optimization solver using greedy algorithms.",
      impact: "58% business potential gain",
    },
    {
      icon: "👁️",
      title: "Trade Visibility System",
      description:
        "Object detection across 700k+ retail outlets with real-time inference.",
      impact: "~75% recall in production",
    },
    {
      icon: "📊",
      title: "Customer Segmentation",
      description:
        "360° segmentation of 50M+ customers using behavioral modeling.",
      impact: "Targeted advertising platform",
    },
    {
      icon: "⏰",
      title: "Intervention Time Model",
      description:
        "Regression-based intervention time prediction model.",
      impact: "67% conversion rate",
    },
  ];

  /* ===========================
     Technical Expertise
  ============================ */
  const expertise = [
    {
      icon: "🧠",
      title: "Machine Learning & AI",
      skills: [
        "Multi-armed Bandit Systems",
        "LSTM / RNN",
        "Ensemble Methods",
        "Anomaly Detection",
        "Recommender Systems",
      ],
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      skills: [
        "Object Detection (YOLO)",
        "OCR",
        "Edge Detection",
        "Color Quantization",
        "Production Monitoring",
      ],
    },
    {
      icon: "🗺️",
      title: "Geospatial Analysis",
      skills: [
        "KD / Ball Trees",
        "Location Intelligence",
        "Coverage Analysis",
        "Network Optimization",
      ],
    },
    {
      icon: "🤖",
      title: "LLM & Agentic Systems",
      skills: [
        "Retrieval Augmented Generation (RAG)",
        "Multi-agent Orchestration",
        "Prompt Engineering",
        "Workflow Automation",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl space-y-24">

        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Selected <span className="text-primary">Projects</span>
        </h2>

        {/* Applied Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Applied <span className="text-primary">AI Projects</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {appliedProjects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-xs">
                <h4 className="font-semibold text-lg mb-1">
                  {project.title}
                </h4>
                <p className="text-sm text-primary mb-2">
                  {project.category}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Research & <span className="text-primary">Academic Projects</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-xs">
                <h4 className="font-semibold text-lg mb-1">
                  {project.title}
                </h4>
                <p className="text-sm text-primary mb-2">
                  {project.category}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Professional <span className="text-primary">Technical Projects</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-xs card-hover"
              >
                <div className="text-3xl mb-3">{project.icon}</div>
                <h4 className="font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-primary font-medium">
                  Impact: {project.impact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Technical <span className="text-primary">Expertise Demonstrated</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((group, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{group.icon}</span>
                  <h4 className="text-xl font-semibold">{group.title}</h4>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <div className="text-center pt-8">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
