
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="py-24 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-blue-600">A.Qayyum</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-6">
          Frontend Developer
        </p>

        <p className="max-w-xl text-slate-500 mb-8">
         Frontend Developer with 1+ year of hands-on experience building and deploying production-ready web applications used by real users. Skilled in React, Next.js, and TypeScript with experience in full-stack development, authentication systems, and RESTful APIs. Experienced in GitHub-based workflows including feature branches, pull requests, and incremental deployments. Strong focus on UI/UX design (Figma), performance, and maintainable code.  <strong>US Citizen – No sponsorship required.</strong>
        </p>

        <a
          href="/frontend_developer_resume.docx"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
        >
          Download Resume
        </a>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-10 px-6 bg-slate-50">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">

          {/* Job Tracker */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Job Tracker</h3>

            <p className="text-slate-600 mb-4">
              Full-stack job tracking application with secure authentication,
              CRUD operations, real-time updates, and a structured UI designed
              in Figma before development.
            </p>

            <p className="text-sm text-slate-500 mb-2">
              Tech: Next.js App Router, React, Prisma ORM, PostgreSQL, React Query, Auth.js
            </p>

            <p className="text-sm text-slate-500 mb-4">
              Design: Figma (UI/UX wireframes and dashboard planning before development)
            </p>

            <div className="mt-4 text-sm text-slate-600 space-y-2">
              <p>
                <strong>Problem:</strong> Needed a secure, real-time way to track job applications.
              </p>
              <p>
                <strong>Solution:</strong> Used Auth.js for authentication and React Query for server data fetching.
              </p>
              <p>
                <strong>Outcome:</strong> Deployed to Vercel, used by 50+ weekly users with protected routes and CRUD features.
              </p>
              <p>
                <strong>Workflow:</strong> Feature branches, pull requests, incremental commits, and deployment verification ensured safe development.
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <a href="https://job-tracker-bice.vercel.app" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/Eagle-2026/job-tracker" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Todo App */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Todo App</h3>

            <p className="text-slate-600 mb-4">
              Responsive React app for managing daily tasks with filtering,
              dark/light mode, and notifications.
            </p>

            <p className="text-sm text-slate-500 mb-4">
              Tech: React, Material-UI, Context API, LocalStorage
            </p>

            <div className="mt-4 text-sm text-slate-600 space-y-2">
              <p>
                <strong>Problem:</strong> Default todo apps lose data and lack proper UX.
              </p>
              <p>
                <strong>Solution:</strong> Managed state with Context API and persisted tasks in localStorage.
              </p>
              <p>
                <strong>Outcome:</strong> Fully responsive app deployed to Vercel.
              </p>
              <p>
                <strong>Workflow:</strong> Incremental improvements with testing and deployment checks.
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <a href="https://todo-list-two-kappa-56.vercel.app" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/Eagle-2026/todo-list-2025" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Employment Form */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Employment Form</h3>

            <p className="text-slate-600 mb-4">
              Multi-step employment form with validation, saved progress, and responsive design.
            </p>

            <p className="text-sm text-slate-500 mb-4">
              Tech: React, Tailwind CSS, Context API, LocalStorage
            </p>

            <div className="mt-4 text-sm text-slate-600 space-y-2">
              <p>
                <strong>Problem:</strong> Multi-step forms often lose progress and confuse users.
              </p>
              <p>
                <strong>Solution:</strong> Managed form state across steps using Context API and localStorage.
              </p>
              <p>
                <strong>Outcome:</strong> Smooth multi-step experience with persistent data.
              </p>
              <p>
                <strong>Workflow:</strong> Iterative development with testing and deployment validation.
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <a href="https://employment-form-2025.vercel.app" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="https://github.com/Eagle-2026/employment-form-2025" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
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
            <h3 className="text-lg font-semibold mb-3 text-center">Backend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Auth.js / NextAuth",
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

          {/* Tools & Workflow */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">
              Tools & Workflow
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git & GitHub",
                "Vercel",
                "Jest",
                "React Testing Library",
                "GitHub Issues",
                "Feature Branches",
                "Pull Requests",
                "Incremental Commits",
                "Refactoring",
                "Debugging",
                "Deployment Verification",
                "Responsive Design",
                "Accessibility",
                "Form Validation",
                "Figma"
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-100 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-slate-800 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <div className="flex justify-center gap-6">
          <a href="mailto:aq.2025@yahoo.com" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/Eagle-2026" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/a-q-9b60233a3/" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}