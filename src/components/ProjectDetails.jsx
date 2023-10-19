import { Link } from 'react-router-dom'
import { BsStack } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'
const projectUtils = [
  { title: 'Project Name', tech: 'Technology', id: 1 },
  { title: 'Project Name', tech: 'Technology', id: 2 },
  { title: 'Project Name', tech: 'Technology', id: 3 },
  { title: 'Project Name', tech: 'Technology', id: 4 }
]

function ProjectDetails () {
  const {containerVariants,textVariant} = useAnimationContext()
 
  return (
    <>
      <motion.div variants={containerVariants}
      
      className='col-span-9'>
        <div className=' text-white bg-[#1c1c1c] rounded-2xl min-w-[100%]  text-gray  border border-[#363636] max-h-[30em] p-2'>
          <div className=' border-t border-[#2d2c2c3d]  rounded-lg'>
            <motion.div variants={textVariant}
            className='flex justify-between p-2 border border-[#4e4c4c18] rounded-t-lg'>
              <h1 className='text-lg font-bold'>Featured Projects</h1>
              <div className='bg-[#2a2a2a] p-1 rounded-lg text-sm cursor-pointer'>
                <p className='text-gray-300'>View All</p>
              </div>
            </motion.div>
          </div>
          <div className='rounded-b-lg mt-2 border border-[#4e4c4c18] h-[25em] '>
            <div className='flex flex-col gap-4 p-3'>
              {projectUtils.map(project => {
                return (
                  <Link>
                    <motion.div variants={textVariant}
                      className=' relative'
                      key={project.id}
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
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectDetails
