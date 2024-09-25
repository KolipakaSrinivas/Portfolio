"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Heading = ({title}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true // Whether animation should happen only once
    });
  }, []);
  return (
    <h1 className="text-white m-0 p-1 text-xl font-bold tracking-widest "  data-aos="fade-up"
    data-aos-duration="3000">
      <span className="text-[#C778DD]">#</span>{title}
    </h1>
  );
};

export default Heading;
