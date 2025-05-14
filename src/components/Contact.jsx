// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id='contact' className='px-6 py-20 bg-slate-900 text-white'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>Contact</h2>
        <p className='text-lg text-slate-300 mb-6'>
          Want to collaborate, hire me, or just talk code? Let’s connect.
        </p>
        <div className='flex flex-col gap-3 items-center text-sm'>
          <a
            href='mailto:your.email@example.com'
            className='text-blue-400 hover:underline'
          >
            📧 your.email@example.com
          </a>
          <a
            href='https://github.com/yourgithub'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline'
          >
            🐙 GitHub
          </a>
          <a
            href='https://linkedin.com/in/yourlinkedin'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline'
          >
            💼 LinkedIn
          </a>
        </div>
        {/* Optional form placeholder */}
        {/* <div className="mt-10 text-slate-400 text-sm italic">Contact form coming soon.</div> */}
      </div>
    </section>
  )
}

