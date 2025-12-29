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
    <section id="professional" className="py-24 px-4">
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
                href="https://www.robi.com.bd/en"
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
                    <b>ARPU Enhancer Model:</b> Designing a contextual multi-armed bandit–based module
                     (under-development) for the offer-recommendation engine to drive ARPU uplift today.
                  </li>
                </ul>
              </div>

              {/* Network Portfolio */}
              <div>
                <h4 className="font-semibold mb-3">📡 Network Portfolio</h4>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-sm">
                  <li>
                    <b>Network Coverage Monitor:</b> Enabled last-mile coverage monitoring via location intelligence, 
                    summarizing billions of geospatial rows using KD/Ball-tree indexing - transforming ~2 weeks of work to 2 hours with better precision.
                  </li>
                  <li>
                    <b>Network Propagation Model:</b> Built and deployed an urbanization-aware network-propagation regressor 
                    (~200 Meter RMSE) for active site placement planning.
                  </li>
                  <li>
                    <b>New-Site Recommender:</b> Formulated site selection as a set-cover problem and implemented a greedy solver to maximize business potential. 
                    Currently delivering 58% business potential gain over previous approach.
                  </li>
                </ul>
              </div>

              {/* GenAI */}
              <div>
                <h4 className="font-semibold mb-3">🤖 Generative AI</h4>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground text-sm">
                  <li>
                    <b>AI Adoption Strategy:</b> Leading hands-on workshops on prompt engineering and RAG concepts. 
                    Co-driving the organization-wide generative-AI adoption as it happens.
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
            <h4 className="text-1xl font-semibold text-fuchsia-500 mt-8">
              Computer Vision & Sales Portfolio
            </h4>
            

            <div className="mt-6 space-y-4 text-muted-foreground text-sm">
              <p>
                <b>Trade Visibility:</b> Built and launched end-to-end monitoring of competitive brand-material visibility across 700k+ 
                retail outlets using object-detection models achieving ~75% recall in production with 80% IoU threshold.
              </p>
              <p>
                <b>Operational Dashboards:</b> Created executive dashboards (daily national sales, forecast vs. actual, Distribution Bot) enabling proactive, 
                data-driven decisions by senior leadership.
              </p>
             
            </div>

            
            <h4 className="text-1xl font-semibold text-fuchsia-500 mt-8">
              Customer Portfolio
            </h4>

            <div className="mt-6 space-y-4 text-muted-foreground text-sm">
              <p>
                <b>Offer Response Model:</b> Built an MVP to predict customer response to product offers using a 
                custom LSTM on historical behavior, achieving ~70% recall in lab settings.
              </p>
              <p>
                <b>Preferred Intervention Time Model:</b> Modeled and deployed "preferred intervention time" 
                via regression to maximize conversion, observing 67% conversion rate in production.
              </p>
              <p>
                <b>Acquisition Quality Prediction:</b> Developed LSTM-based models with efficacy monitoring to provide early indicators
                 of subscriber quality - delivering ~80% accuracy in lab settings.
              </p>
              <p>
                <b>Advertising-as-a-Service:</b> Performed 360° segmentation of 50M+ customers to enable targeted advertising using 
                statistical modeling and behavioral features.
              </p>
            </div>

          </Card>
        </div>

        {/* ================= Intelligent Machines ================= */}
        <div className="space-y-10">
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Intelligent Machines Ltd</h3>
                <p className="text-sm text-muted-foreground">
                  AI Engineer · May 2022 – Sep 2022
                </p>
              </div>

              <a
                href="https://dhakaailab.com/"
                className="cosmic-button text-sm"
              >
                Visit Company
              </a>
            </div>
              <div className="mt-6 space-y-4 text-muted-foreground text-sm">
                <p>
                <b>Product Line Fault Detection:</b> Developed a real-time production-quality validation 
                system using color quantization and edge-detection techniques.
              </p>
              <p>
                <b>Counterfeit Product Detection:</b> Researched and tested state-of-the-art approaches for 
                counterfeit detection via invisible-watermark embedding and decoding.
              </p>
              </div>

              <h4 className="text-1xl font-semibold text-fuchsia-500 mt-8">
              AI Engineer Intern - Sep 2021 – Apr 2022
            </h4>

            <div className="mt-6 space-y-4 text-muted-foreground text-sm">
              <p>
                <b>Document Verification:</b> Co-developed an identity-document 
                fraud detector using OCR and edge-detection techniques.
              </p>
              <p>
                <b>Dharapat:</b> Built a suite of bank-statement analyzers using OCR and 
                computer-vision techniques.
              </p>
              <p>
                <b>Bangla License-Plate Detection:</b> Worked on synthetic-data generation using Grand Theft Auto V 
                (GTA V) to improve a Bangla license-plate detection model.
              </p>
              
            </div>
              

            {/* <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground text-sm">
              <li>Real-time product fault detection using CV techniques</li>
              <li>Counterfeit detection using invisible watermarking</li>
            </ul> */}

            
          </Card>
        </div>

        {/* ================= Achievements ================= */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            🏆 Achievements
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <Card className="p-6 text-center hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">🏆 Top Performer</h4>
            <p className="text-muted-foreground text-sm">
              Top 5% of the division in 2023-2024 performance evaluations
            </p>
          </Card>

          {/* Card 2 */}
          <Card className="p-6 text-center hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">🌟 Divisional Champion</h4>
            <p className="text-muted-foreground text-sm">
              Awarded Divisional Champion in Hall of Honor (peer review program) for innovation and collaboration
            </p>
          </Card>

          {/* Card 3 */}
          <Card className="p-6 text-center hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">⭐ Star Performer Q3'2024</h4>
            <p className="text-muted-foreground text-sm">
              Awarded star performer for Q3'2024 for piloting nation-wide site recommendation rollout
            </p>
          </Card>

          {/* Card 4 */}
          <Card className="p-6 text-center hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">🤖 AI Leadership</h4>
            <p className="text-muted-foreground text-sm">
              Awarded star performer for Q1 and Q2 of 2024, consecutively for generative AI initiatives    </p>
          </Card>

          {/* Card 5 */}
          <Card className="p-6 text-center hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">📊 Sales AI Excellence</h4>
            <p className="text-muted-foreground text-sm">
              Awarded star performer for Q1, Q2 and Q3 of 2023, consecutively for delivering e2e sales related AI use cases
            </p>
          </Card>

        </div>

        </div>

        {/* ================= Co-Curricular ================= */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            🎯 Co-Curricular Achievements
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">🥈 Robi Datathon 2.0 (2022)</h4>
              <p className="text-muted-foreground text-sm">
                Placed top 2% in national competition
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">🥉 Third Nurse Care Activity Challenge - HASCA (2021)</h4>
              <p className="text-muted-foreground text-sm">
                Secured 3rd position in international competition
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">🥈 Photography Contest - Capture with The Third Eye, Season 2 (2019)</h4>
              <p className="text-muted-foreground text-sm">
                Secured 2nd position in national photography contest
              </p>
            </Card>

            {/* Card 4 */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">🥈 Intra University Freshers' Programming Contest (2018)</h4>
              <p className="text-muted-foreground text-sm">
                Secured 2nd position in university programming competition    
                </p>
            </Card>

            {/* Card 5 */}
            <Card className="p-6 text-center hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">🥉 VNEC 1st National Earth Carnival (2016)</h4>
              <p className="text-muted-foreground text-sm">
                Secured 3rd position in photography contest
              </p>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
};
