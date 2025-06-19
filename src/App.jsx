import Header from './components/Header'
import Sidebar from './components/Sidebar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-gray-50 min-h-screen flex flex-col">
      <Sidebar />
      <Header />
      <main className="flex-1 md:ml-[280px] pt-20 md:pt-0">
        <AboutMe />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App