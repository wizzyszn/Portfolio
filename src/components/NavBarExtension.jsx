import { Link } from 'react-router-dom'
import { RiHome2Line } from 'react-icons/ri'
import { PiBagSimpleThin } from 'react-icons/pi'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { GoCopy } from 'react-icons/go'
import { BiUserCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
import clipboardCopy from 'clipboard-copy'
import { AnimatePresence } from 'framer-motion'

 //import { useState} from 'react'
import { useNavBarContext } from '../hooks/useNavBar'
function NavBarExtension () {
    const {toggle} = useNavBarContext()
    const handleClick = () => {
      const mail = 'mailto:wizzywizpad@gmail.com&Subject=Inquiry%20Regarding%20Services'
      window.location.href = mail
    }  
function clickEvent( ){
  clipboardCopy('wizzywizpad@gmail.com').then(()=>{
    alert('Email copied to clipboard')

  }).catch((error)=>{
console.log(error)
  })
 
  
  }  
  return (

    <AnimatePresence>{ toggle &&
      <motion.div initial={{opacity : 0 , y : -10}} animate ={{opacity : 1 , y : 0}} transition={{duration : 0.2, ease : 'easeInOut'}} exit={{opacity :0, y:-10}}
       className="bg-[#1c1c1c] border  rounded-lg border-[#363636] min-[768px]:hidden max-[768px]:flex ">
      <div className='flex p-6 font-bold text-lg text-gray-300 justify-start flex-col w-[100%]'>
        <div className='flex gap-12 flex-col'>
          <div className='py-3 relative ml-7'>
            <Link to={'/'}>
              <RiHome2Line  
                size='20px'
                className='absolute left-[-25px] bottom-[16px] '
              />
              Home
            </Link>
          </div>
          <div className='py-3 relative ml-7'>
            <Link to={'/Projects'} className=''>
              <PiBagSimpleThin
                className='absolute left-[-25px] bottom-[16px]'
                size='20px'
              />
              Projects
            </Link>
          </div>
          <div className='py-3 relative ml-7'>
            <Link to='/About-Me' className=''>
              <BiUserCheck
                className='absolute left-[-25px] bottom-[16px]'
                size='20px'
              />
              About Me
            </Link>
          </div>
        
        </div> 
        <div className=' flex gap-x-3 w-[100%] justify-between p-1 bg-[#222222] border border-gray-600  rounded-lg mt-4'>
          <button className='bg-[#2a2a2a] p-2 rounded-lg flex-1' onClick={handleClick}><AiOutlineThunderbolt size={20} className=' inline-block'/>  Hire me</button>
          <button className=' bg-white  rounded-lg text-black flex-1 px-2'><GoCopy size={20} className=' inline-block mr-2' onClick={clickEvent} />Email</button>
        </div>
      </div>
 
      </motion.div>
        }
    </AnimatePresence>
  )
}

export default NavBarExtension
