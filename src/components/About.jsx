import React from "react"
import { FaReact, FaJava, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa"
import { SiSpringboot, SiTailwindcss, SiMysql } from "react-icons/si"

export default function About() {
  return (
    <section id='about' className='px-6 py-20 bg-slate-800 text-slate-100'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center'>
        {/* Left - Raiden Card */}
        <div className='bg-slate-700 rounded-xl shadow-lg p-4 flex flex-col items-center'>
          <img
            src='/assets/raiden-two.png'
            alt='Raiden'
            className='w-[240px] md:w-[280px] lg:w-[300px]'
          />
          <h3 className='text-white mt-4 font-bold text-lg'>Raiden</h3>
          <p className='text-slate-400 text-sm'>Thunder Guardian</p>
        </div>

        {/* Center - About Text + Resume */}
        <div className='flex flex-col justify-between items-center md:items-start text-center md:text-left'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold'>About Me</h2>
            <p>
              I’m James. I’m a full-stack dev who likes building things that
              work, solve problems, and look good doing it. I’ve got an
              associate degree in programming, I’m finishing up my CS
              bachelor’s, and I trained at Revature where I dove deep into
              Spring Boot, REST APIs, and SQL.
            </p>
            <p>
              On the front end, I work with React, Tailwind, Vite — all the
              modern toys. On the back end, I write Java like it owes me money.
              I’ve also built Python-based game logic using Pygame because…
              sometimes you just gotta smash a paddle against a virtual wall and
              call it "physics."
            </p>
            <p>
              When I’m not coding, I’m at the gym, bouldering, hiking, or just
              vibing with some tech ideas. I like automation, optimization, and
              building tools that feel smooth to use. If you’re into clean code,
              high reps, and good coffee, we’ll get along just fine.
            </p>
          </div>

          <a
            href='/assets/HyattJM_CV.pdf'
            download
            className='mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded shadow transition'
          >
            Download Resume
          </a>
        </div>

        {/* Right - Profile Card with Clickable Tech Icons */}
        <div className='bg-slate-700 rounded-xl shadow-lg p-6 flex flex-col items-center'>
          <img
            src='/assets/my-photo.png'
            alt='James Hyatt'
            className='w-40 h-40 object-cover rounded-full border-4 border-sky-500 shadow-md'
          />
          <h3 className='text-white mt-3 text-xl font-bold'>James Hyatt</h3>
          <p className='text-sky-400 text-sm mb-4'>Software Engineer</p>

          <div className='grid grid-cols-4 gap-4 text-3xl'>
            <a
              href='https://reactjs.org/'
              target='_blank'
              rel='noreferrer'
              title='React'
            >
              <FaReact className='text-sky-400 hover:scale-110 transition' />
            </a>
            <a
              href='https://spring.io/projects/spring-boot'
              target='_blank'
              rel='noreferrer'
              title='Spring Boot'
            >
              <SiSpringboot className='text-green-500 hover:scale-110 transition' />
            </a>
            <a
              href='https://www.java.com/'
              target='_blank'
              rel='noreferrer'
              title='Java'
            >
              <FaJava className='text-red-500 hover:scale-110 transition' />
            </a>
            <a
              href='https://www.mysql.com/'
              target='_blank'
              rel='noreferrer'
              title='MySQL'
            >
              <SiMysql className='text-blue-600 hover:scale-110 transition' />
            </a>
            <a
              href='https://nodejs.org/'
              target='_blank'
              rel='noreferrer'
              title='Node.js'
            >
              <FaNodeJs className='text-green-400 hover:scale-110 transition' />
            </a>
            <a
              href='https://www.python.org/'
              target='_blank'
              rel='noreferrer'
              title='Python'
            >
              <FaPython className='text-yellow-400 hover:scale-110 transition' />
            </a>
            <a
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noreferrer'
              title='Tailwind CSS'
            >
              <SiTailwindcss className='text-cyan-300 hover:scale-110 transition' />
            </a>
            <a
              href='https://git-scm.com/'
              target='_blank'
              rel='noreferrer'
              title='Git'
            >
              <FaGitAlt className='text-orange-400 hover:scale-110 transition' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

