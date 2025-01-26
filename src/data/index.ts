import shareMeImg from "../../public/shareme.png";
import StudyNotion from "../../public/StudyNotion.jpeg";
import portfolioImg from "../../public/portfolio.jpeg";
import leetcodeStatsImg from "../../public/leetcode-stats.png";
import nodejsImg from "../../public/nodejs.png";
import cppImg from "../../public/c++.png";
import ethereumImg from "../../public/ethereum.svg";
import propxImg from "../../public/propx.png";
import frescoGuardImg from "../../public/frescoGuard.png";
import HostelBuddy from "../../public/HostelBuddy.png";
import leetcode from "../../public/leetcode.svg";

export const projectList = [
  {
    id: 3,
    title: "Share-me",
    category: "frontend",
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
  {
    id:2,
    title: "Study-Notion",
    category: "Full Stack",
    tag: "top",
    image: StudyNotion,
    description:
    "StudyNotion is a fully functional EdTech platform built using the MERN stack, tailored for admins, instructors, and students. The platform features a secure Razorpay payment gateway integration for seamless course purchases. Instructors can manage courses effectively, while students can easily buy and access learning content. The system also includes a robust feedback mechanism where users can provide ratings and reviews. With over 15 RESTful APIs, the application ensures smooth communication between the client and server.",
    tech:[

    ],
    url: "",
    github: "",
    features: [""],
    detailedDescription:
    "StudyNotion is a fully functional EdTech platform built using the MERN stack, tailored for admins, instructors, and students. The platform features a secure Razorpay payment gateway integration for seamless course purchases. Instructors can manage courses effectively, while students can easily buy and access learning content. The system also includes a robust feedback mechanism where users can provide ratings and reviews. With over 15 RESTful APIs, the application ensures smooth communication between the client and server.",
},
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
  {
    id: 4,
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolioImg,
    description:
      "portfolio website, built with Next.js along with Aceternity UI and Tailwind CSS showcases my skills, work experience and projects. The site includes a contact form, powered by Nodemailer, allowing you to easily reach out to me.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75",
    ],
    url: "https://my-portfolio-shivendra.vercel.app/",
    
    github: "https://github.com/siddanth-6365/portfolio",
    features: [
      "Sleek and modern design",
      "Built with Next.js for server-side rendering",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },
  {
    id: 1,
    title: "HostelBuddy",
    category: "FullStack",
    image: HostelBuddy,
    description:
      "HostelBuddy is a full-stack web application designed to simplify item sharing among college students. It allows users to lend or borrow items efficiently, with key features like item search, borrowing requests, and real-time status updates. ",
      tech: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
      ],
    url: "https://hostelbuddy-nine.vercel.app/",
    github: "https://github.com/Shivendra12131/Hostel_Buddy",
    features: [],
    detailedDescription:
    "HostelBuddy is a full-stack web application designed to simplify item sharing among college students. It allows users to lend or borrow items efficiently, with key features like item search, borrowing requests, and real-time status updates. Trusted by over 100 students, the platform ensures smooth interactions with timely email notifications and secure user authentication. This project highlights expertise in ReactJS, Node.js, and MongoDB, showcasing practical use of backend integration, responsive UI components, and user-centric features.",
},
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
    name: "leetcode",
    username: "Shiv12131",
    url: "https://leetcode.com/u/shiv12131/",
    image: leetcode 
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
    title: "Full Stack Developer Intern - Techolution",
    description: [
      "Developed and implemented backend APIs for orchestrating data storage and managing LLM agent interactions, ensuring seamless integration and efficient communication between services.",
      "Built the LLM Studio Dashboard using TanStack Query for efficient asynchronous API calls, enabling real-time updates and seamless user interactions.",
      "Designed reusable inheritance flows to streamline and reuse agents across multiple AI assistants, enhancing scalability and maintainability.",
      "Optimized API performance, reducing latency from 1200ms to 2.5ms using MongoDB aggregation pipelines.",
      "Created the Thinking Steps Dashboard to facilitate interactive chats with AI agents, significantly improving the user experience.",
    ],
    date: "Nov 2024 - Present",
  },
  {
    title: "Full Stack Developer Intern - HealmeRight",
    description: [
      "Improved database performance by 40%, reducing query execution time from 1.5s to 800ms for 500+ users, using MongoDB connection pooling and efficient indexing.",
      "Built a Winston logging system to track backend errors and login attempts, enhancing debugging and monitoring capabilities.",
      "Developed secure web APIs with JWT and cookies to support user authentication, improving backend processes.",
      "Designed and optimized responsive website components with interactive features using ReactJS, Tailwind CSS, and Framer Motion to enhance user experience.",
    ],
    date: "Apr 2024 - Jul 2024",
  },
  {
    title: "Web Developer - Anonymous Squirrels",
    description: [
      "Developed a comprehensive admin application using React, Tailwind CSS, and Material Tailwind, with secure phone OTP authentication via Firebase Authentication.",
      "Built and optimized RESTful APIs using Firebase Functions, leveraging Node-Cache for performance improvement and implementing pagination with infinite scrolling.",
      "Utilized Firebase Firestore for efficient data management, enabling admins to control user/vendor profiles, manage inquiries and reports, and implement role-based access control for Superadmin, Admin-1, and Admin-2 roles.",
    ],
    date: "May 2024 - Jul 2024",
  },
  {
    title: "Teaching Assistant - Coding Minutes",
    description: [
      "Designed and implemented interactive coding exercises and challenges to engage a diverse student base of 500+ learners in a batch.",
      "Facilitated 10+ live coding sessions, offering real-time feedback and helping learners strengthen their understanding of core concepts.",
      "Tech Stack: C++, Algorithms and Data Structures, Software Engineering, OOPS, Database Management.",
    ],
    date: "Oct 2023 - Jan 2024",
  },
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
