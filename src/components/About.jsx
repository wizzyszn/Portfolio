import { useState } from 'react';
import {HiDownload} from 'react-icons/hi'
import { motion } from 'framer-motion';
import {useAnimationContext} from '../hooks/useAnimations'
function About () {
  const {containerVariants, textVariant} = useAnimationContext()
  const [error , setError] = useState(false)
  const handleClick = async() => {
    try{
    const response = await fetch('http://localhost:5000/download');
    if(!response){
      throw new Error(` Http Error ${response.status}`)
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url
    link.download = "wisdom's Resume"   
    link.click()
    window.URL.revokeObjectURL(blob)

  }catch(err){
    console.log(err)
    setError(true)
  }}
  return (
    <>
      <motion.div variants={containerVariants}
      className=' col-span-5'>
        <div className=' text-white bg-[#1c1c1c] rounded-2xl min-w-[100%] font-bold text-lg text-gray  border border-[#363636]  min-h-[20em] '>
          <div className=' flex flex-col gap-y-5 p-5 bg-gradient-to-t from-transparent via-transparent to-white text-transparent bg-clip-text'>
            <motion.div variants={textVariant}
            className=''>
              <h1 className=" before:content-[url('./images/wave.gif')] before:mr-1 text-gray-300 text-bold text-4xl">Hey there! I’m Wisdom </h1>
            </motion.div>
            <motion.p variants={textVariant}
            className=' text-[0.9rem] leading-6 font-normal text-gray-200'>
              A passionate web developer with a strong desire to create
              beautiful, responsive, and user-friendly websites, driven by the
              opportunity to solve complex problems and turn ideas into reality,
              equipped with a skill set encompassing front-end technologies like
              HTML, CSS, and JavaScript, as well as proficiency in modern
              JavaScript frameworks like React and back-end technologies such as
              Node.js and Express.js, emphasizing collaboration, effective
              communication, and a commitment to continuous learning, always
              excited about new opportunities to bring innovative ideas to life 
              in the ever-evolving world of web development.
            </motion.p>
            <motion.div variants={textVariant} whileHover={{ scale : 1.1}}
            className=' flex font-normal cursor-pointer place-items-center gap-1 text-md justify-center text-black bg-white w-[40%]  rounded-md p-1 max-[768px]:text-sm  flex-nowrap mt-2' onClick={handleClick}>
              <HiDownload className='w-6 ' /> <p className=' tracking-tight'>Download Resume</p>
            </motion.div>
            {
                error && <div className=' bg-red-200 border border-black text-center whitespace-normal text-black text-sm '>And error occured while trying to download document try again later</div>
              }
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About
