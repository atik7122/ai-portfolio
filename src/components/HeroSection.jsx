import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-md opacity-40" />

              {/* Image */}
              <img
                src="/ZRT-img.png"
                alt="Zubair Rahman Tusar"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-primary">Zubair Rahman Tusar</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            AI & Data Science Manager at Robi Axiata Limited, focused on what matters today,
            building production-scale AI solutions in machine learning,
            deep learning, and data science. From recommendation systems to network optimization and
            generative AI, I work on creating value now while learning what comes next.
            Published researcher with work in sentiment analysis and human activity recognition.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm opacity-70 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
