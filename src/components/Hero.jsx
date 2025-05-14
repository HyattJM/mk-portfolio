// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24'
    >
      <h1 className='text-5xl font-extrabold text-white mb-4'>
        Hey, I’m James 👋
      </h1>
      <p className='text-slate-300 max-w-xl text-lg'>
        Full-stack dev with a focus on turning code into cool. I build
        functional, scalable apps with Java, Python, React & Spring Boot.
      </p>
      <a
        href='#projects'
        className='mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition'
      >
        View My Work
      </a>
    </section>
  )
}
