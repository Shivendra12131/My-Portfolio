import shareMeImg from "../../public/shareme.png";
import portfolioImg from "../../public/portfolio.png";
import leetcodeStatsImg from "../../public/leetcode-stats.png";
import nodejsImg from "../../public/nodejs.png";
import cppImg from "../../public/c++.png";
import ethereumImg from "../../public/ethereum.svg";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png";

export const projectList = [
  {
    id: 4,
    title: "Share-me",
    category: "Full Stack",
    tag: "top",
    image: shareMeImg,
    description:
      "This web application allows users to shares photographs and showcase their photography skills and download them. ",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    ],
    url: "https://shareme-frontend-kappa.vercel.app/",
    github: "https://github.com/Laksheya/shareme",
    features: [""],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  // {
  //   id: 1,
  //   tag: "top",
  //   title: "Flight-Booking-Backend",
  //   category: "backend",
  //   image: nodejsImg,
  //   description:
  //     "Developed complete backend microservices-based project including four services: Flights, Booking, Authentication, Notification using: ExpressJs, MySQL, REST APIs , rabbitmq and npm packages (rate limiter,proxy,cron jobs,JWT) also Solved common booking problems",
  //   tech: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  //     "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  //   ],
  //   url: undefined,
  //   github: "https://github.com/siddanth-6365/Flight-Booking-Backend",
  //   features: [],
  // },
  // {
  //   id: 2,
  //   title: "leetcode-stats-api",
  //   category: "backend",
  //   image: leetcodeStatsImg,
  //   description:
  //     "This project aims to enhance the accessibility and ease of integration for developers using LeetCode data by converting the existing LeetCode API, which is based on GraphQL, into a RESTful API. The primary goal is to provide a straightforward way for developers to retrieve valuable statistics and information about LeetCode users and their problem-solving activities.",
  //   tech: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  //   ],
  //   url: "https://leetcode-restful-api.vercel.app/",
  //   github: "https://github.com/siddanth-6365/leetcode-Stats-api",
  //   features: [],
  // },
  // {
  //   id: 3,
  //   title: "Personal Portfolio",
  //   category: "frontend",
  //   image: portfolioImg,
  //   description:
  //     "portfolio website, built with Next.js along with Aceternity UI and Tailwind CSS showcases my skills, work experience and projects. The site includes a contact form, powered by Nodemailer, allowing you to easily reach out to me.",
  //   tech: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  //     "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75",
  //   ],
  //   url: "siddanth.live",
  //   github: "https://github.com/siddanth-6365/portfolio",
  //   features: [
  //     "Sleek and modern design",
  //     "Built with Next.js for server-side rendering",
  //     "Utilizes Tailwind CSS for responsive styling",
  //     "Animated transitions powered by Framer Motion",
  //   ],
  //   detailedDescription:
  //     "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  // },
  // {
  //   id: 4,
  //   title: "Jaypee-Maps",
  //   category: "c++",
  //   image: cppImg,
  //   description:
  //     "created Jaypee Maps, a campus navigation system utilizing graph data structures and algorithms to optimize movement within College.The system calculates shortest paths based on user-selected locations and transportation modes",
  //   tech: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  //   ],
  //   url: undefined,
  //   github: "https://github.com/siddanth-6365/Jaypee-Maps",
  //   features: [],
  //   detailedDescription:
  //     "created Jaypee Maps, a campus navigation system utilizing graph data structures and algorithms to optimize movement within College.The system calculates shortest paths based on user-selected locations and transportation modes, streamlining navigation with features like location selection and travel time estimation. This project showcased my skills in applying data structures and algorithms to solve real-world problems",
  // },
  // {
  //   id: 5,
  //   title: "Prop-X",
  //   category: "blockchain",
  //   image: propxImg,
  //   description:
  //     "PropX is a cutting-edge platform dedicated to revolutionizing real estate transactions and property management using blockchain technology, specifically Ethereum. Our mission is to enhance transparency, security, and efficiency in property dealings, making it more accessible to a global audience.",
  //   tech: [
  //     ethereumImg,
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  //   ],
  //   url: undefined,
  //   github: "https://github.com/siddanth-6365/Prop-X",
  //   features: [],
  //   detailedDescription:
  //     "PropX is a cutting-edge platform dedicated to revolutionizing real estate transactions and property management using blockchain technology, specifically Ethereum. Our mission is to enhance transparency, security, and efficiency in property dealings, making it more accessible to a global audience.",
  // },
  // {
  //   id: 5,
  //   title: "FrescoGuard",
  //   category: "full Stack",
  //   image: frescoGuardImg,
  //   description:
  //     "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
  //   tech: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  //   ],
  //   url: undefined,
  //   github: "https://github.com/siddanth-6365/FrescoGuard",
  //   features: [],
  //   detailedDescription:
  //     "Fresco Guard is a groundbreaking crop management solution that seamlessly integrates a dynamic Next.js frontend with a Python backend powered by advanced machine learning models. This single repository houses the complete source code, documentation, and resources for the Fresco Guard project, developed by Team Skyshots during the InnovateNSUT'24.",
  // },
];

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
  },
  {
    url: "https://education.oracle.com/file/general/p-80-java.png",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://extensions.dev/assets/img/firebase.svg",
    name: "Firebase",
  },
];

