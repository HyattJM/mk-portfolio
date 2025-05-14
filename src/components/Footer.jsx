// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className='bg-slate-900 border-t border-slate-700 pt-10 pb-6'>
      {/* Top gradient stripe */}
      <div className='h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 mb-8' />

      <div className='max-w-4xl mx-auto px-6 flex flex-col items-center text-center text-slate-300'>
        <div className='flex space-x-6 mb-4 text-xl'>
          <a
            href='https://github.com/yourgithub'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub className='hover:text-white transition' />
          </a>
          <a
            href='https://linkedin.com/in/yourlinkedin'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='hover:text-white transition' />
          </a>
          <a href='mailto:your.email@example.com'>
            <FaEnvelope className='hover:text-white transition' />
          </a>
        </div>

        <p className='text-sm mb-2'>
          © {new Date().getFullYear()} James Hyatt. All rights reserved.
        </p>

        <a href='#home' className='text-xs text-sky-400 hover:underline'>
          ↑ Back to Top
        </a>

        {/* MK Easter Egg Slot 💀 */}
        <div className='mt-4 text-xs text-slate-600 italic'>
          Mortal Kombat Theme Coming Soon...
        </div>
      </div>
    </footer>
  )
}
