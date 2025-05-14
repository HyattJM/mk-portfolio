import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function BlossomParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: {
            value: 25,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ff69b4" }, // pink blossom
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 10,
            random: { enable: true, minimumValue: 4 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            outModes: { default: "out" },
          },
        },
      }}
    />
  )
}
