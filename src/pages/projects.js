import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 max-lg:flex-col max-lg:p-8 max-[479px]:rounded-2xl max-[479px]:rounded-br-3xl max-[479px]:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl max-[479px]:-right-2 max-sm:h-[102%] max-[479px]:w-full max-[479px]:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg max-lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 max-lg:w-full max-lg:pl-0 max-lg:pt-6">
        <span className="text-fuchsia-600 font-medium text-xl max-[479px]:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold max-sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-black max-sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold max-sm:px-4 max-sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative max-[479px]:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl max-md:-right-2 max-md:w-[101%] max-[479px]:h-[102%] max-[479px]:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-fuchsia-600 font-medium text-xl max-lg:text-lg max-md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold max-lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline max-md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 max-md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>SabhyasachiSahoo | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl max-[479px]:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-y-24 max-sm:gap-x-0">
            {/* Featured Project */}
            <div className="col-span-12">
              <FeaturedProject
                title="AI-Integrated Real-Time Chat Application"
                img={project1}
                summary="A full-stack chat app with real-time messaging using Socket.io, OpenAI chatbot integration, JWT auth, and MongoDB for persistent data."
                link="https://ai-based-chat-application-frontend.onrender.com/"
                github="https://github.com/sabhyasachisahoo/AI-based-Chat-Application"
                type="Featured Project"
              />
            </div>

            {/* Two Smaller Projects */}
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="AI Code Review Web App"
                img={project1}
                summary="React and Node.js-based tool that uses OpenAI API to review code and provide feedback. Responsive design built with Tailwind CSS."
                link="https://code-review-frontend-dyqx.onrender.com/"
                github="https://github.com/sabhyasachisahoo/Code-Reviewer"
                type="Web App"
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Productivity Dashboard"
                img={project1}
                summary="A customizable productivity dashboard built with React and Tailwind CSS. Features include time tracking, to-do lists, note-taking, and clean UI for daily task management."
                link="https://github.com/sabhyasachisahoo/Productivity-Dashboard"
                github="https://github.com/sabhyasachisahoo/Productivity-Dashboard"
                type="Personal Project"
              />
            </div>

            {/* Featured Hackathon Project */}
            <div className="col-span-12">
              <FeaturedProject
                title="Study Buddy – AI-Powered Learning Platform"
                img={project1}
                summary="Built a learning platform with quiz generation, YouTube summarizer, and a responsive frontend using Tailwind and Vite."
                link="https://studdy-buddy-frontend.onrender.com/"
                github="https://github.com/sabhyasachisahoo/StudyBuddy"
                type="Hackathon Project"
              />
            </div>

            {/* Two More Smaller Projects or Reuse */}
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={project1}
                summary="Responsive portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations, project showcases, and a blog-ready structure."
                link="https://your-portfolio-link.com/"
                github="https://github.com/sabhyasachisahoo"
                type="Personal Project"
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Mini Games with SFML (C++)"
                img={project1}
                summary="Game programming assignments developed using SFML in C++. Includes Timber and Zombie Arena with game loops, sprites, and collision handling."
                link="https://github.com/sabhyasachisahoo"
                github="https://github.com/sabhyasachisahoo"
                type="Academic Project"
              />
            </div>
            {/* Library Management Project */}
            <div className="col-span-12">
              <FeaturedProject
                title="Library Management System"
                img={project1}
                summary="Backend-focused MERN project with RESTful APIs for book borrowing, user roles, and admin access. Frontend under progress with Vite + Tailwind."
                link="https://github.com/sabhyasachisahoo/Library-Management"
                github="https://github.com/sabhyasachisahoo/Library-Management"
                type="FullStack Project"
              />
            </div>
            {/* Two More Projects */}
            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={project1}
                summary="Responsive portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations, project showcases, and a blog-ready structure."
                link="https://your-portfolio-link.com/"
                github="https://github.com/sabhyasachisahoo"
                type="Personal Project"
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Mini Games with SFML (C++)"
                img={project1}
                summary="Game programming assignments developed using SFML in C++. Includes Timber and Zombie Arena with game loops, sprites, and collision handling."
                link="https://github.com/sabhyasachisahoo"
                github="https://github.com/sabhyasachisahoo"
                type="Academic Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
