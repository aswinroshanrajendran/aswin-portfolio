import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/components/layout/layout'
import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import { Experience } from '@/pages/experience'
import { Skills } from '@/pages/skills'
import { Projects } from '@/pages/projects'
import { Contact } from '@/pages/contact'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
