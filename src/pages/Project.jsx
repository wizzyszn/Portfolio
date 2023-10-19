import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarExtension from '../components/NavBarExtension'
import ProjectDetails from '../components/ProjectDetails'
import Team from '../components/Team'
import Toolkits from '../components/Toolkits'
import NavBarContext from '../contexts/NavBarContextProvider'
import { motion } from 'framer-motion'
import {useAnimationContext}  from '../hooks/useAnimations'
//Framer Motion

function Project() {
  const {homeVariant} = useAnimationContext()
  return (
    <>
      <motion.div  variants={homeVariant} animate='visible' initial='hidden'
      className=' h-[100%] bg-[#141313] font-display max-[720px]:h-[100%] scroll-smooth max-[768px]:pb-7 overflow-hidden pb-7'>
        <div className=' wrapper w-[60%] ml-auto mr-auto grid grid-cols-9 gap-x-5 gap-y-4 max-[720px]:flex max-[720px]:flex-col max-[720px]:w-[90%] relative'>
          <NavBarContext>
            <NavBar />
            <NavBarExtension />
            <ProjectDetails />
            <div className=' col-span-9 grid grid-cols-2 gap-x-5 gap-y-4 grid-rows-4 max-[720px]:flex max-[720px]:flex-col max-[720px]:w-[100%]'>
              <Toolkits />
              <Team />
              <Footer />
            </div>
          </NavBarContext>
        </div>
      </motion.div>
    </>
  )
}

export default Project
