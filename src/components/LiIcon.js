import React from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'

const LiIcon = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset:["center end","center center"]
        }
    )
  return (
    <figure className='absolute left-0 stroke-black'>
        <svg className='-rotate-90 max-md:w-[60px] max-md:h-[60px] max-[479px]:w-[40px] max-[479px]:h-[40px]' width='75' height='75' viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='stroke-fuchsia-500 stroke-1 fill-none'/>
            <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-white'
            style={{
                pathLength:scrollYProgress
            }}
            />
            <circle cx='75' cy='50' r='10' className='animate-pulse stroke-1 fill-fuchsia-500'/>
        </svg>
    </figure>
  )
}

export default LiIcon
