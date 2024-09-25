"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const RightBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: false // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="flex-[0.1] flex  items-center justify-evenly flex-col p-2">
      <img
        src="./leftbar1.svg"
        alt=""
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
      <img
        src="./rightbar3.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
      <img
        src="./rightbar2.svg"
        alt=""
        className="w-14"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      />
    </section>
  );
};

export default RightBar;
