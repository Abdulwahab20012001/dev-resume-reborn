const projects = [
  {
    name: "Awesome Flutter App",
    description: "A cross-platform mobile app built using Flutter and Dart.",
    stack: ["Flutter", "Dart"],
    link: "#",
  },
  {
    name: "Node.js API Backend",
    description: "RESTful API using Node.js & Express with JWT authentication.",
    stack: ["Node.js", "Express", "JWT"],
    link: "#",
  },
  {
    name: "React Dashboard",
    description: "Rich-interactive admin dashboard with React & Tailwind CSS.",
    stack: ["React", "Tailwind"],
    link: "#",
  },
  {
    name: ".NET Inventory System",
    description: "Inventory management system with .NET and SQL Server.",
    stack: [".NET", "SQL Server"],
    link: "#",
  },
  {
    name: "Java REST Service",
    description: "Robust RESTful service for enterprise integration.",
    stack: ["Java", "Spring"],
    link: "#",
  },
  {
    name: "StudyBuddy: Connect with Tutor",
    description:
      "StudyBuddy is a Flutter-based e-learning mobile app that connects students with tutors. It features course creation, a tutor finder, chat functionality, and secure payments via Stripe. Firebase powers real-time data handling and user authentication, making the platform seamless and scalable.",
    stack: ["Flutter", "Firebase", "Stripe"],
    link: "#",
  },
];

const Projects = () => (
  <div className="my-16" id="projects">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Projects</h2>
    <div className="grid gap-7 md:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={project.name}
          className="rounded-xl p-6 border border-border shadow bg-card hover:shadow-xl hover:-translate-y-1 transition-all group animate-fade-in"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-lg font-medium">
              <span>{project.name}</span>
              {/* Simulate link if URL is set */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-1 text-primary underline text-base hover:opacity-80"
                >
                  Visit
                </a>
              )}
            </div>
            <div className="text-muted-foreground mb-2">{project.description}</div>
            <div className="flex flex-wrap gap-3 mt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted rounded-md text-xs font-semibold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
