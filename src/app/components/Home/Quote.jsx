"use client"
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export const Quote = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="flex flex-col lg:w-[60%] mt-4 mb-10 lg:mx-auto" id="quote" data-aos="fade-up">
      <h3 className="border-[#ABB2BF] border-2 py-3 px-5 border-shadow italic text-shadow text-[#FFFFFF] text-[1.1rem]  [word-spacing:5px] leading-6">
        A Karma-yogi performs action by body, mind, intellect, and senses,
        without attachment, only for self-purification.
      </h3>
      <h3 className="ml-auto border-[#ABB2BF] border-shadow border-2 text-shadow py-3 px-5 text-[#FFFFFF]  border-t-0 font-semibold">
        - Bhagavad Gita
      </h3>
    </div>
  );
};

export default Quote;
