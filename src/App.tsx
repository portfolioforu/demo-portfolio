import { Route, Routes } from 'react-router-dom'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Footer from './components/Footer'
import Home from './pages/Home'
import Nav from './components/Nav'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-muted">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Experience />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
