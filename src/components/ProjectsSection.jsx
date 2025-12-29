const ProjectSection = () => {
  /* ===========================
     Applied / Product Projects
  ============================ */
  const appliedProjects = [
    {
      title: "Paralegal Agent & Visa Petition Agent",
      category: "Agentic AI · RAG · Full-Stack",
      description:
        "Implemented an agentic, retrieval-augmented drafting system: n8n-orchestrated multi-agent pipelines ingest PDFs/forms, extract facts, and generate petition drafts/LoRs with evaluation and versioning.",
      stack: [
        "Next.js",
        "React",
        "Supabase",
        "PostgreSQL",
        "Vector Search",
        "n8n",
      ],
      keyfeatures:[
            "Multi-agent orchestration with n8n",
            "PDF/form ingestion and fact extraction",
            "Automated petition draft generation",
            "Document versioning and evaluation",
            "Vectorization and reranking capabilities",
      ],
    },
    {
      title: "Movement-Monitoring Wearable",
      category: "IoT · Edge AI · Healthcare",
      description:
        "Built a wearable that performs on-device inference to detect unusual patient movements and trigger caregiver alerts. Features real-time anomaly detection using embedded machine learning.",
      stack: [
        "Raspberry Pi Zero W",
        "MPU-9250 IMU",
        "Python",
        "Machine Learning",
      ],

      keyfeatures:[
            "On-device anomaly detection",
            "Real-time movement monitoring",
            "Caregiver alert system",
            "Low-power edge computing",
            "Wearable form factor",
      ],
      github: "https://github.com/zubairtusar/movement_recognition_system",
    },
  ];

  /* ===========================
     Research & Academic Projects
  ============================ */
  const researchProjects = [
    {
      title: "Sentiment Analysis with Transformer Ensembling",
      description:
        "Developed SE-vocabulary augmentation and transformer ensembling techniques for sentiment polarity analysis, achieving 1–26% improvement in weighted/macro F1 scores across four software engineering datasets.",
      stack: ["📄 Published in ICSOFT 2023",
              "📊 26% F1 Score Improvement"
              ],
    },
    {
      title: "Complex Nurse Care Activity Recognition",
      description:
        "Built a smartphone-accelerometer Human Activity Recognition (HAR) system featuring denoising filters, overlapping windows, multi-domain features, and Random Forest classification to handle high data/label noise.",
      stack: [
        "📄 UbiComp/ISWC'21 Workshop",
        "🥉 3rd Place HASCA Challenge",
      ],
    },
    {
      title: "Bangla License Plate Detection",
      description:
        "Collaborated on synthetic data generation using Grand Theft Auto V (GTA V) to improve Bangla license plate detection models, addressing the lack of diverse training data in local contexts.",
      stack: ["🎮 Synthetic Data Generation",
              "🔍 Computer Vision",
             
        ],
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
        "Contextual multi-armed bandit system integrated with offer-recommendation engine for revenue optimization.",
      impact: "ARPU uplift optimization",
    },
    {
      icon: "📡",
      title: "Network Coverage Monitor",
      description:
        "Location intelligence system using KD/Ball-tree indexing for geospatial analysis, reducing processing time from weeks to hours.",
      impact: "2 weeks → 2 hours processing",
    },
    {
      icon: "🎯",
      title: "New-Site Recommender",
      description:
        "Set-cover optimization problem solver for network site placement with greedy algorithm implementation.",
      impact: "58% business potential gain",
    },
    {
      icon: "👁️",
      title: "Trade Visibility System",
      description:
        "End-to-end monitoring using object detection models across 700k+ retail outlets with real-time inference.",
      impact: "~75% recall in production",
    },
    {
      icon: "📊",
      title: "Customer Segmentation",
      description:
        "360° segmentation of 50M+ customers using statistical modeling and behavioral feature engineering.",
      impact: "Targeted advertising platform",
    },
    {
      icon: "⏰",
      title: "Intervention Time Model",
      description:
        "Regression-based preferred intervention time modeling for conversion rate optimization.",
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
        "OCR Implementation",
        "Edge Detection",
        "Color Quantization",
        "Production Monitoring",
      ],
    },
    {
      icon: "🗺️",
      title: "Geospatial Analysis",
      skills: [
        "Spatial Indexing (KD / Ball Trees)",
        "Location Intelligence",
        "Network Propagation Modeling",
        "Coverage Analysis",
        "Optimization Algorithms",
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
        "Document Processing",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl space-y-24">

        {/* PAGE TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
           <span className="text-primary">Projects</span>
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
                <ul className="space-y-2 text-sm text-muted-foreground mt-3 mb-4">
                  {project.keyfeatures?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition"
                      >
                        View on GitHub
                      </a>
                    )}
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Research & <span className="text-primary">Academic Projects</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-xs">
                <h4 className="font-semibold text-lg mb-1">
                  {project.title}
                </h4>
                
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
            href="https://github.com/zubairtusar"
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
