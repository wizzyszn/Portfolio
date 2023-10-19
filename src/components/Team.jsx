import { motion } from "framer-motion";
import {useAnimationContext} from '../hooks/useAnimations'
function Team() {
    const {containerVariants} = useAnimationContext()
    return ( <>
    <motion.div variants={containerVariants}
    className=" col-start-2 col-end-2 bg-[#1c1c1c] rounded-2xl row-span-3 border border-[#363636] ">

    </motion.div>
    </> );
}

export default Team;<>
</>