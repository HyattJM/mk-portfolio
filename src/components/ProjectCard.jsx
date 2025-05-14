// src/components/ProjectCard.jsx
export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <div className='bg-slate-800 rounded-xl p-5 shadow-md transition hover:scale-[1.02]'>
      <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
      <p className='text-sm text-slate-300 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 text-xs mb-4'>
        {tech.map((tag) => (
          <span
            key={tag}
            className='bg-slate-700 text-slate-200 px-2 py-1 rounded'
          >
            {tag}
          </span>
        ))}
      </div>
      <div className='flex gap-2'>
        <a href={github} target='_blank' className='text-blue-400 underline'>
          GitHub
        </a>
        {demo && (
          <a href={demo} target='_blank' className='text-green-400 underline'>
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
