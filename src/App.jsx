import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import RollingHome from './pages/projects/RollingHome.jsx'
import D3Companion from './pages/projects/D3Companion.jsx'
import Prism from './pages/projects/Prism.jsx'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/rolling-home" element={<RollingHome />} />
          <Route path="/projects/d3-companion" element={<D3Companion />} />
          <Route path="/projects/prism" element={<Prism />} />
        </Routes>
      </main>
    </>
  )
}

export default App
