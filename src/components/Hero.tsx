const Hero = () => (
  <div className="flex flex-col items-center justify-center py-16 md:flex-row md:gap-10 gap-6 animate-fade-in">
    <img
      src="/lovable-uploads/fd990832-2e37-43ee-af11-2722cbb9464a.png"
      alt="Profile"
      className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-4 md:mb-0"
      draggable={false}
    />
    <div className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
        Hi, I'm <span className="text-primary">Abdulwahab</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-4 max-w-lg">
        Computer Science graduate • Full-Stack &amp; Flutter Developer
        <br />
        {/* Tagline can be more personal */}
        Building solid, beautiful software with{" "}
        <span className="font-semibold text-primary">
          Flutter, Dart, Node.js, .NET, Java, and React
        </span>
      </p>
      <a
        href="#contact"
        className="mt-2 px-7 py-2 rounded font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow transition-all"
      >
        Get in touch
      </a>
    </div>
  </div>
);

export default Hero;
