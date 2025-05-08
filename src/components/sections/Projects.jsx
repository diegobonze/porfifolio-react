import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Fincheck</h3>
              <p className="text-gray-400 mb-4">
                Fincheck is an application developed to help users monitor their personal finances easily and efficiently. The goal of the project is to provide tools that allow full control over bank accounts, investments, expenses, income, and financial planning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "PostgreSQL", "Docker", "NestJS", "Prisma", "JWT"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col">
                <a
                  href="https://github.com/diegobonze/fincheck"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-4 mb-2"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/diegobonze/fincheck"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-2 mb-4"
                >
                  View project on GitHub →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Ignite Timer</h3>
              <p className="text-gray-400 mb-4">
                Ignite Timer is a time management app inspired by the Pomodoro technique. It allows users to set a custom timer to focus on tasks. Once a cycle is completed or interrupted, the time is automatically saved in a history, making it easy to track productivity over time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML and CSS", "React", "TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                <a
                  href="https://ignite-timer-vert.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-4 mb-2"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/diegobonze/IgniteTimer"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-2 mb-4"
                >
                  View project on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
