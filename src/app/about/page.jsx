"use client";
import Certifications from "../components/About/Certifications";
import Title from "../components/Title";
// import Heading from '../components/Heading'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: false // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="flex-1 mt-[55px] pt-10">
      <Title title={"about-me"} />
      <div className="flex justify-between items-center py-5">
        <div
          className="w-[50%] flex gap-4 flex-col text-[1.1rem]"
          data-aos="fade-right"
        >
          <p className="text-[#ABB2BF]  ">Hello, I’m Srinivas K!</p>
          <p className="text-[#ABB2BF]  leading-6">
            I’m a self-taught full-stack developer with a focus on the MARN
            stack, specializing in TypeScript and Next.js. I excel at building
            responsive, user-friendly websites from scratch, transforming
            designs into functional code. With strong front-end skills and a
            solid understanding of back-end development, I create seamless web
            experiences that prioritize both functionality and aesthetics.
          </p>
          <p className="text-[#ABB2BF] leading-6">
            I’m always eager to learn and explore the latest technologies and
            frameworks to deliver the best solutions for clients.
          </p>
        </div>
        <div
          className="w-[50%] flex flex-col items-center gap-2"
          data-aos="fade-left"
        >
          <img src="./aboutme.svg" className="mx-auto w-[250px]" alt="" />
        </div>
      </div>
      <div className="flex items-center  w-full  justify-between">
        <h2 className="text-3xl text-[#FFFFFF] tracking-widest font-bold">
          {" "}<span className="text-[#C778DD]">#</span> Skills
        </h2>
        {/* <Heading title={"Skills"}/>/ */}
      </div>
      <div className="flex items-start gap-2 justify-between py-12">
        <div className="border-2  border-[#ABB2BF] h-fit max-w-[230px]" data-aos="flip-right">
          <h2 className="border-b-2 p-1  border-[#ABB2BF] text-white font-bold tracking-widest">
            Frameworks And Libraries
          </h2>
          <p className="p-2 text-[#ABB2BF] font-semibold ">
            {" "} React.js, Next.js, Tailwind CSS, Bootstrap, Redux, Node.js,
            Express.js
          </p>
        </div>
        <div className="border-2  border-[#ABB2BF] h-fit max-w-[200px]" data-aos="flip-right">
          <h2 className="border-b-2 p-1 border-[#ABB2BF] text-white font-bold tracking-widest">
            Concepts
          </h2>
          <p className="p-2 text-[#ABB2BF] font-semibold">
            Data Structures and Algorithms (DSA),Big O Notation
          </p>
        </div>
        <div className="border-2  border-[#ABB2BF] h-fit max-w-[190px]" data-aos="flip-right">
          <h2 className="border-b-2 p-1 border-[#ABB2BF] text-white font-bold tracking-widest">
            Frontend Development
          </h2>
          <p className="p-2 text-[#ABB2BF] font-semibold">
            HTML, CSS, VSCode, Figma, Git, github
          </p>
        </div>
        <div className="border-2  border-[#ABB2BF] h-fit max-w-[190px]" data-aos="flip-right">
          <h2 className="border-b-2 p-1 border-[#ABB2BF] text-white font-bold tracking-widest">
            Languages
          </h2>
          <p className="p-2 text-[#ABB2BF] font-semibold">
            JavaScript, TypeScript, Python
          </p>
        </div>

        <div className="border-2  border-[#ABB2BF] h-fit max-w-[190px]" data-aos="flip-right">
          <h2 className="border-b-2 p-1 border-[#ABB2BF] text-white font-bold tracking-widest">
            Databases
          </h2>
          <p className="p-2 text-[#ABB2BF] font-semibold">
            MongoDB, Mongoose, MySQL
          </p>
        </div>
      </div>
      <div className="flex items-center  w-full  justify-between">
        <h2 className="text-3xl text-[#FFFFFF] tracking-widest font-bold">
          {" "}<span className="text-[#C778DD]">#</span> certifications
        </h2>
      </div>
      <Certifications />
    </section>
  );
};

export default About;
