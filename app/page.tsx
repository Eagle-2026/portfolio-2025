export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="py-24 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-blue-600">A.Qayyum</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-6">
          Junior Frontend Developer
        </p>

        <p className="max-w-xl text-slate-500 mb-8">
          I build clean, responsive web applications using React and Next.js.
        </p>

        <a
          href="/frontend_developer_resume.docx"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
        >
          Download Resume
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-10 px-6 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Job Tracker */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Job Tracker </h3>
            <p className="text-slate-600 mb-4">
              Full-stack app to track job applications with authentication,
              dashboard, and CRUD features.
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Tech: Next.js, React, Prisma, PostgreSQL, React Query, Auth.js
            </p>
            <div className="flex gap-3">
              <a
                href="https://job-tracker-bice.vercel.app"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Eagle-2026/job-tracker"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Todo App */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Todo App</h3>
            <p className="text-slate-600 mb-4">
              Responsive React app to manage daily tasks with filtering,
              dark/light mode, and toast notifications.
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Tech: React, Material-UI, Context API, LocalStorage
            </p>
            <div className="flex gap-3">
              <a
                href="https://todo-list-two-kappa-56.vercel.app"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Eagle-2026/todo-list-2025"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Form Project */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Form Project</h3>
            <p className="text-slate-600 mb-4">
              Form application with validation and controlled inputs for better
              user experience.
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Tech: React, JavaScript, React Hook Form
            </p>
            <div className="flex gap-3">
              <a
                href="https://employment-form-2025.vercel.app"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Eagle-2026/employment-form-2025"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "React Query",
                "React Hook Form",
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-100 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">
              Backend (Basic)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Auth.js",
                "Node.js",
                "REST APIs",
                "Prisma ORM",
                "PostgreSQL",
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-100 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">
              Tools & Testing (Basic)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "Vercel", "Jest", "React Testing Library"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 rounded-lg"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-slate-800 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="aq.2025@yahoo.com" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/Eagle-2026" className="hover:underline">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/a-q-9b60233a3/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
