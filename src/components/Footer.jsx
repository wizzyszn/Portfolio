import {Link} from 'react-router-dom'
import Icon1 from './svgComponents/Icon1';
import Icon2 from './svgComponents/Icon2';
import Icon3 from './svgComponents/Icon3';
import Icon4 from './svgComponents/Icon4';
import {motion} from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'

function Footer() {
  const { containerVariants, textVariant} = useAnimationContext()
  const logoVariants = {
    hover : { 
      scale : 1.1,
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration : 0.3
      }
    }
  }
  return (
    <motion.div variants={containerVariants}
    className="col-span-2 bg-[#1c1c1c] rounded-2xl border border-[#363636] text-white flex place-items-center justify-center max-[768px]:flex-col max-[768px]:p-10 ">
      <div className='flex place-items-center justify-between max-[768px]:flex-col-reverse gap-7'>
        <motion.div variants={textVariant}
         className='flex gap-3'>
            <h1 className=' font-bold '> # WizTECH</h1>
            <p className=' font-light text-gray-100'>&copy;2022 All rights reserved</p>
        </motion.div>
        <motion.div variants={textVariant}  
        className="flex gap-x-5 min-[768px]:ml-12 p-3">
        <a href='https://twitter.com/@WisdomOlubayo' target='_blank' rel="noreferrer"> <motion.div variants={logoVariants} whileHover='hover' className=' bg-[#2a2a2a] p-4 rounded-lg cursor-pointer border border-[#4e4c4c3c]'><Icon1 fill="white"/> </motion.div></a>
            <motion.div   variants={logoVariants} whileHover='hover'className=' bg-[#2a2a2a] p-4 rounded-lg cursor-pointer border border-[#4e4c4c3c] cursor-not-allowed'><Link><Icon2 fill = "white" /> </Link></motion.div>
            <motion.div  variants={logoVariants} whileHover='hover' className=' bg-[#2a2a2a] p-4 rounded-lg cursor-pointer border border-[#4e4c4c3c] cursor-not-allowed'><Link><Icon3  fill ="white" /></Link></motion.div>
        <a href='https://wa.me/2349057469542' target='_blank' rel="noreferrer"><motion.div  variants={logoVariants} whileHover='hover' className=' bg-[#2a2a2a] p-4 rounded-lg cursor-pointer border border-[#4e4c4c3c]'><Icon4 fill= "white"/></motion.div></a>
        </motion.div>
      </div>
      </motion.div>
  );
}

export default Footer;
