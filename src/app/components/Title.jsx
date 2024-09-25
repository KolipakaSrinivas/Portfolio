"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Title = ({ title }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="flex self-start flex-col  text-xs "
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="text-3xl tracking-widest text-[#FFFFFF] font-black ">
        <span className="text-[#C778DD] mr-1 font-bold">/</span>
        {title}
      </h1>
    </div>
  );
};

export default Title;
