"use client";
import React, { useState } from "react";
import Link from "next/link";
import Model from "../Model";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true // Whether animation should happen only once
    });
  }, []);

  const projects = [
    {
      title: "IMDB CLONE",
      description:
        "Movie database platform that lets users explore film details, including titles, descriptions, and ratings.",
      img: "./ImdbClone.png",
      liveLink: "https://imdbmoves.netlify.app/",
      githubLink: "https://github.com/KolipakaSrinivas/IMDB_Next_JS",
      techStack: "Next.js, Tailwind CSS,TMDB API, netlify",
      info: [
        "Responsive design for all devices (desktop, tablet, mobile)",
        "Uses TMDB API to fetch real-time data on movies",
        "Search functionality to explore a wide range of films",
        "Display detailed information on movie ratings, release dates, and overviews",
        "Styled with Tailwind CSS for a clean and modern look"
      ]
    },
    {
      title: "Reddit",
      description:
        "Displays the latest ReactJS posts with TypeScript ensuring type safety for the fetched data.",
      img: "./Reddit.png",
      liveLink: "https://redditexercise.netlify.app/",
      githubLink: "https://github.com/KolipakaSrinivas/contenterra-exercise",
      techStack: "React.js, Typescript, Tailwind CSS, vercel",
      info: [
        "Responsive design for all devices (desktop, tablet, mobile)",
        "Uses Reddit API to fetch real-time data on ReactJS posts",
        "Search functionality to explore a wide range of ReactJS discussions",
        "Displays detailed information on post titles, authors, and upvotes",
        "Styled with Tailwind CSS for a clean and modern look",
        "Includes dark mode for enhanced accessibility"
      ]
    },
    {
      title: "Admin_Dashboard",
      description:
        "Manage users and products with MongoDB and Mongoose for adding, deleting, and updating",
      img: "./AdminDashboard.png",
      liveLink: "https://nextjs-admin-dashboard-kohl.vercel.app/",
      githubLink: "https://github.com/KolipakaSrinivas/Nextjs_Admin_Dashboard",
      techStack: "Next.js, Tailwind CSS, Mongoose, Mongodb netlify",
      info: [
        "Uses NextAuth for secure user authentication",
        "Manage users and products with MongoDB and Mongoose for adding, deleting, and updating",
        "Real-time data updates for a dynamic user experience",
        "Admin interface for managing product inventory and user accounts",
        "Search and filter functionalities for easy navigation of products and users",
        "Styled with Tailwind CSS for a clean and modern look"
      ]
    },
    {
      title: "ticket app",
      description:
        "Raising a ticket. Ability to add and delete tickets to manage workflow efficiently",
      img: "./Ticketapp.png",
      liveLink: "https://ticketapp456.netlify.app/",
      githubLink: "https://github.com/KolipakaSrinivas/ticket-app",
      techStack: "Next.js, Tailwind CSS, Vercel,Mongodb, Mongoose",
      info: [
        "Built using Next.js and Tailwind CSS for modern and responsive design",
        "Functionality for raising tickets with tracking for progress, priority, and status",
        "Ability to add and delete tickets to manage workflow efficiently",
        "Deployed on Vercel for fast performance and seamless updates",
        "Ticket management system designed to streamline issue resolution",
        "User-friendly interface for quick navigation and control over ticket lifecycle"
      ]
    },
    {
      title: "My Bhakri",
      description:
        "React and Redux for state management, Tracks the number of cakes and ice creams purchased using React-Redux",
      img: "./MyBhakri.png",
      liveLink: "https://glistening-daifuku-ec6c83.netlify.app/",
      githubLink: "https://github.com/KolipakaSrinivas/CakeShop_React_Redux",
      techStack: "React redux, redux, React.js, css, netlify",
      info: [
        "Built using React and Redux for state management",
        "Allows users to purchase cakes and ice cream with item count tracking",
        "Real-time updates on the number of items in the cart",
        "Deployed on Netlify for a fast and responsive shopping experience",
        "User-friendly interface for seamless dessert purchases",
        "Tracks the number of cakes and ice creams purchased using React-Redux"
      ]
    },
    {
      title: "Typing Game",
      description:
        "20-second countdown timer that tracks and displays the number of words typed",
      techStack: "React.js, , CSS, custom hooks, Vite",
      img: "./TypingGame.png",
      liveLink: "https://beamish-faun-f1884b.netlify.app/",
      githubLink: "https://github.com/KolipakaSrinivas/speed-typing-game",
      info: [
        "Built using React.js, pure CSS, and JavaScript for a responsive and dynamic design",
        "20-second countdown timer that tracks and displays the number of words typed",
        "Efficient state management with custom hooks to ensure smooth gameplay",
        "Clean and minimalistic interface for an enhanced user experience",
        "Optimized for both desktop and mobile devices for consistent performance",
        "Lightweight and fast, offering seamless interactions during the game"
      ]
    }
  ];

  return (
    <div data-aos="fade-right">
      <div className="carousel flex space-x-4 overflow-x-auto p-4 w-[75vw] custom-cursor">
        {projects.map((project, index) =>
          <div
            key={index}
            className="border-[#ABB2BF] border-2 w-[290px] sm:w-[290px] flex flex-col carousel-item"
          >
            <div className="h-[150px]">
              <img
                src={project.img}
                className="w-full h-full object-fill"
                alt={project.title}
              />
            </div>
            <h3 className="text-[#ABB2BF] p-2 px-3 border-y-2 border-[#ABB2BF] text-[1rem] leading-6 font-semibold">
              {project.techStack}
            </h3>
            <div className="flex flex-col justify-between flex-grow p-3">
              <div>
                <h2 className="text-white text-xl font-bold">
                  {project.title}
                </h2>
                <p className="text-[#ABB2BF] text-[1rem] mt-2 leading-5">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  href={project.liveLink}
                  className="text-white border-2 border-[#C778DD] py-[2px] px-5 hover:bg-[rgba(199,120,221,20%)]"
                >
                  Live
                </Link>
                <Link
                  href={project.githubLink}
                  className="text-[#ABB2BF] border-2 border-[#ABB2BF] py-[2px] px-5 hover:bg-[rgba(171,178,191,20%)]"
                >
                  GitHub
                </Link>
                <button
                  className="text-white border-2 border-[#C778DD] py-[2px] px-4 hover:bg-[rgba(199,120,221,20%)]"
                  onClick={() => {
                    setSelectedProject(project);
                    document.getElementById("my_modal_4").showModal();
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

     <Model selectedProject={selectedProject}/>
    </div>
  );
};

export default Projects;
