
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full font-plex flex flex-col items-stretch">
      {/* Sticky nav */}
      <nav className="sticky top-0 z-30 w-full px-6 py-2 bg-white/95 border-b border-border backdrop-blur supports-backdrop-blur:backdrop-blur animate-fade-in">
        <ul className="flex gap-6 justify-center font-semibold text-base">
          <li>
            <a href="#home" className="hover:underline hover:text-primary transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:underline hover:text-primary transition-colors">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:underline hover:text-primary transition-colors">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:underline hover:text-primary transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline hover:text-primary transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="flex-1 w-full max-w-5xl mx-auto px-6">
        <section id="home"><Hero /></section>
        <section id="about"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="text-xs py-4 text-muted-foreground text-center opacity-80">
        &copy; {new Date().getFullYear()} Computer Science Graduate Portfolio.
      </footer>
    </div>
  );
};

export default Index;
