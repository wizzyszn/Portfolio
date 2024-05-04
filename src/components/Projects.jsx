import { Link } from 'react-router-dom'
import { BsStack } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'
const projectUtils = [
  { title: 'AtSu Web', tech: 'Front End Figma Design', id: 1 , link: 'https://www.figma.com/file/1KWtTprmNXhTod2bo5Wfsp/Atsu-Vite-Design?type=design&node-id=0%3A1&mode=design&t=mTQUcUbeeztH0iH5-1'},
  { title: 'Bytandym', tech: 'Front End', id: 2, link : "https://bytandym-n9wd.vercel.app" },
  { title: 'Chat Application', tech: 'MERN', id: 3, link : "https://github.com/wizzyszn/MERN-chat-application.git" },
  

]
function Projects () {
  const {containerVariants, textVariant} = useAnimationContext()
  return (
    <>
      <motion.div variants={containerVariants}
      className='col-span-3'>
        <div className=' text-white bg-[#1c1c1c] rounded-2xl min-w-[100%]  text-gray  border border-[#363636] min-h-[30em] p-2'>
          <div className=' border-t border-[#2d2c2c3d]  rounded-lg'>
            <div className='flex justify-between p-2 border border-[#4e4c4c18] rounded-t-lg'>
              <motion.h1 variants={textVariant}
               className='text-lg font-bold'>Featured Projects</motion.h1>
              <motion.div variants={textVariant}
              className='bg-[#2a2a2a] p-1 rounded-lg text-sm cursor-pointer'>
                <p className='text-gray-300 cursor-not-allowed '>View All</p>
              </motion.div>
            </div>
          </div>
          <div className='rounded-b-lg mt-2 border border-[#4e4c4c18] h-[25em] '>
            <div className='flex flex-col gap-4 p-3'>
              {projectUtils.map(project => {
                return (
                  <a  href={project.link} target='_blank' rel='noopener'  key={project.id}>
                    <motion.div variants={textVariant}
                      className=' relative'
                    >
                      <div className='flex flex-col gap-3 border border-[#4e4c4c18] rounded-lg p-2'>
                        <div className='absolute  bottom-4 left-6 bg-[#2a2a2a] p-3 rounded-md'>
                        <BsStack
                          size='20px'
                        />
                        </div>
                        
                        <h1 className='font-bold ml-20'>{project.title}</h1>
                        <p className=' text-gray-300 ml-20'>{project.tech}</p>
                      </div>
                    </motion.div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Projects
