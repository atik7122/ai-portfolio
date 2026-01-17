const Tag = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
    {children}
  </span>
);

export const AcademiaSection = () => {
  return (
    <section id="academic" className="py-24 px-4">
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
                Effectiveness of Data Augmentation and Ensembling Using Transformer-Based Models for Sentiment Analysis: Software Engineering Perspective
              </h4>

               <p className="text-sm text-muted-foreground mt-2">
                <b>Zubair Tusar</b>, Sadat Bin Sharfuddin, Muhtasim Abid, Md. Haque, Md. Mostafa
              </p>

              <p className="text-sm text-muted-foreground mt-2 text-fuchsia-500">
               <i><b>ICSOFT 2023</b> - Volume 1 [Conference]</i> 
              </p>

              <p className="mt-3 text-muted-foreground text-sm">
                Proposed SE-vocabulary augmentation and transformer ensembling for sentiment polarity,
                 improving weighted/macro F1 by 1–26% on four SE datasets over prior baselines.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag>Transformers</Tag>
                <Tag>Data Augmentation</Tag>
                <Tag>Sentiment Analysis</Tag>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="https://www.scitepress.org/Link.aspx?doi=10.5220/0012092500003538" className="cosmic-button text-sm">
                  View Paper
                </a>
                
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <h4 className="font-semibold text-lg">
                Accelerometer-based Complex Nurse Care Activity Recognition using Machine Learning Approach
              </h4>

              <p className="text-sm text-muted-foreground mt-2">
                <b>Zubair Tusar</b>, Maksuda Islam, Sadia Sharmin
              </p>

              <p className="text-sm text-muted-foreground mt-2 text-fuchsia-500">
                <i><b>UbiComp/ISWC'21</b> Adjunct [Workshop, non-archival]</i>
              </p>

              <p className="mt-3 text-muted-foreground text-sm">
                Built a smartphone-accelerometer HAR system with denoising filters, 
                overlapping windows, multi-domain features, and RF battling high data/label noise.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Tag>Human Activity Recognition</Tag>
                <Tag>Random Forest</Tag>
                <Tag>Mobile Sensors</Tag>
              </div>

              <div className="mt-6">
                <a href="https://dl.acm.org/doi/10.1145/3460418.3479390" className="cosmic-button text-sm">
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
                  Islamic University of Technology · Jan 2018 – Apr 2022
                </p>
              </div>
              <div className="text-primary font-medium">
                CGPA 3.64 / 4.00 (last 4 semesters: 3.88)
              </div>
            </div>

              <div>
              <h4 className="font-semibold mt-10 text-lg">
                Notable Coursework:    
              </h4>
              </div>
              
            <div className="grid md:grid-cols-4 gap-4 mt-6 text-sm">

  {/* Card 1 */}
  <div className="bg-white dark:bg-slate-800
                  text-slate-900 dark:text-slate-100
                  rounded-xl shadow-md dark:shadow-none
                  p-6 hover:shadow-lg transition">
    <h5 className="font-semibold text-lg mb-2">
      Core Computer Science
    </h5>
    <p className="text-slate-600 dark:text-slate-300">
      - Data Structures <br />
      - Algorithms <br />
      - Database Management <br />
      - Operating Systems <br />
      - Microprocessor
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white dark:bg-slate-800
                  text-slate-900 dark:text-slate-100
                  rounded-xl shadow-md dark:shadow-none
                  p-6 hover:shadow-lg transition">
    <h5 className="font-semibold text-lg mb-2">
      AI & Data Science
    </h5>
    <p className="text-slate-600 dark:text-slate-300">
      - Probability and Statistics <br />
      - Big Data Analysis <br />
      - Machine Learning <br />
      - Artificial Intelligence
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white dark:bg-slate-800
                  text-slate-900 dark:text-slate-100
                  rounded-xl shadow-md dark:shadow-none
                  p-6 hover:shadow-lg transition">
    <h5 className="font-semibold text-lg mb-2">
      Software Engineering
    </h5>
    <p className="text-slate-600 dark:text-slate-300">
      - Software Security <br />
      - Software Maintenance <br />
      - Software Requirement and Specification <br />
      - Design Patterns <br />
      - Technical Report Writing
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-white dark:bg-slate-800
                  text-slate-900 dark:text-slate-100
                  rounded-xl shadow-md dark:shadow-none
                  p-6 hover:shadow-lg transition">
    <h5 className="font-semibold text-lg mb-2">
      Development
    </h5>
    <p className="text-slate-600 dark:text-slate-300">
      - Embedded Software Development <br />
      - Server Programming
    </p>
  </div>

</div>


          <div>
              <h4 className="font-semibold mt-10 mb-4 text-lg">
                  Leadership Roles:              
              </h4>
                <p className="mb-2"><b>Student Mentor</b> - Guided students through applied sessions on wireframing and prototyping</p>

                <p><b>Head of Creative Fields</b> - Islamic University of Technology Photography Society (IUTPS)</p>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between mt-14 md:items-center gap-4">
              <div>
                <h4 className="font-semibold text-lg">
                  Higher Secondary School Certificate
                </h4>
                <p className="text-muted-foreground text-sm">
                  Adamjee Cantonment College · Jun 2015 – Apr 2017
                </p>
              </div>
              <div className="text-primary font-medium">
                GPA 5.00/5.00
              </div>
            </div>

            <div>
              <h4 className="font-semibold mt-10 mb-4 text-lg">
                  Leadership Roles:              
              </h4>
                <p className="mb-2"><b>Vice President of Photography </b>- Neutrino ACC Science Club - Covered event photographs and led photography initiatives</p>

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
                <b>Overall Band Score</b> - 8.0/9.0
              </p>
              
            </div>

            <div className="flex gap-4 flex-wrap">
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
