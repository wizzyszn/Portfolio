import {motion} from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'
function HeroHeading () {

  const {containerVariants,textVariant} = useAnimationContext()

  const text = 'Designing for the Human Experience, Web Engineer @WizzySzn'
  return (
    <>
      <motion.div className=' col-span-5' variants={containerVariants}
      >
        <div className='flex bg-[#1c1c1c] rounded-2xl min-w-[100%] wh font-bold text-lg text-gray  border border-[#363636]  min-h-[20em] '>
          <div className="p-5 text-white fade-text-container ">
            
              <motion.h1 variants={textVariant}
              className=' text-[2.5rem] leading-[3.0rem] leadin fade-text'>  
                   {text}
              </motion.h1>

          
            <motion.p variants={textVariant}
            className=" tracking-tighter font-normal leading-8 mt-4">Passionate about creating exceptional user experiences through thoughtful design, I’m a dedicated Web Designer with a knack for blending Aesthetics and Functionality.  My approach is driven by a commitment to creating visually captivating and highly functional websites that engage users effectively.</motion.p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HeroHeading
