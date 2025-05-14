import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer" // 👈 new import
import { projects } from "./data/projects"

export default function App() {
  return (
    <div className='bg-slate-900 text-white scroll-smooth'>
      <Header />
      <main>
        <Hero />

        <section id='projects' className='px-6 py-20'>
          <h2 className='text-4xl font-bold text-center mb-10'>My Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <About />
        <Contact />
      </main>
      <Footer /> {/* 👈 now part of your base layout */}
    </div>
  )
}
