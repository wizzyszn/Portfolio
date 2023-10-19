import { useReducer } from "react"
import {RiGraduationCapLine} from 'react-icons/ri'
import {LiaCertificateSolid} from 'react-icons/lia'
import { AnimatePresence, motion, usePresence } from "framer-motion"
import {useAnimationContext} from '../hooks/useAnimations'
const reducer = (state ,action) => {
  switch (action.type) {
    case 1:
      return {
        display : 1
      }
      case 2 :
        return {
          display : 2
        }
  
    default:
      return state
  }
}

function UserTab () {
  const [isPresent,safeToRemove] = usePresence()
  const {containerVariants, textVariant} = useAnimationContext()
  const [toggle , dispatch] =useReducer(reducer , {display : 1 })
  const Education = [
    {
      id: 0,
      university: 'University of Benin',
      course: `BSc Computer Science.2020`,
      bootcamp: 'ThinkiFik ',
      bootCourse: 'Ux design Bootcamp.2021'
    }
  ]
  const Certificates = [
    {Title : 'Certificate title',skill :'Python', id : 0},
    {Title : 'Certificate title',skill : 'Javascript', id : 1},
    {Title : 'Certificate title',skill : 'WebFlow', id : 2},
    {Title : 'Certificate title',skill : 'WebFlow', id : 3},
  ]
  const updateToggle = (id) => {
    dispatch({type : id})

  }
  const {display} = toggle
 
  return (
    <>
      <motion.section variants={containerVariants}
       className=' col-span-9'>
        <div className=' text-white bg-[#1c1c1c] rounded-2xl min-w-[100%] border border-[#363636] h-[28em] p-4 none overflow-y-auto '>
          {/* tab pane goes here */}
          <motion.div variants={textVariant}
           className=' flex p-3 sm:gap-9 max-[768px]:justify-between bg-[#17171721] rounded-md border border-[#4e4c4c18] max-[768px]:flex-wrap'>
            <div onClick={() => {updateToggle(1)}} className={display===1?' bg-[#2a2a2a] p-2 rounded-md cursor-pointer flex place-items-center gap-3 font-bold':' p-2 cursor-pointer flex place-items-center gap-3'}>         <RiGraduationCapLine size={20} />
            <div>Education</div>
            </div>
            <div onClick={() =>{updateToggle(2)}} className={display===2?' bg-[#2a2a2a] p-2 rounded-md cursor-pointer flex place-items-center gap-2 font-bold':'p-2 cursor-pointer flex place-items-center gap-2 '}>
            <LiaCertificateSolid size={20}/>
            <div>Certificate</div>
            </div>

          </motion.div>
          <AnimatePresence mode="wait"> 
          {
          Education.map(education => {
            return (
              <motion.div exit={{x : -20}}
               key={education.id} className={display === 1 ? ' flex gap-4 flex-col p-4 border border-[#4e4c4c18] mt-2' : 'hidden'}>
                <div className="bg-[#17171721] p-2 border border-[#4e4c4c18] relative">
                  <div className=" absolute  bg-[#2a2a2a] p-2 rounded-sm top-3">
                  <RiGraduationCapLine size={20}/>
                  </div>
                  <h1 className=" ml-14 font-bold "> {education.university}</h1>
                  <p className="ml-14 text-gray-400">{education.course}</p>
                </div>
                <div className="bg-[#17171721] p-2 border border-[#4e4c4c18] relative">
                <div className=" absolute  bg-[#2a2a2a] p-2 rounded-sm top-3">
                  <RiGraduationCapLine size={20}/>
                  </div>
                  <h1 className=" ml-14 font-bold"> {education.bootcamp}</h1>
                  <p className="ml-14 text-gray-400">{education.bootCourse}</p>
                </div>
              </motion.div>
             
            )
          })
            }
            {Certificates.map((certificate) => {
              return (
              
                <div key={certificate.id} className={display === 2 ? ' flex flex-col mt-2 p-4 border border-[#4e4c4c18]': 'hidden'}>
                  <div className=" bg-[#17171721] p-2 border border-[#4e4c4c18] relative"> 
                  <div className=" absolute  bg-[#2a2a2a] p-2 rounded-sm top-3">
                    <LiaCertificateSolid  size={20}/>
                  </div>
                    <h1 className="ml-14 font-bold">{certificate.Title}</h1>
                    <p className="ml-14 text-gray-400">{certificate.skill}</p>
                  </div>

                </div>
              )

            })
              
            }
            </AnimatePresence>
        </div>
      </motion.section>
      
    </>
  )
}

export default UserTab
