
const knowledgeBase = {
        h: `
            Welcome, I am Tushar assistant.
        `,    

        intro: `
            Zubair Rahman Tusar is an AI and Data Science professional with strong industry and research experience.
            He currently works in the telecom industry "Robi Axiata Limited", building large-scale machine learning and AI systems with real business impact.
        `,

        // education: `
        //     Zubair completed his B.Sc in Software Engineering from Islamic University of Technology (IUT) from 2018 to 2022, with a CGPA of 3.64 out of 4.00.
        //     His academic focus included Artificial Intelligence, Machine Learning, Big Data, Statistics, Data Structures, Algorithms, Operating Systems, and Database Systems.
        // `,

        // research: `
        //     Zubair has published multiple international research papers.

        //     One of his publications, "Transformer-Based Sentiment Analysis for Software Engineering", was presented at ICSOFT 2023.
        //     The research improved macro and weighted F1 scores by 1 to 26 percent using vocabulary augmentation and transformer ensembling.

        //     Another paper, "Nurse Care Activity Recognition using Accelerometer Data", was published at the UbiComp/ISWC 2021 workshop.
        //     It focused on human activity recognition using smartphone sensor data, Random Forest models, denoising filters, and overlapping windows.
        // `,



        previousExperience: `
            Before becoming Manager, Zubair worked at Robi Axiata Limited as a Specialist in Data Science from September 2022 to January 2024.

            He deployed a computer vision–based Trade Visibility system across more than 700,000 outlets, achieving around 75 percent recall at 80 percent IoU.
            He also developed Offer Response and LSTM models with around 70 percent recall and 67 percent production conversion.
            Additionally, he worked on Advertising-as-a-Service solutions by segmenting over 50 million customers for targeted advertising.
        `,

        // industry: `
        //     Zubair also worked at Intelligent Machines Limited as an AI Engineer from May 2022 to September 2022.

        //     His work included real-time product fault detection using computer vision, counterfeit detection using invisible watermarking,
        //     and OCR-based document verification. As an intern, he worked on Bangla license plate detection using synthetic data generated from GTA V.
        // `,

        achievements: `
            Zubair has received multiple professional awards, including:
            Top 5 Percent Performer (2023–24),
            Divisional Champion – Hall of Honor,
            Star Performer Q3 2024,
            AI Leadership Awards in Q1 and Q2 2024,
            and Sales AI Excellence Award in 2023.
        `,

        extracurricular: `
            Zubair has also achieved recognition outside work, including:
            Second place at Robi Datathon 2.0,
            Third place at the HASCA Nurse Care Activity Challenge,
            Second place in a National Photography Contest,
            Second place in a Programming Contest at IUT,
            and third place in the National Earth Carnival Photography competition.
        `,

        // language: `
        //     Zubair took the IELTS exam in 2023 and achieved an overall band score of 8.0.
        //     His scores were Speaking 9.0, Listening 8.0, Reading 7.5, and Writing 7.0.
        // `,

        // fallback: `
        //     You can ask me about Tushar’s professional experience, projects, research publications, leadership, or technical skills.
        // `,
        

        // github: `
        //     Many of Zubair’s applied AI, research, and full-stack projects are available on his GitHub, showcasing production-ready systems, research implementations, and scalable machine learning pipelines.
        // `,

        // passions: `
        //     Beyond AI and data science, Zubair expresses himself through photography and graphic design. He values being present in the moment and balancing creativity with technology and life.

        //     Photography is a major passion for him. He works with street photography and portraits, focusing on composition, lighting, and visual storytelling as moments naturally unfold. He previously served as Head of Creative Fields at IUTPS and Vice President of Photography at Neutrino ACC, where he developed a strong creative leadership mindset.

        //     His photography skills include composition, lighting control, post-processing, and storytelling. His work is showcased on Flickr.

        //     Graphic design complements his photography work. He creates complete visual narratives using Adobe creative tools, applying color theory, layout design, and digital art techniques. His design portfolio is available on Behance.

        //     Zubair is also an animal lover and has three cats. Poltu is the adventurous explorer, Perona is the gentle soul, and Puti is the house princess.
        // `,

        // languages: `
        //     Zubair is fluent in English and Bengali. He achieved an overall IELTS band score of 8.0, with a speaking score of 9.0, listening 8.0, reading 7.5, and writing 7.0. Bengali is his native language.
        // `,

        // lifePhilosophy: `
        //     Zubair believes in balancing deep technical expertise with creative expression. 
        //     He approaches both work and life by seeing the world through multiple lenses — analytical, creative, and human-centered.
        //     His philosophy is to stay grounded in the present moment, continuously learn, and create meaningful systems that blend logic, creativity, and real-world impact.
        // `,

        contact: `
            You can get in touch with Zubair Rahman Tusar for collaboration, projects, or professional opportunities.

            Email: zubairrahman@iut-dhaka.edu  
            Phone: +8801863835789  
            Location: Banasree, Dhaka, Bangladesh  

            He is open to discussing new ideas, AI projects, research collaborations, and industry opportunities.
        `

};
    const academic = {
      publications: `Zubair has published two peer-reviewed research works.

    1) Transformer-Based Sentiment Analysis for Software Engineering (ICSOFT 2023):
    Improved macro and weighted F1 scores by 1–26% using SE-vocabulary augmentation and transformer ensembling.

    2) Accelerometer-based Nurse Care Activity Recognition (UbiComp/ISWC 2021 Workshop):
    Built a smartphone-based HAR system using denoising filters, overlapping windows, and Random Forest to handle noisy sensor data.`,

      education: `Zubair completed his B.Sc in Software Engineering from Islamic University of Technology (IUT) between 2018 and 2022.`,

      cgpa: `His B.Sc CGPA is 3.64 out of 4.00, with a strong 3.88 CGPA in the last four semesters.`,

      university: `He studied at Islamic University of Technology (IUT).`,

      college: `He completed his Higher Secondary education from Adamjee Cantonment College.`,

      hscGpa: `His Higher Secondary GPA was a perfect 5.00 out of 5.00.`,

      ielts: `He achieved an overall IELTS band score of 8.0, with a speaking score of 9.0.`
    };

    const experience = {
  summary: `Zubair Rahman Tusar is an AI and Data Science professional with strong industry experience in telecom, computer vision, and applied machine learning. He currently works at Robi Axiata Limited and has previously worked at Intelligent Machines Ltd.`,

  robiRole: `He currently works at Robi Axiata Limited as Manager, AI & Data Science, starting from February 2024. He previously served as a Specialist Data Scientist at the same organization.`,

  robiARPU: `At Robi, Zubair is designing an ARPU Enhancer Model using contextual multi-armed bandits to improve offer recommendation and drive revenue uplift.`,

  robiNetwork: `He led multiple geospatial intelligence projects including a Network Coverage Monitor that reduced processing time from two weeks to two hours using KD and Ball tree indexing, and a Network Propagation Model achieving around 200 meter RMSE for site placement.`,

  robiNewSite: `He formulated a New-Site Recommender as a set-cover optimization problem using greedy algorithms, delivering a 58 percent business potential gain over previous approaches.`,

  robiGenAI: `Zubair is leading prompt engineering and RAG workshops at Robi, co-driving organization-wide generative AI adoption.`,

  robiCV: `He built a Trade Visibility system using object detection across more than 700 thousand retail outlets, achieving approximately 75 percent recall in production.`,

  robiCustomerModels: `He developed customer-focused models including Offer Response prediction using LSTM, Preferred Intervention Time regression models with 67 percent conversion rate, and large-scale customer segmentation for advertising across 50 million users.`,

intelligentMachines: `At Intelligent Machines Ltd, Zubair worked as an AI Engineer developing real-time product fault detection systems, counterfeit detection using invisible watermarking, OCR-based document verification systems, and a Bangla license-plate detection model enhanced through synthetic data generation using Grand Theft Auto V (GTA V).`,

  cvIntern: `As an AI Engineer Intern, he worked on Bangla license plate detection using synthetic data from GTA V and developed OCR-based bank statement analysis systems.`
};

  const skills = {
  summary: `Zubair has a strong and well-balanced technical skill set across machine learning, data systems, large language models, cloud infrastructure, and full-stack development.`,

  visionML: `In Vision and Machine Learning, Zubair works with PyTorch and TensorFlow for deep learning, OpenCV for image processing, YOLO-based object detection, OCR systems, LSTM and RNN models, and contextual bandit algorithms.`,

  dataGeo: `In Data and Geospatial systems, he is experienced with advanced SQL, PySpark, GeoPandas, spatial indexing techniques, KD Trees, Ball Trees, and analytical dashboards using Tableau.`,

  llm: `In LLM systems, Zubair specializes in prompt engineering, context engineering, retrieval strategies, vectorization, RAG pipelines, agentic systems, and working with LLM APIs.`,

  infraWeb: `For infrastructure and web development, he works with Docker, Kubernetes, AWS, Azure, Flask, Streamlit, React, and Next.js to build scalable AI-powered applications.`,

  languages: `Zubair programs primarily in Python and also uses C and C++, JavaScript, TypeScript, and advanced SQL.`,

  pytorch: `Yes, Zubair uses PyTorch extensively for deep learning, computer vision models, and production-grade machine learning pipelines.`,

  sql: `Zubair has advanced SQL expertise, using it for analytics, large-scale data processing, and feature engineering across millions of records.`
};

