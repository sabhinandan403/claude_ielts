import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Courses from './pages/Courses.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Privacy from './pages/Privacy.jsx'
import Results from './pages/Results.jsx'
import Terms from './pages/Terms.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="results" element={<Results />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
