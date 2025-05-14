import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section className='relative min-h-[600px] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-20 max-w-6xl mx-auto overflow-hidden'>
      {/* Snowfall Particle Effect */}
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: { default: "out" },
              speed: 1,
            },
          },
          detectRetina: true,
        }}
        className='absolute inset-0 z-10 pointer-events-none'
      />

      {/* Sub-Zero Image (Left Side) */}
      <div className='md:w-1/2 flex justify-center z-20'>
        <img
          src='/assets/subzero-hero-left.png'
          alt='Sub-Zero'
          className='w-72 md:w-80 lg:w-[22rem] drop-shadow-2xl'
        />
      </div>

      {/* Intro Text (Right Side) */}
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
