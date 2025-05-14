import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { projects } from "./data/projects"

export default function App() {
  return (
    <div className='text-white scroll-smooth overflow-hidden'>
      {/* 🌨️ Sub-Zero Hero Section */}
      <div className="bg-black bg-[url('/assets/subzero-bg.png')] bg-fixed bg-cover bg-left bg-no-repeat min-h-screen flex items-center">
        <div className='w-full'>
          <Header />
          <main>
            <Hero />
          </main>
        </div>
      </div>
      {/* ⚡ Raiden Projects Section */}
      <div className='bg-black py-20'>
        <section
          id='projects'
          className='px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'
        >
          {/* Left Side: Project Cards */}
          <div className='w-full lg:w-2/3'>
            <h2 className='text-4xl font-bold text-center lg:text-left mb-10'>
              My Projects
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Right Side: Raiden Image */}
          <div className='w-full lg:w-1/3 flex justify-center'>
            <img
              src='/assets/raiden-projects-right.png'
              alt='Raiden'
              className='w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] float animate-float'
            />
          </div>
        </section>
      </div>

      {/* 🧊 About Me Section */}
      <div className='bg-slate-950 py-20'>
        <About />
      </div>

      {/* 🖤 Contact Section */}
      <div className='bg-black py-20'>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
