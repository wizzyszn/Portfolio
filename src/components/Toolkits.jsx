import { motion } from "framer-motion";
import {useAnimationContext} from '../hooks/useAnimations'
import expressIcon from '../images/icons8-express-js-256.png'
import viteIcon from '../images/Vitejs-logo.svg.png'
function Toolkits() {
    const {containerVariants, textVariant} = useAnimationContext()
    return (  <>
    <motion.div variants={containerVariants} 
    className=" col-span-1 bg-[#1c1c1c] rounded-2xl row-span-3 border border-[#363636] text-white p-4">
        <div className=" flex place-items-center gap-2 rounded-t-lg border border-[rgba(78,76,76,0.09)] p-1">
            <h2 className=" font-bold">Toolkit</h2>
            <div className=" w-[1px] bg-gray-500 h-[15px]"></div>
            <div className=" font-light text-gray-200"> Tools for my creative work &#x1F604;</div>
        </div>
        <motion.div variants={textVariant}
        className="pt-2 flex flex-col border border-[rgba(78,76,76,0.09)] ">
                <h1 className=" font-bold text-sm tracking-tight mt-2 text-center border-b border-[rgba(78,76,76,0.09)] ">USING NOW</h1>
                <div className=" grid grid-cols-4 gap-x-9 mt-3 max-[768px]:grid-cols-2 place-items-center gap-y-6">
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/atom.png" alt="" /><p className=" text-xs font-normal text-center  tracking-tighter">REACT</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/html.png" alt="" /><p className=" text-xs font-normal text-center tracking-tighter">HTML</p></div>
                    <div className=" w-8 flex flex-col gap-y-2  justify-center place-items-center"><img src="/images/js.png" alt=""  /><p className=" text-xs font-normal text-center tracking-tighter"> JAVASCRIPT</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/figma.png"   alt="" /><p className=" text-xs font-normaltext-center tracking-tighter">FIGMA</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/css-3.png"   alt="" /><p className=" text-xs font-normal text-center tracking-tighter">CSS3</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/python.png"   alt="" /><p className=" text-xs font-normal text-center tracking-tighter">PYTHON</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/tailwind.png"   alt="" /><p className=" text-xs font-normal text-center tracking-tighter">TAILWIND</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center"><img src="/images/git.png"   alt="" /><p className=" text-xs font-normal text-center tracking-tighter">GIT</p></div>
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center whitespace-nowrap"><img src="/images/node.png" alt=""  /><p className="text-xs font-normal text-center tracking-tighter">NODE JS</p></div>
                    <div className="w-4 flex flex-col  gap-y-2 justify-center place-items-center whitespace-nowrap"><img src="/images/mongoose.png" alt="" className=""  /><p className="text-xs font-normal text-center tracking-tighter">MONGO DB</p></div>      
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center whitespace-nowrap"><img src={expressIcon} alt="" className=""  /><p className="text-xs font-normal text-center tracking-tighter">EXPRESS JS</p></div>      
                    <div className="w-8 flex flex-col  gap-y-2 justify-center place-items-center whitespace-nowrap"><img src={viteIcon} alt="" className=""  /><p className="text-xs font-normal text-center tracking-tighter">VITE</p></div>      
            </div>
            { /*
            <div className=" mt-4 flex flex-col">
                <h1 className=" font-bold text-sm tracking-normal text-center border-b border-[rgba(78,76,76,0.09)] ">LEARNING</h1>
                <div className=" grid grid-cols-4 gap-x-9 max-[768px]:grid-cols-2 place-items-center mt-2 ">
                          </div>
            </div> 
            */}

            
        </motion.div>
    </motion.div>
    </>);
}

export default Toolkits;