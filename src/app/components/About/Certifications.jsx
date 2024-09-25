"use client"
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: false // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="flex gap-2 py-5"
    >
      <div className=" h-[260px] w-[320px] border-2 border-[#ABB2BF] cursor-pointer hover:shadow-blue-700 shadow-lg"  data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <Link
          href={
            "https://freecodecamp.org/certification/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3/javascript-algorithms-and-data-structures"
          }
        >
          <img
            src="./freeCodeCampLegacyJavaScript.jpeg"
            alt=""
            className="w-full h-full object-fill"
          />
        </Link>
      </div>
      <div className=" h-[260px] w-[320px] border-2 border-[#ABB2BF] hover:shadow-blue-700 shadow-lg cursor-pointer" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <Link
          href={
            "https://www.edureka.co/lms/certificate/eadbec64970ff1f71af79be32ef00625"
          }
        >
          <img
            src="./edurekaCertifications.png"
            alt=""
            className="w-full h-full object-fill"
          />
        </Link>
      </div>
      <div className=" h-[260px] w-[320px] border-2 border-[#ABB2BF] hover:shadow-blue-700 shadow-lg cursor-pointer " data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <Link
          href={
            "https://freecodecamp.org/certification/fcc34eb82f3-2c56-43f1-b06e-3c70927f3df3/back-end-development-and-apis"
          }
        >
          <img
            src="./freeCodeCampBackEndDevelopmentandAPIs.jpeg"
            alt=""
            className="w-full h-full object-fill"
          />
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
