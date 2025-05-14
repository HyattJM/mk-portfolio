// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white py-10 px-4 text-center'>
      <p className='text-sm mb-6'>
        Want to collaborate, hire me, or just talk code? Let’s connect.
      </p>
      <div className='flex justify-center gap-6 text-2xl mb-4'>
        <a
          href='mailto:jamesmichaelhyatt@gmail.com'
          className='hover:text-sky-400 transition'
          aria-label='Email'
        >
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/HyattJM'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-sky-400 transition'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/james-hyatt-computer-programmer'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-sky-400 transition'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
      </div>
      <p className='text-xs text-slate-500'>
        &copy; {new Date().getFullYear()} James Hyatt. All rights reserved.
      </p>
    </footer>
  )
}
