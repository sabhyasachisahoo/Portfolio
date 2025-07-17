import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between max-md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl max-sm:text-xl max-[479px]:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-fuchsia-500 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 max-[479px]:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full max-md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center max-md:text-6xl max-[479px]:text-4xl max-md:mb-16">
        Learning Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative max-lg:w-[90%] max-md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top max-md:w-[2px] max-md:left-[30px] max-[479px]:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 max-[479px]:ml-2 ">
          <Details
            position="Frontend Development"
            company="Sheryians Coding School"
            companyLink="https://sheryians.com/"
            time="2024 - 2025"
            address="Online"
            work="Completed the Responsive Web Design and JavaScript Algorithms courses. Built interactive frontend components using HTML, CSS, and JavaScript."
          />

          <Details
            position="Backend Development"
            company="Sheryians Coding School"
            companyLink="https://sheryians.com/"
            time="2025"
            address="Online"
            work="Built secure and scalable backend APIs using Node.js, Express.js, and MongoDB. Implemented user authentication, book management, and role-based access control for admin and users."
          />

          <Details
            position="Frontend Developer"
            company="12-Hour Hackathon, Silicon University"
            companyLink="https://github.com/sabhyasachisahoo/StudyBuddy"
            time="2025"
            address="Bhubaneswar, India"
            work='Built an AI-powered educational platform "Study Buddy" with quiz generation, summarization tools, and chatbot features. Designed responsive UI using Vite and Tailwind CSS. Ranked in Top 10 teams.'
          />

          <Details
            position="AI Enthusiast"
            company="Generative AI Workshop – NxtWave"
            companyLink="https://www.ccbp.in/ai-workshop-certificate?com=8MXX1KDS7A"
            time="2025"
            address="Online"
            work="Attended an intensive hands-on workshop on Generative AI. Built and deployed a basic AI model as part of the training, gaining insights into prompt engineering and API integration."
          />
          <Details
            position="Attendee"
            company="Proxima – HR Discussion Event"
            companyLink="https://www.linkedin.com/in/sabhyasachi-sahoo-234b30272/"
            time="2024"
            address="SOA University, Bhubaneswar"
            work="Learned about emotional intelligence, communication strategies, and workplace behavior in a corporate setting. Gained exposure to real-world soft skills needed in tech teams."
          />
          <Details
            position="Code Contributor"
            company="GitHub – sabhyasachisahoo"
            companyLink="https://github.com/sabhyasachisahoo"
            time="Ongoing"
            address="Online"
            work="Actively sharing personal and collaborative code projects on GitHub. Includes full-stack apps, backend APIs, and UI components. Demonstrates ongoing learning and public code practice."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
