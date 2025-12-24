export const ProfessionalSection = () => {
  return (
    <section id="professional" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-muted-foreground">
              Freelance • 2022 – Present
            </p>
            <ul className="list-disc list-inside mt-3 text-muted-foreground">
              <li>Built responsive React & Tailwind websites</li>
              <li>Integrated REST APIs</li>
              <li>Optimized UI performance</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold">Intern Web Developer</h3>
            <p className="text-muted-foreground">
              Tech Company • 2021 – 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
