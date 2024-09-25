"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import Link from "next/link";
import Model from '../components/Model'
import { useState } from "react";

const Projects = () => {
    // State to store the selected project for more details
    const [selectedProject, setSelectedProject] = useState(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024, // For large tablets and smaller screens
          settings: {
            slidesToShow: 2 // Show 2 slides
          }
        },
        {
          breakpoint: 600, // For mobile devices
          settings: {
            slidesToShow: 1 // Show 1 slide
          }
        }
      ]
    };
  
    const nextJsProjects = [
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
        title: "IMDB CLONE",
        description:
          "Movie database platform that lets users explore film  titles, descriptions, and ratings.",
        img: "./ImdbClone.png",
        liveLink: "https://imdbmoves.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/IMDB_Next_JS",
        techStack: "Next.js, Tailwind CSS,TMDB API, netlify",
        info: [
          "Responsive design for all devices (desktop, tablet, mobile)",
          "Uses TMDB API to fetch real-time data on movies",
          "Search functionality to explore a wide range of films",
          "Displays detailed information on movie ratings, release dates, and overviews",
          "Styled with Tailwind CSS for a clean and modern look",
          "Implements a loading effect using React Suspense with a fallback for smoother data fetching"
        ]        
      }
    ];
  
    const reactJsProjects = [
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
          "Includes dark mode for enhanced accessibility",
          "Uses React Suspense with a fallback skeleton for smoother data loading",
          "Built with TypeScript for type safety and better developer experience"
        ]        
      },
      {
        title: "My Bhakri",
        description:
          "React and Redux for state management, Tracks the number of cakes and ice creams.",
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
        title: "Notes App",
        description:
          "ReactMDE implemented for a seamless Markdown editing experience",
        techStack: "React.js, firebase, nanoid, react-split, showdown, CSS",
        img: "./NotesAPP.png",
        liveLink: "https://superb-cannoli-260d3c.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/NotesApp",
        info: [
          "Built using React.js for a dynamic and responsive interface",
          "Utilizes React Split for resizable, split-pane layouts",
          "Firebase integration for authentication and real-time database management",
          "ReactMDE implemented for a seamless Markdown editing experience",
          "Powered by Vite for fast development and optimized builds",
          "Enables users to create and edit content with live previews",
          "Provides a smooth and interactive experience with flexible layouts"
        ]
      },
      {
        title: "Tenzies",
        description:
          "Simple, engaging dice-rolling mechanics to match numbers, Lightweight and optimized",
        techStack: "React.js, css, react-confetti, nanoid",
        img: "./TenziesGame.png",
        liveLink: "https://dynamic-yeot-e9d2a6.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/Tenzies-Die-Game",
        info: [
          "Built using React.js for an interactive and responsive gaming experience",
          "Incorporates React Confetti to celebrate wins with a fun, visual effect",
          "Uses Nanoid for generating unique IDs for each game element",
          "Responsive UI that provides real-time feedback during gameplay",
          "Simple, engaging dice-rolling mechanics to match numbers",
          "Lightweight and optimized for fast performance and smooth interactions"
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
        
      },
      {
        title: "Pic Some",
        description:
          "Users can add images to a cart or mark them as favorites, with data stored in localStorage",
        techStack: "React.js,  CSS, custom hooks, context api, Vite",
        img: "./PicSome.png",
        liveLink: "https://lovely-kelpie-65eaa6.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/Gallery_store",
        info: [
          "Users can add images to a cart or mark them as favorites, with data stored in localStorage",
          "Images are fetched from an external source using the URL https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json",
          "The app displays the total cost of items in the cart for easy purchase management",
          "Developed using React.js, CSS, and JavaScript for a dynamic and responsive design",
          "State management is handled efficiently using Context API, ensuring a smooth user experience",
          "Custom hooks are utilized for optimized data fetching and handling",
          "Fully responsive design, providing consistent performance on both desktop and mobile devices"
        ]
      },
      {
        title: "Meme Generator",
          description:"Generates 100 random memes with customizable top and bottom text",
        techStack: "React.js,  CSS, pure CSS, customizing memes, Vite",
        img: "./MemeGenerator.png",
        liveLink: "https://rainbow-travesseiro-8b9638.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/-MemeGenerator",
        info: [
          "Built using React.js, pure CSS, and JavaScript for a responsive and dynamic design",
          "Generates 100 random memes with customizable top and bottom text",
          "Efficient state management using useState to handle user input seamlessly",
          "Clean and minimalistic interface for an enhanced user experience",
          "Optimized for both desktop and mobile devices for consistent performance",
          "Lightweight and fast, offering smooth interactions when customizing memes"
        ]
        
      },
  
    ];
  
    const javascriptProjects = [
      {
        title: "Trevland",
        description: "Built using HTML, CSS, and JavaScript for a clean and responsive design",
        techStack: "Javascript, Html, CSS, netlify, A mobile-first approach to CSS ",
        img: "./BookingApp.png",
        liveLink: "https://trevland01.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/Trevland",
        info: [
          "Built using HTML, CSS, and JavaScript for a clean and responsive design",
          "Responsive layout optimized for both mobile and tablet devices",
          "Features a user-friendly hamburger menu for easy navigation on smaller screens",
          "Ensures a seamless browsing experience across different screen sizes",
          "Lightweight codebase for fast performance and smooth interactions",
          "Modern design with a focus on accessibility and user experience"
        ]
        
      },
      {
        title: "u-coda",
        description: "Focused on creating a visually appealing, Includes animations to enhance visual engagement",
        techStack: "JavaScript, CSS, Html, carousel-slides",
        img: "./u-codaApp.png",
        liveLink: "https://u-coda01.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/U-Coda",
        info: [
          "Built using HTML, CSS, and JavaScript for a dynamic and interactive user experience",
          "Includes animations to enhance visual engagement and smooth transitions",
          "Responsive design with a hamburger menu for easy navigation on mobile and tablet devices",
          "Features a carousel with slides for showcasing content in an organized and appealing manner",
          "Optimized for fast performance and smooth interactions across all devices",
          "Focused on creating a visually appealing and user-friendly web experience"
        ]
        
      },
      {
        title: "takeaway delivery",
        description: "Allows users to add and remove burgers and drinks from their order with ease",
        techStack: "JavaScript, CSS, Html, document, and localStorage",
        img: "./takeaway-delivery.png",
        liveLink: "https://beamish-faun-f1884b.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/typing-game",
        info: [
          "Built using HTML, CSS, and JavaScript for an intuitive and responsive ordering system",
          "Allows users to add and remove burgers and drinks from their order with ease",
          "Displays the final purchase amount dynamically as items are added or removed",
          "Stores order details in local storage to retain the user's selections even after page refresh",
          "Simple and interactive user interface designed for smooth navigation and ordering",
          "Optimized for fast performance, providing a seamless experience for users",
          "Responsive design that adapts to various devices for convenient ordering"
        ]
      },
      {
        title: "takeaway delivery",
        description: "Allows users to add and remove burgers and drinks from their order with ease",
        techStack: "Firebase, JavaScript, CSS, Html, document and addEventListener,",
        img: "./Moody.png",
        liveLink: "https://tranquil-bavarois-87ff8a.netlify.app/",
        githubLink: "https://github.com/KolipakaSrinivas/Moody",
        info: [
          "Built using Firebase, HTML, CSS, and JavaScript for seamless todo management",
          "Allows users to add, remove, and delete todos with real-time synchronization to Firebase",
          "Stores todos securely in Firebase, ensuring persistent data across sessions",
          "Responsive and intuitive user interface for easy todo management on any device",
          "Optimized for smooth interactions and real-time updates using Firebase's backend",
          "Designed to provide a fast and efficient experience for task management"
        ]
        
      }
    ];
  
    const renderProject = (project, index) => {
      return (
        <div>
          <div
            key={index}
            className="border-[#ABB2BF] border-2 w-[290px] sm:w-[290px] flex flex-col carousel-item "
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
        </div>
      );
    };
  return (
    <section className='flex-1 mt-[55px] flex items-center flex-col gap-4 pt-6'>
      <Title title={"Projects"}/>
      <div>
        <h1 className="text-white m-0  text-xl font-bold mb-2">
          <span className="text-[#C778DD]">#</span> Next.js
        </h1>
        <div className="w-full lg:w-[900px] justify-center flex flex-col">
          <Slider {...settings}>
            {nextJsProjects.map((project, index) =>
              renderProject(project, index)
            )}
          </Slider>
        </div>
      </div>
      <div>
        <h1 className="text-white m-0 p-1 text-xl font-bold">
          <span className="text-[#C778DD]">#</span> React.js
        </h1>
        <div className="w-full lg:w-[900px] justify-center flex flex-col">
          <Slider {...settings}>
            {reactJsProjects?.map((project, index) =>
              renderProject(project, index)
            )}
          </Slider>
        </div>
      </div>
      <div>
        <h1 className="text-white m-0 p-1 text-xl font-bold">
          <span className="text-[#C778DD]">#</span>Html, Css, Javascript
        </h1>

        <div className="w-full lg:w-[900px] justify-center flex flex-col">
          <Slider {...settings}>
            {javascriptProjects.map((project, index) =>
              renderProject(project, index)
            )}
          </Slider>
        </div>
      </div>
       {/* Modal for displaying more details */}
      <Model selectedProject={selectedProject}/>
    </section>
  )
}

export default Projects