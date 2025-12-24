export const AcademiaSection = () => {
  return (
    <section id="academia" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Academic <span className="text-primary">Background</span>
        </h2>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold">
              Bachelor of Computer Science
            </h3>
            <p className="text-muted-foreground">
              XYZ University • 2019 – 2023
            </p>
            <p className="mt-2 text-muted-foreground">
              Focused on software engineering, data structures, and web
              technologies.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold">
              Higher Secondary Certificate
            </h3>
            <p className="text-muted-foreground">
              ABC College • 2017 – 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
