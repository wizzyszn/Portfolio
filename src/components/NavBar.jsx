import { NavLink } from 'react-router-dom'
import { RiHome2Line } from 'react-icons/ri'
import { PiBagSimpleThin } from 'react-icons/pi'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { GoCopy } from 'react-icons/go'
import { BiUserCheck } from 'react-icons/bi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdCancel } from 'react-icons/md'
import { useNavBarContext } from '../hooks/useNavBar'
import clipboardCopy from 'clipboard-copy'
function NavBar () {
  const { setToggle, toggle } = useNavBarContext()



  const toggleClick = () => {
    if (!toggle) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }
  var text = 'wizzywizpad@gmail.com'
  const clickEvent = () =>{
    clipboardCopy(text).then(()=>{
      alert('Text copied to clipbaord')
    }).catch((err)=>{
      console.log(err)
    })

  }

  const handleClick =  () => {
    const mail = 'mailto:wizzywizpad@gmail.com&Subject=Inquiry%20Regarding%20Services'
      
      window.location.href = mail
  }


  const activeLink = 'bg-[#2a2a2a]'
  const notActiveLink = ''

  return (
    <div className='col-span-9'>
      <div className='flex bg-[#1c1c1c] rounded-b-2xl max-[768px]:rounded-b-lg p-2 min-w-[100%] whitespace-nowrap font-medium text-lg text-gray-300 justify-end  border max[768px]:border-[#232323]  border-[#363636] z-[1]'>
        <div className='mr-auto py-3 tracking-widest ml-8 max-[768px]:ml-4 font-extrabold'>
          <NavLink to=''>
            <p className='glitch'>
              <span aria-hidden='true'>
                <strong>#</strong>WizTECH
              </span>
              <strong>#</strong>WizTECH
              <span aria-hidden='true'>
                <strong>#</strong>WizTECH
              </span>
            </p>
          </NavLink>
        </div>
        <div className='flex gap-8 max-[720px]:hidden'>
          <div className='py-1'>
            <NavLink
              to='/'
              className={({ isActive }) => {
                console.log(isActive)
                if (isActive) {
                  return (
                    activeLink +
                    ' flex place-items-center gap-1 px-2 rounded-md hover:bg-[#2a2a2a]  font-bold transition-colors duration-500 ease-in-out py-2'
                  )
                } else {
                  return (
                    notActiveLink +
                    ' flex place-items-center gap-1 px-2 rounded-md hover:bg-[#2a2a2a]  transition-colors duration-500 ease-in-out py-2'
                  )
                }
              }}
            >
              <RiHome2Line size='20px' className='' />
              <p>Home</p>
            </NavLink>
          </div>
          <div className='py-1'>
            <NavLink
              to='/About-Me'
              className={({ isActive }) => {
                console.log(isActive)
                if (isActive) {
                  return (
                    activeLink +
                    ' flex place-items-center gap-1 px-2 rounded-md hover:bg-[#2a2a2a]  font-bold duration-500 ease-in-out py-2'
                  )
                } else {
                  return (
                    notActiveLink +
                    ' flex place-items-center gap-1 px-2 rounded-md hover:bg-[#2a2a2a]   duration-500 ease-in-out py-2'
                  )
                }
              }}
            >
              <BiUserCheck className='' size='20px' />
              About Me
            </NavLink>
          </div>
          <div className='flex gap-2 border border-[#363636] bg-[#222222] rounded-lg py-1 px-1' onClick={clickEvent}>
            <div className='rounded-lg px-10 py-2 bg-[#2a2a2a] relative iconWrapper'>
              <NavLink to='' onClick={handleClick}>
                <AiOutlineThunderbolt className='icon absolute left-[20px] bottom-[13px]' />{' '}
                <div className='link' >Hire Me</div>
              </NavLink>
            </div>
            <span className='h-[30px] mt-2 w-[1px] bg-[#363636]'></span>
            <div className='bg-white text-black px-10 py-2 rounded-lg font-medium relative iconWrapper'>
              <NavLink to='' className='link'>
                <GoCopy className='icon absolute left-[20px] bottom-[13px]' />
                <div className='link'>copy Email</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className='flex place-items-  justify-center min-[768px]:hidden max-[768px]:flex'
          onClick={toggleClick}
        >
          {toggle ? (
            <MdCancel size='40px' />
          ) : (
            <HiOutlineMenuAlt3 size='40px' />
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
