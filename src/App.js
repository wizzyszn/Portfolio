import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import AnimationContext from './contexts/AnimationContext'
import Project from './pages/Project'
function App () {
  return (
    <div className='App'>
      <AnimationContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About-Me' element={<AboutMe />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </AnimationContext>
    </div>
  )
}

export default App
