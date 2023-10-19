import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBarExtension from '../components/NavBarExtension'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Toolkits from '../components/Toolkits'
import About from '../components/About'
import NavBarContext from '../contexts/NavBarContextProvider'
import UserTab from '../components/UserTab'
import { motion } from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'
function AboutMe() {
  const {homeVariant}  = useAnimationContext()
  return (
    <>
      <motion.div  variants={homeVariant} animate='visible' initial='hidden'
      className='bg-[#141313] font-display max-[720px]:h-[100%] scroll-smooth max-[768px]:pb-7 pb-7 overflow-hidden'>
        <div className=' wrapper w-[60%] ml-auto mr-auto grid grid-cols-9 gap-x-5 gap-y-4 max-[720px]:flex max-[720px]:flex-col max-[720px]:w-[90%] relative'>
          <NavBarContext>
            <NavBar/>
            <NavBarExtension />
            <Profile />
            <About />
            <UserTab />
            <Projects />
            <div className=' col-span-6 grid grid-cols-2 gap-x-5 gap-y-4 grid-rows-4 max-[720px]:flex max-[720px]:flex-col max-[720px]:w-[100%]'>
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

export default AboutMe