const projects = {
  overview: `Zubair has led applied AI, research, and industry-scale projects spanning agentic systems, edge AI, computer vision, geospatial intelligence, and large-scale machine learning.`,

  agentic: `Zubair built an agentic AI system for visa petitions and legal drafting. It uses retrieval-augmented generation with multi-agent orchestration through n8n. The system ingests PDFs and forms, extracts structured facts, generates petition drafts and letters of recommendation, and supports evaluation, versioning, vectorization, and reranking. The full-stack application was built using Next.js, React, Supabase, PostgreSQL, vector search, and workflow automation.`,

  wearable: `He developed a movement-monitoring wearable for healthcare that performs on-device inference to detect unusual patient movements. The system uses embedded machine learning on a Raspberry Pi Zero W with IMU sensors to enable real-time anomaly detection and caregiver alerts in a low-power wearable form factor.`,

  sentiment: `Zubair developed a transformer-based sentiment analysis system for software engineering data. By applying SE-vocabulary augmentation and transformer ensembling, the system achieved between 1 and 26 percent improvement in weighted and macro F1 scores. This work was published at ICSOFT 2023.`,

  nurseCare: `He built a complex nurse care activity recognition system using smartphone accelerometer data. The system uses denoising filters, overlapping windows, multi-domain feature extraction, and Random Forest classification to handle noisy labels. The work was presented at the UbiComp/ISWC 2021 workshop and achieved third place at the HASCA challenge.`,

  licensePlate: `Zubair collaborated on Bangla license plate detection by generating large-scale synthetic training data using Grand Theft Auto V. This approach improved detection robustness in real-world conditions where labeled data is scarce.`,

  arpu: `Zubair designed an ARPU Enhancer Model using contextual multi-armed bandits integrated into an offer recommendation engine. The system focuses on optimizing revenue uplift by selecting personalized offers.`,

  coverage: `He built a Network Coverage Monitor using location intelligence and KD and Ball-tree spatial indexing. The system summarized billions of geospatial rows and reduced processing time from nearly two weeks to about two hours.`,

  recommender: `Zubair formulated a New-Site Recommender as a set-cover optimization problem and implemented a greedy solver for network site placement. The system is currently delivering a 58 percent business potential gain.`,

  tradeVisibility: `He led the development of a Trade Visibility System using object detection models across more than 700 thousand retail outlets. The system runs in production with real-time inference and achieves around 75 percent recall.`,

  segmentation: `Zubair performed 360-degree customer segmentation for more than 50 million users using statistical modeling and behavioral feature engineering, enabling targeted advertising platforms.`,

  intervention: `He built a preferred intervention time prediction model using regression techniques to optimize customer conversion, achieving a 67 percent conversion rate in production.`,

  technicalExpertise: 'Through these projects, he has demonstrated strong technical expertise across multiple domains. In Machine Learning and AI: multi-armed bandit systems, LSTM and RNN models, ensemble methods, anomaly detection, and recommender systems. In Computer Vision: object detection using YOLO, OCR implementation, edge detection, color quantization, and production-grade monitoring pipelines. In Geospatial Analysis: spatial indexing with KD and Ball Trees, location intelligence, network propagation modeling, coverage analysis, and optimization algorithms. In LLM and Agentic Systems: Retrieval Augmented Generation, multi-agent orchestration, prompt engineering, workflow automation, and large-scale document processing.'
  
};


