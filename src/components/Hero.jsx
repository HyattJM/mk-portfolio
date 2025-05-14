import React from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <section
      id='hero'
      className='relative min-h-[600px] flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-20 max-w-6xl mx-auto overflow-hidden bg-slate-900'
    >
      {/* Snow Particle Effect */}
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            move: {
              direction: "bottom",
              enable: true,
              speed: 1,
              straight: false,
              outModes: { default: "out" },
            },
            opacity: {
              value: 0.6,
              random: true,
            },
            size: {
              value: { min: 2, max: 4 },
              random: true,
            },
            shape: {
              type: "circle",
            },
            color: {
              value: "#f9a8d4", // Tailwind pink-300
            },
          },
          detectRetina: true,
        }}
        className='absolute inset-0 z-10 pointer-events-none'
      />

      {/* Sub-Zero Image */}
      <div className='md:w-1/2 flex justify-center z-20'>
        <img
          src='/assets/subzero-hero-left.png'
          alt='Sub-Zero'
          className='w-72 md:w-80 lg:w-[22rem] drop-shadow-2xl'
        />
      </div>

      {/* Intro Text */}
      <div className='md:w-1/2 text-center md:text-left z-20'>
        <h1 className='text-5xl font-bold mb-4 text-white'>I’m James</h1>
        <p className='text-lg leading-relaxed text-slate-300 max-w-xl'>
          A full-stack developer and a problem solver. I build apps that work
          and look dope while doing it. Powered by coffee, clean code, and just
          a little Mortal Kombat.
        </p>
      </div>
    </section>
  )
}
