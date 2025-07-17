import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg max-md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-6 rounded-xl flex items-center justify-between bg-white text-black fisrt:mt-0 border border-solid border-black border-r-4 border-b-4 max-sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-fuchsia-600 font-semibold pl-4 max-sm:self-start max-sm:pl-0 max-[479px]:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl " />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 0.95, translateY: "5px" }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline max-[479px]:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-fuchsia-500 font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>SabhyasachiSahoo | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text=" Words Can Change The World! "
            className="mb-16 max-lg:!text-7xl max-sm:mb-8 max-sm:!text-6xl max-[479px]:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-lg:gap-8 max-md:gap-y-16">
            <FeaturedArticle
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="Learn in 7 minutes"
              link="https://www.youtube.com/watch?v=wAGIOCqS8tk&ab_channel=CodeBlessYou"
              img={article1}
            />
            <FeaturedArticle
              title="The Ultimate Roadmap to Start Web Development in 2025"
              summary="Confused about how to start your coding journey? This beginner-friendly guide breaks down the essential skills, tools, and resources to help you become a web developer—from HTML to hosting your first project."
              time="Learn in 20 minutes"
              link="https://www.youtube.com/watch?v=X8BYu3dMKf0&ab_channel=CodeWithHarry"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="How to Build Your First Personal Website Using Just HTML and CSS"
              date="July 10 2025"
              link="https://www.youtube.com/watch?v=HBqWsrqK89U&ab_channel=CollegeWallah"
              img={article3}
            />
            <Article
              title="JavaScript Basics Explained: Variables, Functions, and DOM for Beginners"
              date="July 9 2025"
              link="https://www.youtube.com/watch?v=a-wVHL0lpb0"
              img={article4}
            />
            <Article
              title="Responsive Web Design for Beginners: Creating Layouts That Work Everywhere"
              date="July 8 2025"
              link="https://www.youtube.com/watch?v=XiFFRcVHr9w&ab_channel=CodingGujarat"
              img={article5}
            />
            <Article
              title="What Is React? A Beginner’s Guide to the Most Popular Frontend Library"
              date="July 6 2025"
              link="https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh"
              img={article3}
            />
            <Article
              title="A Step-by-Step Guide to Hosting Your Website for Free Using Vercel or Netlify"
              date="July 5 2025"
              link="https://www.youtube.com/watch?v=9srnyNC1e_o&ab_channel=TheAdiga"
              img={article4}
            />
            <Article
              title="Top 5 VS Code Extensions That Will Boost Your Productivity as a Web Developer"
              date="July 3 2025"
              link="https://www.youtube.com/shorts/GFR4DlBOsrE"
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
