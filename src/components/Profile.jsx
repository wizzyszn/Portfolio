import {motion} from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'

//variants

function Profile() {
    const {containerVariants,textVariant} = useAnimationContext()
    return (  <>
    <motion.div  variants={containerVariants}
       className=" col-span-4">
        <div className="flex flex-col justify-center place-items-center gap-4 py-7 text-white bg-[#1c1c1c] rounded-2xl min-w-[100%] wh font-bold text-lg text-gray  border border-[#363636]  min-h-[20em] ">
            <motion.div variants={textVariant}
            className=" overflow-hidden cursor-pointer rounded-full border outline-2 outline-white outline-double "> <img src= 'images/1692453155651.jpg' alt="avatar" className=" h-32 rounded-full hover:scale-150 transition-transform duration-9000 ease-in " /></motion.div>
           
            <motion.h2 variants={textVariant}
             > Wisdom Olubayo</motion.h2>
            <motion.p variants={textVariant}
             className="text-sm font-thin text-gray-200">Web Engineer.</motion.p>
            
        </div>  

    </motion.div>
    </>);
}
export default Profile;