const passions = {
  overview: `Beyond AI and data science, Zubair expresses himself through photography and graphic design. He believes creativity is about being present in the moment, whether through a camera lens or visual design.`,

  photography: `Photography is one of Zubair’s core passions. He works with street photography and portraits, focusing on composition, lighting, post-processing, and visual storytelling as moments naturally unfold. He previously served as Head of Creative Fields at IUT Photography Society and Vice President of Photography at Neutrino ACC.`,

  design: `Zubair’s graphic design work complements his photography. He creates complete visual narratives using Adobe’s creative suite, applying color theory, layout composition, and digital art techniques to transform ideas into visuals.`,

  pets: `Zubair has three cats. Poltu is the adventurous explorer, Perona is the gentle soul, and Puti is the house princess.`,

  languages: `Zubair is fluent in English and Bengali. He achieved an overall IELTS band score of 8.0, with speaking 9.0, listening 8.0, reading 7.5, and writing 7.0. Bengali is his native language.`,

  philosophy: `Zubair believes in balancing deep technical expertise with creative expression. He sees the world through multiple lenses, finds beauty in both data and nature, and lives by the idea that creation happens in the present moment — now is now.`
};




// Intent matching
export default async function askAI(userInput) {
  const text = userInput.toLowerCase();

if (
/\b(hi|hello|hey|hey there|hi there|hello there|good morning|good afternoon|good evening)\b/i.test(text)

) {
  return {
    replyText: "Welcome, I am Tushar assistant.",
    voiceText: "Welcome, I am Tushar assistant.",
    scrollTo: null
  };
}


if (
  /\b(who is zubair|who is tushar|who's he|who is he|about him$|about zubair$|about tushar$|tell me about him$|tell me about zubair$|tell me about tushar$)\b/.test(text)
) {
  return {
    replyText: "Let me briefly introduce him.",
    voiceText: knowledgeBase.intro,
    scrollTo: "hero"
  };
}


  //Education Part
//   if (
// /\b(education|study|studies|studying|university|college|academic background|educational background|where did he study|what did he study|which university did he attend|tell me about his education|his education)\b/i.test(text)
//   ) {
//   return {
//     replyText: "sure..",
//     voiceText: knowledgeBase.education,
//     scrollTo: "academia"
//   };
// }
  if (
    /\b(publications|publication|paper|papers|research|researchs|about his publications|can you tell me about his publications|about his papers|about his researchs)\b/i.test(text)
) {
  return {
    replyText: "Sure. Let me tell you about his publications.",
    voiceText: academic.publications,
    scrollTo: "academia"
  };
}

if (
/\b(education|educational background|academic background|study|studies|degreequalification|where did he study|what did he study|which university did he attend|tell me about his education|his academic background)\b/i.test(text)
) {
  return {
    replyText: "Here is his educational background.",
    voiceText: academic.education,
    scrollTo: "academia"
  };
}
if (
/\b(cgpa|gpagrade|grades|result|results|academic result|academic results|his cgpab\.?\s?sc cgpa|what is his cgpa|what was his gpa|how was his academic result|what grade did he get|university result)\b/i.test(text)

) {
  return {
    replyText: "Here is his academic performance.",
    voiceText: academic.cgpa,
    scrollTo: "academia"
  };
}
if (
/\b(university|college|b\.?\s?sc university|graduation|graduate|where did he graduate|which university|which university did he graduate from|where did he study|his university|alma mater)\b/i.test(text)

) {
  return {
    replyText: "He studied at Islamic University of Technology.",
    voiceText: academic.university,
    scrollTo: "academia"
  };
}

if (
/\b(college|hsc college|higher secondary|intermediate college|intermediate|hsc|where did he do hsc|which college did he attend for hsc|where did he study higher secondary|his college for hsc)\b/i.test(text)

) {
  return {
    replyText: "He completed his higher secondary education at Adamjee Cantonment College.",
    voiceText: academic.college,
    scrollTo: "academia"
  };
}


if (
/\b(hsc gpa|college gpa|intermediate gpa|higher secondary gpa|hsc result|hsc grade|intermediate result|higher secondary result|what was his hsc gpa|how was his hsc result|college gpa in hsc)\b/i.test(text)

) {
  return {
    replyText: "Here is his higher secondary result.",
    voiceText: academic.hscGpa,
    scrollTo: "academia"
  };
}
if (
/\b(ielts|english score|language proficiency|band score|ielts band|ielts score|english proficiency|what is his ielts score|how good is his english|what band did he get in ielts|language test result)\b/i.test(text)

) {
  return {
    replyText: "Here is his IELTS result.",
    voiceText: academic.ielts,
    scrollTo: "academia"
  };
}


  // if (
  //   text.includes("research") ||
  //   text.includes("paper") ||
  //   text.includes("publication")
  // ) {
  //   return knowledgeBase.research;
  // }

  

if (
  /\b(experience|career|professional|tell me about (his )?experience|tell me about (his )?career|what is his professional background|what kind of experience does he have|what is his career path|does he have industry experience|tell me his experiences)\b/i.test(text)

) {
  return {
    replyText: "Okay, let me walk you through his professional experience.",
    voiceText: experience.summary,
    scrollTo: "professional"
  };
}


  if (
/\b(previous work experience|past experience|before manager|earlier experience|before (his )?manager role|before becoming a manager|what did he do before|what was he doing before|data science|data scientistdata science background|did he work in data science before|was he a data scientist before)\b/i.test(text)

  ) {
   
      return {
    replyText: "Okay, let me walk you through his previous work experience.",
    voiceText: knowledgeBase.previousExperience,
    scrollTo: "professional"
  };
  }

//   if (
//     /\b(where does he work|before manager current company|robi)\b/.test(text)

// ) {
//   return {
//     replyText: "He currently works at Robi Axiata Limited.",
//     voiceText: experience.robiRole,
//     scrollTo: "professional"
//   };
// }


  // if (
  //   text.includes("industry") ||
  //   text.includes("intelligent machines")
  // ) {
  //   return{
  //   replyText: "Okay, let me walk you through his....",
  //   voiceText: knowledgeBase.industry,
  //   scrollTo: "professional"
  //   };

  // }

  if (
/\b(arpu|arpu enhancer|revenue uplift|revenue optimization|bandit|multi armed bandit|contextual bandit|offer recommendation|recommendation engine|offer recommender|did he build an arpu model|tell me about the arpu project|how does the arpu enhancer work|does he work on revenue optimization|bandit based recommendation system)\b/i.test(text)
) {
  return {
    replyText: "Here’s his work on ARPU optimization.",
    voiceText: experience.robiARPU,
    scrollTo: "professional"
  };
}

  if (
/\b(network|network coverage|coverage|coverage monitoring|last mile coverage|geospatial|geospatial analysis|location intelligence|spatial indexing|kd tree|ball tree|network propagation|propagation model|site placement|active site planning|did he work on network coverage|tell me about (the )?network coverage project|how does he monitor coverage|how does the coverage system work|geospatial coverage system|location based coverage model)\b/i.test(text)
) {
  return {
    replyText: "He has worked extensively on network intelligence systems.",
    voiceText: experience.robiNetwork,
    scrollTo: "professional"
  };
}


  if (
/\b(new site|new site recommender|site recommender|site recommendation|site selection|site placement|what about (the )?new site|tell me about the new site recommender|how do you choose new sites|set cover|set cover problem|greedy algorithm|optimization model|business potential optimization|did he build a site recommender|site planning system)\b/i.test(text)

) {
  return {
    replyText: "He built an optimized new-site recommendation system.",
    voiceText: experience.robiNewSite,
    scrollTo: "professional"
  };
}

  if (
/\b(generative ai|gen ai|ai adoption|rag|retrieval augmented generation|prompt|prompts|prompt engineering|how does he work with generative ai|tell me about his generative ai work|does he do prompt engineering|has he worked with rag|generative ai workshops|ai adoption strategy)\b/i.test(text)
) {
  return {
    replyText: "Here’s his generative AI leadership work.",
    voiceText: experience.robiGenAI,
    scrollTo: "professional"
  };
}


if (
/\b(computer vision|cv|vision|object detection|yolo|image detection|retail vision|trade visibility|store monitoring|did he work on computer vision|tell me about his computer vision work|does he have object detection projects|retail object detection|vision based monitoring system|brand visibility detection|sales visibility system)\b/i.test(text)
) {
  return {
    replyText: "He has strong experience in computer vision systems.",
    voiceText: experience.robiCV,
    scrollTo: "professional"
  };
}

  if (
/\b(previous company|past company|last company|intelligent machines|intelligent machines ltd|iml|tell me about (his )?previous company|tell me about (his )?intelligent machines|where did he work before|what company did he work at before|his earlier company)\b/i.test(text)
) {
  return {
    replyText: "He previously worked at Intelligent Machines Ltd.",
    voiceText: experience.intelligentMachines,
    scrollTo: "professional"
  };
}


  if (
/\b(award|awards|achievement|achievements|honors?|recognition|tell me about his achievements|tell me about his awards|what are his achievements|what awards did he get|any awards|any achievements|notable achievements)\b/i.test(text)
  ) {
    return {
    replyText: knowledgeBase.achievements,
    voiceText: knowledgeBase.achievements,
    scrollTo: "professional"
    };

  }

  if (
/\b(competition|competitions|contest|contests|hackathon|hackathons|take part in any contests?|did he participate in any competition|tell me about his competition|tell me about his competitions|extra ?curricular|extra ?curricular achievements|co-?curricular|outside academics)\b/i.test(text)
  ) {
    return {
    replyText: knowledgeBase.extracurricular,
    voiceText: knowledgeBase.extracurricular,
    scrollTo: "professional"
    }

  }

  //skills

  if (
/\b(skill|skills|his skills|what skills does he have|i want to know about his skills|tell me about his skills|tell me about his tech stack|what type of skills he know|what tools does he use|programming skills|technical skills)\b/i.test(text)
) {
  return {
    replyText: "Sure, let me explain his technical skills.",
    voiceText: skills.summary,
    scrollTo: "skills"
  };
}

if (
/\b(ml|machine learning|computer vision|vision|does he work with (ml|machine learning|computer vision)|has he worked with (ml|machine learning|computer vision)|has he ever worked with (ml|machine learning|computer vision)|did he work with (ml|machine learning|computer vision)|is he working with (ml|machine learning|computer vision)|tell me about (his )?(ml|machine learning|computer vision)( skills)?| what about (his )?(ml|machine learning|computer vision)|does he have experience in (ml|machine learning|computer vision))\b/i.test(text)
) {
  return {
    replyText: "Here are his Vision and Machine Learning skills.",
    voiceText: skills.visionML,
    scrollTo: "skills"
  };
}

if (
/\b(data|geospatial|geo|does he work with data|has he worked with data|tell me about (his )?data( skills| work)?|what about (his )?data experience|does he have experience in data|does he work with geospatial data|geo data)\b/i.test(text)

) {
  return {
    replyText: "He has strong experience in data and geospatial systems.",
    voiceText: skills.dataGeo,
    scrollTo: "skills"
  };
}
if (
/\b(llm|large language models?|rag|retrieval augmented generation|prompt|prompt engineering|does he work with (llm|rag|prompts?)|has he worked with (llm|rag|prompt engineering)|tell me about (his )?(llm|rag|prompt)( skills)?|does he have experience in (llm|rag))\b/i.test(text)

) {
  return {
    replyText: "Here’s his experience with LLM systems.",
    voiceText: skills.llm,
    scrollTo: "skills"
  };
}

if (
/\b(cloud|deployment|deploy|infrastructure|infra|web|does he deploy projects|has he deployed any project|tell me about (his )?cloud experience|does he work with cloud|does he handle deployment|web deployment)\b/i.test(text)

) {
  return {
    replyText: "He also has strong infrastructure and web development skills.",
    voiceText: skills.infraWeb,
    scrollTo: "skills"
  };
}

if (
/\b(programming|programming language|programming languages|languages|what programming languages does he know|what programming languages does he use|tell me about (his )?programming skills|does he know coding|does he know programming)\b/i.test(text)
) {
  return {
    replyText: "These are the programming languages he works with.",
    voiceText: skills.languages,
    scrollTo: "skills"
  };
}


if (
  /\b(pytorch|does he use pytorch|has he worked with pytorch|pytorch experience|pytorch skills)\b/i.test(text)
) 
  {
  return {
    replyText: "Yes, he works with PyTorch.",
    voiceText: skills.pytorch,
    scrollTo: "skills"
  };
}
if (
    /\b(sql|does he use sql|has he worked with sql|sql experience|sql skills)\b/i.test(text)

) {
  return {
    replyText: "Yes, he has advanced SQL skills.",
    voiceText: skills.sql,
    scrollTo: "skills"
  };
}


  if (
/\b(ielts|english|language|does he speak english|how is his english|what about his english|is his english good|has he taken ielts|ielts score|english proficiency|language skills)\b/i.test(text)

  ) {
    return {
    replyText: knowledgeBase.language,
    voiceText: knowledgeBase.language
    }

    
  }

  
// Projects – general
if (
  /\b(project|projects|portfolio|built|work|what projects has he done|tell me about his projects|show me his portfolio|what has he built|what kind of work has he done)\b/i.test(text)

) {
  return {
    replyText: "Sure. I’ll walk you through his projects.",
    voiceText: projects.overview,
    scrollTo: "projects"
  };
}

// Agentic / LLM projects
if (
 /\b(paralegal|visa|visa petition|agentic ai|ai agent|legal agent|paralegal agent|visa agent|rag|retrieval augmented generation|does he work on visa projects|has he built a visa agent|has he worked as a paralegal agent|tell me about (his )?(paralegal|visa) (agent|project|system)|what about (his )?(paralegal|visa) (agent|project)|does he have a legal ai project|rag based legal system|multi agent system|n8n agent workflow|document drafting ai|petition drafting system)\b/i.test(text)

) {
  return {
    replyText: "He built an advanced agentic AI system.",
    voiceText: projects.agentic,
    scrollTo: "projects"
  };
}


// Computer Vision / Healthcare
if (
  /\b(wearable|healthcare|iot|wearable project|healthcare project|what about wearable project|what about healthcare wearable project|does he work with iot|healthcare iot|smart wearable)\b/i.test(text)

) {
  return {
    replyText: "He built a healthcare wearable project.",
    voiceText: projects.wearable,
    scrollTo: "projects"
  };
}


// Research projects
if (
/\b(research project|academic project|thesis|final year project|academic research|has he done research|does he have academic projects)\b/i.test(text)

) {
  return {
    replyText: "Here are his key research projects.",
    voiceText: "He has worked on sentiment analysis, nurse care activity recognition, and computer vision research projects.",
    scrollTo: "projects"
  };
}


if (
/\b(sentiment|sentiment analysis|icssoft|explain sentiment analysis project|has he worked on sentiment analysis|icssoft project)\b/i.test(text)

) {
  return {
    replyText: "He published work on sentiment analysis.",
    voiceText: projects.sentiment,
    scrollTo: "projects"
  };
}

if (
/\b(nurse|har|human activity recognition|explain Complex Nurse Care Activity Recognition project|explain Nurse Care Activity Recognition project|healthcare har|har project)\b/i.test(text)

) {
  return {
    replyText: "He worked on nurse care activity recognition.",
    voiceText: projects.nurseCare,
    scrollTo: "projects"
  };
}

if (
 /\b(license plate|number plate|bangla license plate|vehicle plate|plate detection|license plate detection|bangla plate detection|did he work on license plate detection|tell me about the bangla license plate project|computer vision plate project)\b/i.test(text)

) {
  return {
    replyText: "He worked on Bangla license plate detection.",
    voiceText: projects.licensePlate,
    scrollTo: "projects"
  };
}

if (
/\b(arpu|arpu enhancer|revenue optimization|offer recommendation|bandit system|multi armed bandit|arpu model|arpu optimization project|revenue uplift model)\b/i.test(text)) {
  return {
    replyText: "He developed an ARPU optimization system.",
    voiceText: projects.arpu,
    scrollTo: "projects"
  };
}

if (
/\b(network coverage|coverage monitorgeospatial coverage|location intelligence|coverage analysis|did he work on network coverage|coverage optimization project|kd tree|ball tree)\b/i.test(text)


) {
  return {
    replyText: "He built a network coverage intelligence system.",
    voiceText: projects.coverage,
    scrollTo: "projects"
  };
}

if (
/\b(site recommender|site recommendation|new site placement|set cover|site selection|network site planning|optimization problem|greedy algorithm project)\b/i.test(text)

) {
  return {
    replyText: "He built a site placement optimization system.",
    voiceText: projects.recommender,
    scrollTo: "projects"
  };
}

if (
/\b(trade visibility|retail monitoring|retail analytics|object detection retail|store monitoring|vision based retail system|did he work on trade visibility|retail computer vision project)\b/i.test(text)

) {
  return {
    replyText: "He developed a large-scale computer vision system.",
    voiceText: projects.tradeVisibility,
    scrollTo: "projects"
  };
}

if (
/\b(customer segmentation|user segmentation|audience segmentation|behavioral modelingcustomer analytics|did he work on segmentation|targeted advertising system|segmentation project)\b/i.test(text)

) {
  return {
    replyText: "He built a Customer Segmentation Model.",
    voiceText: projects.segmentation,
    scrollTo: "projects"
  };
}
if (
/\b(intervention|intervention time|best time to contact|conversion optimization|response time model|regression model|intervention time model|conversion rate optimization project)\b/i.test(text)

) {
  return {
    replyText: "He built a conversion optimization model.",
    voiceText: projects.intervention,
    scrollTo: "projects"
  };
}

if (
/\b(technical Expertise|what technologies does he use|tell me about his technical expertise|what technologies does he use)\b/i.test(text)
) {
return {
  replyText: "His projects demonstrate strong expertise across AI, computer vision, geospatial systems, and agentic AI.",
  voiceText: projects.technicalExpertise,
  scrollTo: "projects"
};

}

// GitHub
if (
  text.includes("github") ||
  text.includes("code") ||
  text.includes("repository")
) {
  return knowledgeBase.github;
}



// Passions & hobbies

if (
/\b(passion|passions|hobby|hobbies|creative|creativity|what are his passions|what does he do besides tech|tell me about his hobbies|does he have creative hobbies|what is he passionate about)\b/i.test(text)

) {
  return {
    replyText: "Let me share his passions.",
    voiceText: passions.overview,
    scrollTo: "passions"
  };
}


if (
/\b(photography|photographer|photo|photos|flickrstreet photography|portrait photography|tell me about his photography|does he do photography|where can i see his photos|photography portfolio)\b/i.test(text)

) {
  return {
    replyText: "Photography is one of his core passions.",
    voiceText: passions.photography,
    scrollTo: "passions"
  };
}

if (
/\b(graphic design|graphic|design|designer|behance|visual design|adobe design|tell me about his design work|does he do graphic design|design portfolio)\b/i.test(text)

) {
  return {
    replyText: "He also works in graphic design.",
    voiceText: passions.design,
    scrollTo: "passions"
  };
}

if (
/\b(cat|cats|pet|petspoltu|perona|puti|furry companiondoes he have pets|tell me about his cats)\b/i.test(text)

) {
  return {
    replyText: "He has three cats.",
    voiceText: passions.pets,
    scrollTo: "passions"
  };
}

if (
/\b(language|languages|english|bengali|ielts|ielts score|how good is his english|what languages does he know|english proficiency)\b/i.test(text)

) {
  return {
    replyText: "Here are the languages he speaks.",
    voiceText: passions.languages,
    scrollTo: "languages"
  };
}


if (
/\b(philosophy|life philosophy|mindset|beliefbeliefs|values|life|motivationhow does he think|what is his mindsetwhat motivates him|life values)\b/i.test(text)

) {
  return {
    replyText: "Here’s his life philosophy.",
    voiceText: passions.philosophy,
    scrollTo: "philosophy"
  };
}




// Contact / Get in touch
if (
  /\b(contact|i want to contact with him|i want to contact with Tushar|email|phone|reach|get in touch|location|hire|collaborate)\b/.test(text)

) {
  return {
    replytext: "You can use contact form" ,
    voiceText: knowledgeBase.contact,
    scrollTo: "contact"
  };
}



  return{
      reply: knowledgeBase.fallback,
      voiceText: knowledgeBase.fallback,
      scrollTo: "fallback"
  }; 


  
}
