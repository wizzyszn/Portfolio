import NavBar from '../components/NavBar'
import NavBarExtension from '../components/NavBarExtension'
import NavBarContext from '../contexts/NavBarContextProvider'
import { GoLinkExternal } from 'react-icons/go'
import { motion } from 'framer-motion'
import { useAnimationContext } from '../hooks/useAnimations'
import { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating'
import { useParams } from 'react-router'
import storage from '../firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import spinner from '../assets/loaders/icons8-spinner.gif'
import { Link } from 'react-router-dom'
function AboutMe () {
  const params = useParams()
  const { homeVariant } = useAnimationContext()
  const [portfolios, setPortfolios] = useState([])
  const [imageUrl, setImageUrl] = useState(null)
  const [loadingPortfolio, setLoadingPortfolio] = useState(true)
  const [error, setError] = useState(true)
  const [otherPortfolios, setOtherPortfolios] = useState([])
  const [imageThumbnails, setImageThumbnails] = useState([])
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/portfolio/get-portfolio/${params.id}`,
          {
            method: 'GET'
          }
        )
        if (!response) {
          throw new Error('Document not found')
        }
        const document = await response.json()
        setPortfolios(document)
        setLoadingPortfolio(false)
        const listRef = ref(storage, document[0]?.imagesDir)
        const res = await listAll(listRef)
        const urls = await Promise.all(
          res.items.map(itemRef => getDownloadURL(itemRef))
        )
        setImageUrl(urls)
      } catch (err) {
        setError(err.message)
      }
    }
    makeRequest()
  }, [params.id])
  useEffect(() => {
    async function makeRequest () {
      try {
        const response = await fetch(
          `http://localhost:5000/api/portfolio/get-other-portfolios/${params.id}`
        )
        const data = await response.json()
        if (!response.ok) {
          setError(data?.message)
        }
        setOtherPortfolios(data)
      } catch (err) {
        setError(err.message)
      }
    }
    makeRequest()
  }, [params.id])

  useEffect(() => {
    async function fetchImages () {
      try {
        if (otherPortfolios.length > 0) {
          const promises = otherPortfolios.map(async portfolio => {
            const listRefs = ref(storage, portfolio.imagesDir)
            const results = await listAll(listRefs)
            if (results.items.length > 0) {
              const firstImageRef = results.items[0]
              return {
                ...portfolio,
                imageUrl: await getDownloadURL(firstImageRef)
              }
            }
            return null
          })
          try {
            const urls = await Promise.all(promises)
         
            setImageThumbnails(urls)
          } catch (err) {
            setError(err.message)
          }
        }
      } catch (err) {
   
        setError(err.message)
      }
    }
    fetchImages()
  }, [otherPortfolios])

  return (
    <>
      <motion.div
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        className='bg-[#141313] font-display max-[720px]:h-[100%] scroll-smooth max-[768px]:pb-7 pb-7 overflow-hidden h-[100vh] text-white'
      >
        <div className=' wrapper w-[90%] ml-auto mr-auto grid grid-cols-9 gap-x-5 gap-y-4 max-[720px]:flex max-[720px]:flex-col max-[720px]:w-[90%] relative  '>
          <NavBarContext>
            <NavBar />
            {/*<--- Project Description Goes here -->*/}
            {loadingPortfolio ? (
              <p>loading......</p>
            ) : (
              portfolios.map((portfolio, index) => {
                return (
                  <div
                    key={index}
                    className=' border border-[#363636] col-span-9 grid grid-cols-4 min-h-[800px] max-sm:flex max-sm:flex-col relative overflow-auto grid-rows-100px'
                  >
                    <div className='col-span-4 row-span-1 border  border-[#363636] flex items-center p-4 justify-between'>
                      <h2 className='  text-3xl font-semibold max-sm:text-xl '>
                        {portfolio?.title}
                      </h2>
                      <Rating
                        name='read-only'
                        value={portfolio.rating}
                        size='small'
                        readOnly
                      />
                    </div>
                    <div className='col-span-1 sticky top-0 left-0 p-4 pt-0 max-sm:relative'>
                      <div className='gap-3 mt-8'>
                        <span className=' text-[0.9rem]  font-semibold'>
                          Role:
                        </span>
                        <p className=' text-sm'>{portfolio?.role}</p>
                      </div>
                      <div className=' mt-3'>
                        <span className='text-[0.9rem]  font-semibold'>
                          Project Description:
                        </span>
                        <p className=' text-sm'>{portfolio?.description}</p>
                      </div>
                      <div className=' mt-6 flex flex-col gap-2'>
                        <span className='text-[0.9rem] font-semibold'>
                          Skills and deliverables:
                        </span>
                        <div className=' flex gap-3 flex-wrap'>
                          {portfolio?.skills.map((skill, index) => {
                            return (
                              <span
                                key={index}
                                className='text-[#857d7d] bg-[#2a2a2a] p-2 rounded-full text-sm'
                              >
                                {skill}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className=' relative  col-start-2 col-end-5 w-full h-full transition-all ease-in-out duration-100'>
                      <div className='absolute overflow-auto flex gap-6 flex-col w-full p-4'>
                        {imageUrl ? (
                          imageUrl.map((url, index) => {
                            return <img key={index} src={url} alt='img' className=' hover:opacity-80' />
                          })
                        ) : (
                          <div className=' flex justify-center items-center'>
                            <img
                              src={spinner}
                              alt='spinner'
                              className=' size-24'
                            />
                          </div>
                        )}
                        <a
                          target='_blank'
                          href={portfolio?.link}
                          rel='noopener'
                        >
                          <div className=' w-1/2 m-auto max-sm:w-full bg-[#2a2a2a] p-4 rounded-xl flex items-center justify-between'>
                            <span className=' underline'>
                              View live project
                            </span>
                            <GoLinkExternal />
                          </div>
                        </a>
                        <div className=' flex flex-col gap-4 border-t-2 border-[#363636] p-5 overflow-auto '>
                          <span>More projects by me:</span>
                          <div className='flex gap-5 max-sm:flex-col'>
                            {imageThumbnails.map((thumbnail, index) => {
                              return (
                                <div
                                  key={index}
                                  className=' flex flex-col gap-3 w-[400px]'
                                >
                                  <div>
                                    {' '}
                                    <img

                                      src={thumbnail?.imageUrl}
                                      alt='thumbanil'
                                    />
                                  </div>

                                  <Link
                                    to={`/project/${thumbnail?._id}`}
                                    className=' underline text-sm'
                                  >
                                    {thumbnail?.title}
                                  </Link>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}

            <NavBarExtension />
          </NavBarContext>
        </div>
      </motion.div>
    </>
  )
}
export default AboutMe