export const socials = [
  {
    id: 1,
    name: "Twitter",
    username: "Shivendra Singh",
    url: "https://x.com/Shiv1213141",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Github",
    username: "Shivendra12131",
    url: "https://github.com/Shivendra12131",
    image:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    username: "Shivendra Pratap Singh",
    url: "https://www.linkedin.com/in/shivendra-pratap-singh-83317b184/",
    image:
      "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png",
  },
];

export const WorkExpcontents = [
   {
    title: "Web Developer - Anonymous Squirrels",
    description: [
      "Developed a comprehensive admin application with React, Tailwind CSS, and Material Tailwind, featuring phone OTP authentication using Firebase Authentication for secure access.",
      "Built and optimized RESTful APIs with Firebase Functions, utilizing Node-Cache for enhanced performance and pagination with infinite scrolling.",
      "Implemented Firebase Firestore for efficient data management, enabling admins to control user/vendor profiles, manage enquiries and reports, and implement role-based access control for Superadmin, Admin-1, and Admin-2 roles.",
    ],
    date: "May 2024 - July 2024",
  },
    {
    title: "Full Stack developer - HealmeRight",
    description: [
      "Developed a backend logging system to track user activity, implementing secure user authentication with OAuth 2.0 and JSON Web Tokens (JWT) for enhanced security in the web app.",
      "Designed an efficient MongoDB schema for user data, optimizing data management and retrieval processes.",
      "Created an interactive meal configuration interface, improving usability and user experience by enabling dynamic meal setup and customization features.",
    ],
    date: "Feb 2024 - Apr 2024",
  },
  {
    title: "Teaching Assistant -Coding Minutes",
    description:[
      "Designed and implemented interactive coding exercises and challenges to engage a diverse student base of 500+ learners in a batch.",
      "Facilitated 10+ live coding sessions, offering real-time feedback.",
      "Tech Stack: C++, Algorithms and Data Structures, Software Engineering, OOPS, Database Management"
    ],
    date: "Oct 2023- Jan 2024",
    
  }
  
];

export  const commandsAnswers = {
  whoami: "Shivendra Pratap Singh",
  about: "Yet another developer from India with a passion for writing code and creating web applications that solve real-life challenges",
  education: "(B.Tech.) - CSE at Indian Institute Of Information Technology,Kottayam (2021-2025)",
  email: "shivendra19112000@gmail.com",
  socials: "LinkedIn: https://www.linkedin.com/in/shivendra-pratap-singh-83317b184\nGitHub: https://github.com/Shivendra12131\nWebsite: ",
  skills: "Front-end: React.js, Next.js, , TailwindCSS\nBack-end: Node.js, Express.js, GraphQL,\nDatabases: MySQL, MongoDB, PostgreSQL\nDevOps & Deployments: Docker, Git/GitHub,",
  experience: "Full Stack developer At HealmeRight(Jan-2024 Apr-2024) \n",
  help: "Available commands: whoami, about, education, email, socials, skills, experience"
};
