
import { Zap, Feather, Hexagon, Leaf, Atom, Dot, Coffee } from "lucide-react";

const skills = [
  {
    name: "Flutter",
    icon: <Feather className="w-7 h-7 text-primary" />,
    description: "Modern cross-platform mobile apps.",
  },
  {
    name: "Dart",
    icon: <Zap className="w-7 h-7 text-yellow-500" />,
    description: "High-performance & expressive.",
  },
  {
    name: "Node.js",
    icon: <Leaf className="w-7 h-7 text-green-600" />,
    description: "Efficient backend & APIs.",
  },
  {
    name: "React",
    icon: <Atom className="w-7 h-7 text-sky-500" />,
    description: "Sleek, interactive web UIs.",
  },
  {
    name: ".NET",
    icon: <Dot className="w-7 h-7 text-indigo-600" />,
    description: "Reliable enterprise solutions.",
  },
  {
    name: "Java",
    icon: <Coffee className="w-7 h-7 text-orange-500" />,
    description: "Robust backend and Android.",
  },
];

const Skills = () => (
  <div className="my-16" id="skills">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {skills.map(({ name, icon, description }) => (
        <div
          key={name}
          className="p-6 rounded-xl shadow group bg-card border border-border hover:shadow-lg transition-all flex flex-col items-center text-center animate-fade-in"
        >
          <div className="mb-2 scale-100 group-hover:scale-110 transition-transform">{icon}</div>
          <div className="font-semibold mb-1 text-lg">{name}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
