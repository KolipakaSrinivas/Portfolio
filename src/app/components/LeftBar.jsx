"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const LeftBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: false // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="flex-[0.1] flex flex-col justify-between p-2 items-center ">
      <div className="flex flex-col gap-1 bg-[#2c3036] fixed top-0 px-9 items-center animate-fade-in-down-smooth z-20" 
      
      >
        <span className="w-[2px] h-28 bg-white z-10 animate-grow-smooth" />
        <div className="flex flex-col gap-1">
          <a href="https://github.com/KolipakaSrinivas">
            <img
              className="mb-2 w-[35px] cursor-pointer hover:scale-125 hover:opacity-90  transition-opacity duration-500 ease-in-out"
              src="/Github.svg"
              alt="GitHub"
            />
          </a>
          <a href="https://www.freecodecamp.org/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3">
            <img
              className="mb-2 w-[35px] cursor-pointer hover:scale-125 hover:opacity-90  transition-opacity duration-500 ease-in-out"
              src="/freecodecamp.svg"
              alt="Discord"
            />
          </a>
          <a href="https://www.linkedin.com/in/456-srinivas-k/">
            <img
              className="mb-2 w-[35px] cursor-pointer hover:scale-125 hover:opacity-90  transition-opacity duration-500 ease-in-out"
              src="/Linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <img
        src="./leftbar3.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
      <img
        src="./leftbar2.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
      <img
        src="./leftbar1.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
      <img
        src="./leftbar3.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
       <img
        src="./leftbar3.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
       <img
        src="./leftbar3.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
    </section>
  );
};

export default LeftBar;
