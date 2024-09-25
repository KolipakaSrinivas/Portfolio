"use client";
import { TypeAnimation } from "react-type-animation";

const MyComponent = () =>
  <h1 className="text-4xl text-[#FFFFFF] font-black [word-spacing:8px]">
    I'm a Full-Stack Developer skilled in{" "}
    <span
      className="text-[#C778DD] inline-block"
      style={{ minWidth: "150px", textAlign: "left" }}
    >
      <TypeAnimation
        sequence={[
          "JavaScript", // Types first
          3000, // Waits for 2 seconds
          "TypeScript", // Deletes and types 'TypeScript'
          4000 // Waits for 4 seconds before repeating (adds extra time)
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: "inline-block" }}
      />
    </span>{" "}
    and{" "}
    <span
      className="text-[#C778DD] inline-block"
      style={{ minWidth: "120px", textAlign: "left" }}
    >
      <TypeAnimation
        sequence={[
          2000, // Adds 3 seconds delay before starting (prevents simultaneous change)
          "React.js", // Types first
          3000, // Waits for 2 seconds
          "Next.js", // Deletes and types 'Next.js'
          4000 // Waits for 4 seconds before repeating
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: "inline-block" }}
      />
    </span>
  </h1>;

export default MyComponent;

{
  /* <h1 className="text-4xl text-[#FFFFFF] font-black [word-spacing:8px] ">
                I'm a Full-Stack Developer skilled in{" "}
                <span className="text-[#C778DD]">TypeScript</span> and{" "}
                <span className="text-[#C778DD]">Next.js.</span>
              </h1> */
}
