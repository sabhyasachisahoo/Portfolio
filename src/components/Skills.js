import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute max-lg:py-2 max-lg:px-4 max-md:text-sm max-md:py-1.5 max-md:px-3 max-[479px]:bg-transparent max-[479px]:text-black max-[479px]:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration: 1.5}}
        viewport={{once:true}}
        >
           {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center max-md:text-6xl max-md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-[repeating-radial-gradient(rgba(0,0,0,0.4)_2px,#FFFFFF_5px,#FFFFFF_100px)] max-lg:h-[80vh] max-sm:h-[60vh] max-[479px]:h-[50vh] max-lg:bg-[repeating-radial-gradient(rgba(0,0,0,0.4)_2px,#FFFFFF_5px,#FFFFFF_80px)] max-md:bg-[repeating-radial-gradient(rgba(0,0,0,0.4)_2px,#FFFFFF_5px,#FFFFFF_60px)] max-[479px]:bg-[repeating-radial-gradient(rgba(0,0,0,0.4)_2px,#FFFFFF_5px,#FFFFFF_40px)]'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-white p-8 shadow-black cursor-pointer max-lg:p-6 max-md:p-4 max-[479px]:text-xs max-[479px]:p-2'
        whileHover={{scale:1.05}}
        >
           Web 
        </motion.div>
        <Skill name='Tailwind CSS' x='-25vw' y='2vw'/>
        <Skill name='HTML' x='-5vw' y='-10vw'/>
        <Skill name='Python' x='25vw' y='-10vw'/>
        <Skill name='Java' x='-29vw' y='-10vw'/>
        <Skill name='Javascript' x='20vw' y='6vw'/>
        <Skill name='ReactJS' x='0vw' y='13vw'/>
        <Skill name='NextJS' x='-20vw' y='-15vw'/>
        <Skill name='Github' x='-16vw' y='-5vw'/>
        <Skill name='OOPs' x='17vw' y='-2vw'/>
        <Skill name='Figma' x='12vw' y='-12vw'/>
        <Skill name='MongoDb' x='32vw' y='-5vw'/>
        <Skill name='NodeJS' x='0vw' y='-20vw'/>
        <Skill name='C/C++' x='-25vw' y='18vw'/>
        <Skill name='CSS' x='20vw' y='16vw'/>
        <Skill name='Git' x='-20vw' y='12vw'/>
    </div>
    </>
  )
}

export default Skills
