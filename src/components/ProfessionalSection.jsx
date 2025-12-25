const Tag = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="gradient-border p-6 card-hover">{children}</div>
);

export const ProfessionalSection = () => {
  return (
    <section id="professionals" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl space-y-20">

        {/* ===== Section Title ===== */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry impact through AI, data science, and applied machine learning.
          </p>
        </div>

        {/* ================= Robi Axiata ================= */}
        <div className="space-y-10">
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Robi Axiata Limited</h3>
                <p className="text-sm text-muted-foreground">
                  Manager, AI & Data Science · Feb 2024 – Present
                </p>
              </div>

              <a
                href="#"
                className="cosmic-button text-sm"
              >
                Visit Company
              </a>
            </div>

            {/* ---- Portfolio Blocks ---- */}
            <div className="mt-8 space-y-8">

              {/* Customer Portfolio */}
              <div>
                <h4 className="font-semibold mb-3">📈 Customer Portfolio</h4>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-sm">
                  <li>
                    <b>ARPU Enhancer Model:</b> Designing a contextual
                    multi-armed bandit–based recommendation engine to drive
                    ARPU uplift.
                  </li>
                </ul>
              </div>

              {/* Network Portfolio */}
              <div>
                <h4 className="font-semibold mb-3">📡 Network Portfolio</h4>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-sm">
                  <li>
                    <b>Network Coverage Monitor:</b> Reduced geospatial
                    processing time from ~2 weeks to 2 hours using KD/Ball trees.
                  </li>
                  <li>
                    <b>Network Propagation Model:</b> Urbanization-aware
                    regressor (~200m RMSE) for site placement.
                  </li>
                  <li>
                    <b>New-Site Recommender:</b> Set-cover formulation delivering
                    58% business potential gain.
                  </li>
                </ul>
              </div>

              {/* GenAI */}
              <div>
                <h4 className="font-semibold mb-3">🤖 Generative AI</h4>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-sm">
                  <li>
                    Leading prompt engineering & RAG workshops and driving
                    org-wide AI adoption.
                  </li>
                </ul>
              </div>

            </div>
          </Card>

          {/* ===== Specialist Role ===== */}
          <Card>
            <h4 className="text-xl font-semibold">
              Specialist, Data Science · Sep 2022 – Jan 2024
            </h4>

            <div className="mt-6 space-y-4 text-muted-foreground text-sm">
              <p>
                <b>Trade Visibility:</b> Deployed CV system across 700k+ outlets
                achieving ~75% recall at 80% IoU.
              </p>
              <p>
                <b>Offer Response & LSTM Models:</b> Achieved ~70% recall and
                67% production conversion.
              </p>
              <p>
                <b>Advertising-as-a-Service:</b> Segmented 50M+ customers
                for targeted advertising.
              </p>
            </div>
          </Card>
        </div>

        {/* ================= Intelligent Machines ================= */}
        <div className="space-y-10">
          <Card>
            <h3 className="text-2xl font-semibold">Intelligent Machines Ltd</h3>
            <p className="text-sm text-muted-foreground">
              AI Engineer · May 2022 – Sep 2022
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground text-sm">
              <li>Real-time product fault detection using CV techniques</li>
              <li>Counterfeit detection using invisible watermarking</li>
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              <b>AI Engineer Intern:</b> OCR-based document verification,
              Bangla license-plate detection using synthetic data (GTA V).
            </p>
          </Card>
        </div>

        {/* ================= Achievements ================= */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            🏆 Achievements
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Top 5% Performer (2023–24)",
              "Divisional Champion – Hall of Honor",
              "Star Performer Q3 2024",
              "AI Leadership Awards (Q1 & Q2 2024)",
              "Sales AI Excellence (2023)",
            ].map((item, i) => (
              <Card key={i}>
                <p className="font-medium text-center">{item}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ================= Co-Curricular ================= */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            🎯 Co-Curricular Highlights
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "🥈 Robi Datathon 2.0 (Top 2%)",
              "🥉 HASCA Nurse Care Activity Challenge",
              "🥈 National Photography Contest",
              "🥈 Programming Contest (IUT)",
              "🥉 National Earth Carnival Photography",
            ].map((item, i) => (
              <Card key={i}>
                <p className="text-center font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
