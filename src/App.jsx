import { LangProvider } from './context/LangContext'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import Services          from './components/Services'
import AcademicPortfolio from './components/AcademicPortfolio'
import TechProjects      from './components/TechProject'
import Skills            from './components/Skills'
import Contact           from './components/Contact'
import Footer            from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AcademicPortfolio />
        <TechProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}