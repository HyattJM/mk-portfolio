// src/components/About.jsx
export default function About() {
  return (
    <section id='about' className='px-6 py-20 bg-slate-800 text-slate-100'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* 👤 Left side — Text content */}
        <div>
          <h2 className='text-4xl font-bold mb-6'>About Me</h2>
          <p className='text-lg mb-4'>
            Yo — I’m James. I’m a full-stack dev who likes building things that
            work, solve problems, and look good doing it. I’ve got an associate
            degree in programming, I’m finishing up my CS bachelor’s, and I
            trained at Revature where I dove deep into Spring Boot, REST APIs,
            and SQL.
          </p>
          <p className='text-lg mb-4'>
            On the front end, I work with React, Tailwind, Vite — all the modern
            toys. On the back end, I write Java like it owes me money. I’ve also
            built Python-based game logic using Pygame because... sometimes you
            just gotta smash a paddle against a virtual wall and call it
            "physics."
          </p>
          <p className='text-lg mb-6'>
            When I’m not coding, I’m at the gym, bouldering, hiking, or just
            vibing with some tech ideas. I like automation, optimization, and
            building tools that feel smooth to use. If you’re into clean code,
            high reps, and good coffee, we’ll get along just fine.
          </p>

          {/* 🛠️ Skills list */}
          <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-2'>Tech Stack:</h3>
            <ul className='flex flex-wrap gap-3 text-sm'>
              {[
                "Java",
                "Spring Boot",
                "Hibernate",
                "MySQL",
                "React",
                "Tailwind CSS",
                "Vite",
                "JavaScript",
                "Node.js",
                "Python",
                "Pygame",
                "REST APIs",
                "Git",
                "VS Code",
              ].map((skill) => (
                <li
                  key={skill}
                  className='bg-slate-700 px-3 py-1 rounded text-white'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* 📄 Resume download */}
          <a
            href='/your-resume.pdf' // replace with your actual resume path
            download
            className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold transition'
          >
            Download Resume
          </a>
        </div>

        {/* 🖼️ Right side — Photo placeholder */}
        <div className='w-full flex justify-center'>
          <div className='w-64 h-64 rounded-full bg-sky-400 bg-opacity-10 border-4 border-sky-500 shadow-xl flex items-center justify-center text-slate-400 text-sm'>
            Your Photo Here
          </div>
        </div>
      </div>
    </section>
  )
}
