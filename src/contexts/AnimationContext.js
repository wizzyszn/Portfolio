import { createContext } from 'react'

export const AnimationsContext = createContext()

function AnimationContext ({ children }) {
  const containerVariants = {
    hidden: {
      y: '300px',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  }
  const textVariant = {
    hidden: {
      y: '100px',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        type: 'spring'
      }
    }
  }
  const homeVariant = {
    hidden: {},
    visible: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.6
      }
    }
  }

  return (
    <>
      <AnimationsContext.Provider
        value={{ containerVariants, textVariant, homeVariant }}
      >
        {children}
      </AnimationsContext.Provider>
    </>
  )
}

export default AnimationContext
