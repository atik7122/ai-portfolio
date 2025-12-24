import {
  Camera,
  Languages,
  Palette,
  PawPrint,
} from "lucide-react";

export const PassionsSection = () => {
  return (
    <section id="passions" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          My <span className="text-primary">Passions</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Beyond AI and data science, I express myself through photography and
          graphic design. I create in the moment — balancing creativity,
          technology, and life.
        </p>

        {/* Photography */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
  {/* TEXT CONTENT */}
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold flex items-center gap-2">
      <Camera className="text-primary" /> Photography
    </h3>

    <p className="text-muted-foreground">
      Capturing moments through the lens keeps me present. From street
      photography to portraits, I focus on composition, lighting, and
      storytelling as they happen.
    </p>

    <p className="text-muted-foreground">
      Former Head of Creative Fields at IUTPS and VP Photography at
      Neutrino ACC — I learned that the best shots come from being fully
      in the now.
    </p>

    <div className="flex flex-wrap gap-3 text-sm">
      <span className="badge">Composition</span>
      <span className="badge">Lighting</span>
      <span className="badge">Post-Processing</span>
      <span className="badge">Visual Storytelling</span>
    </div>

    <a
      href="https://www.flickr.com"
      target="_blank"
      rel="noreferrer"
      className="cosmic-button inline-flex"
    >
      📷 View Flickr Gallery
    </a>
  </div>

  {/* IMAGE */}
  <div className="relative">
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src="/photography.jpg"
        alt="Photography showcase"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Optional glow / accent */}
    <div className="absolute -inset-1 rounded-xl bg-primary/20 blur-xl -z-10" />
  </div>
</div>


        {/* Graphic Design */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
  {/* IMAGE / VISUAL */}
  <div className="relative md:order-1">
    <div className="gradient-border p-2 rounded-xl">
      <div className="overflow-hidden rounded-lg bg-background">
        <img
          src="/graphicdesign.png"
          alt="Graphic design showcase"
          className="w-full h-[380px] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

    {/* soft glow */}
    <div className="absolute -inset-2 bg-primary/20 blur-xl -z-10 rounded-xl" />
  </div>

  {/* TEXT CONTENT */}
  <div className="space-y-4">
    <h3 className="text-2xl font-semibold flex items-center gap-2">
      <Palette className="text-primary" /> Graphic Design
    </h3>

    <p className="text-muted-foreground">
      My design work complements my photography. I craft complete visual
      stories using Adobe’s creative tools, color theory, and layout
      composition.
    </p>

    <div className="flex flex-wrap gap-3 text-sm">
      <span className="badge">Adobe Suite</span>
      <span className="badge">Color Theory</span>
      <span className="badge">Layout Design</span>
      <span className="badge">Digital Art</span>
    </div>

    <a
      href="https://www.behance.net"
      target="_blank"
      rel="noreferrer"
      className="cosmic-button inline-flex"
    >
      🎨 View Behance Portfolio
    </a>
  </div>
</div>


        {/* Pets + Languages */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Pets */}
          <div className="card-hover bg-card p-6 rounded-lg">
  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
    <PawPrint className="text-primary" /> My Furry Companions
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {/* Poltu */}
    <div className="text-center space-y-2">
      <div className="overflow-hidden rounded-lg">
        <img
          src="/poltu.png"
          alt="Poltu the adventurous explorer"
          className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">Poltu</strong> <br />The adventurous explorer
      </p>
    </div>

    {/* Perona */}
    <div className="text-center space-y-2">
      <div className="overflow-hidden rounded-lg">
        <img
          src="/perona.png"
          alt="Perona the gentle soul"
          className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">Perona</strong> <br />The gentle soul
      </p>
    </div>

    {/* Puti */}
    <div className="text-center space-y-2">
      <div className="overflow-hidden rounded-lg">
        <img
          src="/puti.png"
          alt="Puti the house princess"
          className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">Puti</strong> <br />The house princess
      </p>
    </div>
  </div>
</div>


          {/* Languages */}
          <div className="card-hover bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Languages className="text-primary" /> Languages
            </h3>

            <p className="text-muted-foreground mb-2">
              <strong>English</strong> — IELTS 8.0  
              <br />
              Speaking: 9.0 | Listening: 8.0 | Reading: 7.5 | Writing: 7.0
            </p>

            <p className="text-muted-foreground">
              <strong>Bengali</strong> — Native
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">🎯 Life Philosophy</h3>
          <p className="text-muted-foreground">
            Balance technical expertise with creative expression.  
            See the world through multiple lenses.  
            Create in the present moment.
          </p>
        </div>
      </div>
    </section>
  );
};
