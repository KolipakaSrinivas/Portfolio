"use client";
import MyComponent from "./MyComponent";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="flex gap-2 justify-between items-center">
      <div
        className="w-[100%] md:w-[50%]  flex gap-5 flex-col items-start justify-start"
        data-aos="fade-right"
      >
        <MyComponent />
        <p className="text-sm text-[#ABB2BF] font-bold max-w-[450px]">
          With expertise in React.js and backend development, I build robust Web
          apps that prioritize user experience, turning designs into reality.
        </p>
        <Link
          href={"./srinivasK.pdf"}
          target="_blank"
          download="./srinivasK.pdf"
          className="border-[#C778DD] border-2 p-1 px-3 hover:shadow-[#C778DD] shadow-md text-xl text-[#FFFFFF] font-semibold hover:bg-[rgba(199,120,221,20%)]"
        >
          Resume !
        </Link>
      </div>
      <div
        className=" hidden md:block md:w-[35%] lg:flex items-center flex-col mx-auto"
        data-aos="fade-left"
      >
        <img src="./profilpic.svg" className=" shadow-white" alt="" />
        <h2 className="text-[#ABB2BF] border-[#ABB2BF] border-2 p-1 px-10 font-bold shadow-md shadow-[#C778DD] ">
          Currently working on{" "}
          <Link
            href={
              "https://www.figma.com/design/jgXNmA22JbNy830Fl4uVk0/Portfolio-(Community)?node-id=0-1&node-type=canvas&t=Dtv8pTogS4qHQ984-0"
            }
            className="text-[#ffff] hover:text-blue-500"
          >
            {" "}Portfolio
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
