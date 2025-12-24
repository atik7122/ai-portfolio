const Tag = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
    {children}
  </span>
);

export const AcademiaSection = () => {
  return (
    <section id="academia" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl space-y-20">

        {/* ===== Title ===== */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Academic <span className="text-primary">Profile</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Research, publications, education, and technical foundations.
          </p>
        </div>

        {/* ===== Publications ===== */}
        <div className="space-y-10">
          <h3 className="text-2xl font-semibold">📚 Publications</h3>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg">
                Transformer-Based Sentiment Analysis for Software Engineering
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                ICSOFT 2023 · Conference
              </p>

              <p className="mt-3 text-muted-foreground text-sm">
                Improved macro & weighted F1 by 1–26% using vocabulary
                augmentation and transformer ensembling.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag>Transformers</Tag>
                <Tag>Data Augmentation</Tag>
                <Tag>Sentiment Analysis</Tag>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="#" className="cosmic-button text-sm">
                  View Paper
                </a>
                <button className="text-sm text-primary hover:underline">
                  BibTeX
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg">
                Nurse Care Activity Recognition using Accelerometer Data
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                UbiComp / ISWC 2021 · Workshop
              </p>

              <p className="mt-3 text-muted-foreground text-sm">
                Smartphone-based HAR system using RF with denoising filters
                and overlapping windows.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag>Human Activity Recognition</Tag>
                <Tag>Random Forest</Tag>
                <Tag>Mobile Sensors</Tag>
              </div>

              <div className="mt-6">
                <a href="#" className="cosmic-button text-sm">
                  View Paper
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ===== Education ===== */}
        <div className="space-y-10">
          <h3 className="text-2xl font-semibold">🎓 Education</h3>

          <div className="gradient-border p-6 card-hover">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h4 className="font-semibold text-lg">
                  B.Sc in Software Engineering
                </h4>
                <p className="text-muted-foreground text-sm">
                  Islamic University of Technology · 2018 – 2022
                </p>
              </div>
              <div className="text-primary font-medium">
                CGPA 3.64 / 4.00
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm">
              <div>
                <h5 className="font-semibold mb-2">AI & Data</h5>
                <p className="text-muted-foreground">
                  ML, AI, Big Data, Statistics
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Core CS</h5>
                <p className="text-muted-foreground">
                  DSA, OS, DBMS, Algorithms
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Leadership</h5>
                <p className="text-muted-foreground">
                  Student Mentor, Head of Creative Fields (IUTPS)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== IELTS ===== */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">🌍 Language Proficiency</h3>

          <div className="gradient-border p-6 card-hover flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <h4 className="font-semibold text-lg">IELTS · 2023</h4>
              <p className="text-muted-foreground text-sm">
                Overall Band Score
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Tag>Overall 8.0</Tag>
              <Tag>Speaking 9.0</Tag>
              <Tag>Listening 8.0</Tag>
              <Tag>Reading 7.5</Tag>
              <Tag>Writing 7.0</Tag>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
