import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-12.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 7000})
    const isInView =useInView(ref, {once:true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value)
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <=value){
            ref.current.textContent = latest.toFixed(0)
        }
      })
    }, [springValue, value])
    
    



    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>SabhyasachiSahoo | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 max-lg:!text-7xl max-sm:!text-6xl max-[639px]:!text-4xl max-sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 max-sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start max-xl:col-span-4 max-md:order-2 max-md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase text-black/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Sabhyasachi Sahoo, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p className=" my-4 font-medium">
                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, logic building or learning new tech-stacks, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8 max-xl:col-span-4 max-md:order-1 max-md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black " />
                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                 />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between max-xl:col-span-8 max-xl:items-center max-xl:flex-row max-md:order-3">
                <div className="flex flex-col items-end justify-center max-xl:items-center">
                    <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-[639px]:text-4xl"><AnimatedNumbers value={300}/>+</span>
                    <h2 className="text-xl font-medium capitalize text-black/75 max-xl:text-center max-md:text-lg max-sm:text-base max-[639]:text-sm">Hours of Coding</h2>
                </div>
                <div className="flex flex-col items-end justify-center max-xl:items-center">
                    <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-[639px]:text-4xl"><AnimatedNumbers value={10}/>+</span>
                    <h2 className="text-xl font-medium capitalize text-black/75 max-xl:text-center max-md:text-lg max-sm:text-base max-[639]:text-sm">Projects completed</h2>
                </div>
                <div className="flex flex-col items-end justify-center max-xl:items-center">
                    <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-[639px]:text-4xl"><AnimatedNumbers value={2}/>+</span>
                    <h2 className="text-xl font-medium capitalize text-black/75 max-xl:text-center max-md:text-lg max-sm:text-base max-[639]:text-sm">years of experience</h2>
                </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
