import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <section className='flex-1 h-screen mt-[55px] flex flex-col pt-10 justify-start gap-4 '>
      <Title title={"Contact"}/>
      <div className="flex gap-5 items-center justify-between ">
        <div className="text-[#ABB2BF] flex flex-col gap-5  w-[45%]">
          <p>
            I’m actively seeking job
            opportunities and am also open to freelance work, where I can apply
            my skills and expertise.
          </p>{" "}
          <p>
            If you have any projects in mind or specific questions, feel free to
            reach out—I’m always happy to discuss new ideas and potential
            collaborations." Let me know if this works!
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="border-[#ABB2BF] border-2 p-5 ">
            <h2 className="text-[#FFFFFF] mb-1">Contact me here</h2>
            <a href="tel:9703909921" className="text-[#ABB2BF] hover:text-blue-500 hover:underline">
              <span className='text-white'>+91</span> 9703909921
            </a>
          </div>
          <div className="border-[#ABB2BF] border-2 p-3">
            <h2 className="text-[#FFFFFF] pb-2">Message me here</h2>
            <div className="flex flex-col items-start gap-1 ">
              <div className="flex gap-2">
                <img src="./Linkedin.svg" alt="" />
                <a href="https://www.linkedin.com/in/456-srinivas-k/" className="text-[#ABB2BF] hover:text-blue-500 hover:underline">
                /in/456-srinivas-k/
                </a>
              </div>
              <div className="flex gap-2">
                <img src="./Email.svg" alt="" />
                <a href="mailto:kolipakasrinivas456@gmail.com" className="text-[#ABB2BF] hover:text-blue-500 hover:underline">
                  kolipakasrinivas456@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5  w-full  justify-between mt-10 ">
        <h2 className="text-3xl text-[#FFFFFF] tracking-widest font-bold">
          {" "}<span className="text-[#C778DD]">#</span> all-media
        </h2>
      </div>
    </section>
  )
}

export default Contact