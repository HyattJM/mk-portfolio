// src/components/Header.jsx
export default function Header() {
  return (
    <header className='fixed top-0 w-full bg-slate-900 border-b border-slate-800 z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
        <span className='text-white font-bold text-lg'>James Hyatt</span>
        <nav className='space-x-6 text-sm text-slate-300'>
          <a href='#home' className='hover:text-white'>
            Home
          </a>
          <a href='#projects' className='hover:text-white'>
            Projects
          </a>
          <a href='#about' className='hover:text-white'>
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
