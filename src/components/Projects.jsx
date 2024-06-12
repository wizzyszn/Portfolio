import { Link } from 'react-router-dom'
import { BsStack } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {useAnimationContext} from '../hooks/useAnimations'
import {useEffect, useState} from 'react'
function Projects () {
  const {containerVariants, textVariant} = useAnimationContext();
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  useEffect(()=>{
    const makeRequest = async () =>{
      try{
        setPending(true)
        const response =await fetch(`http://localhost:5000/api/portfolio/get-portfolios`);
        const data  = await response.json();
        console.log("data", data)
        if(!response.ok) throw new Error({message : "Something went wrong"})
        setPortfolios(data);
      }catch(err){
        console.log(err);
        setError(err.message)
      }

    }
    makeRequest()
  }, [])
  return (
    <>
      <motion.div variants={containerVariants}
      className='col-span-3'>
        <div className=' text-white bg-[#1c1c1c] rounded-2xl min-w-[100%]  text-gray  border border-[#363636] min-h-[30em] p-2'>
          <div className=' border-t border-[#2d2c2c3d]  rounded-lg'>
            <div className='flex justify-between p-2 border border-[#4e4c4c18] rounded-t-lg'>
              <motion.h1 variants={textVariant}
               className='text-lg font-bold'>Featured Projects</motion.h1>
            </div>
          </div>
          <div className='rounded-b-lg mt-2 border border-[#4e4c4c18] h-[25em] '>
            <div className='flex flex-col gap-4 p-3'>
              {portfolios.map(portfolio => {
                return (
                  <Link to= {`/project/${portfolio?._id}`}  target='_blank' rel='noopener'  key={portfolio?.id}>
                    <motion.div variants={textVariant}
                      className=' relative'
                    >
                      <div className='flex border border-[#4e4c4c18] rounded-lg p-2 gap-5 items-center hover:bg-[#363636]'>
                        <div className=' bg-[#2a2a2a] p-3 rounded-md'>
                        <BsStack
                          size='20px'
                        />
                        </div>
                        <h1 className='font-semi-bold'>{portfolio?.title}</h1>
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

export default Projects
