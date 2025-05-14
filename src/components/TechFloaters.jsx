// src/components/TechFloaters.jsx
import { FaReact, FaJava, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa"
import { SiSpringboot, SiTailwindcss, SiMysql } from "react-icons/si"

const icons = [
  { Icon: FaReact, className: "text-sky-400 top-[10%] left-[5%]" },
  { Icon: SiSpringboot, className: "text-green-400 top-[25%] right-[10%]" },
  { Icon: FaJava, className: "text-red-400 bottom-[10%] left-[15%]" },
  { Icon: FaPython, className: "text-yellow-400 bottom-[20%] right-[15%]" },
  { Icon: SiTailwindcss, className: "text-cyan-300 top-[50%] left-[40%]" },
  { Icon: SiMysql, className: "text-blue-300 bottom-[40%] right-[5%]" },
  { Icon: FaNodeJs, className: "text-green-300 top-[75%] left-[60%]" },
  { Icon: FaGitAlt, className: "text-orange-400 bottom-[10%] right-[40%]" },
]

export default function TechFloaters() {
  return (
    <div className='pointer-events-none fixed inset-0 z-0'>
      {icons.map(({ Icon, className }, idx) => (
        <Icon
          key={idx}
          className={`absolute text-4xl opacity-20 animate-float transition duration-300 hover:opacity-50 hover:scale-110 ${className}`}
        />
      ))}
    </div>
  )
}
