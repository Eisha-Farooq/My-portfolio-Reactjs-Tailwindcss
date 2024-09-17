import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/MakeupStore.jpeg";
import projectImage2 from "../assets/PakPost.jpeg";
import projectImage3 from "../assets/TicTacToe.jpeg";
import projectImage4 from "../assets/FYP.jpeg";
import projectImage5 from "../assets/movieland.jpeg";
import projectImage6 from "../assets/Todo.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: " Resume", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Hi, I'm Eisha Farooq 👋🏻",
  // greet: "Hello there! 👋🏻",
  description:
    "I simplify complex user experience challenges to craft integrity-driven solutions that connect billions of people.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Makeup Store",
    description:
      " A stylish and responsive online makeup store created using HTML and CSS. This project features a clean and modern design, showcasing a variety of makeup products with detailed descriptions and images. The website is designed to provide an engaging and user-friendly shopping experience with intuitive navigation and visually appealing layouts.",
    image: projectImage1,
    githubLink: "https://makeup-store-eisha.netlify.app/",
  },
  {
    id: 2,
    name: "Pak Post Website",
    description:
      "During my internship, our team was tasked with creating the PakPost website. This project was a collaborative effort, where I was responsible for developing the front-end. I worked closely with the team to ensure a user-friendly and visually appealing interface that met the client's requirements.",
    image: projectImage2,
    githubLink: "https://www.pakpost.gov.pk/testppo/",
  },
  {
    id: 3,
    name: "Tic Tac Toe Game",
    description:
      "Developed a Tic Tac Toe game using HTML, CSS, and JavaScript. The game features a simple yet intuitive interface, allowing two players to compete in the classic grid-based challenge. Implemented game logic and designed the UI to ensure a smooth and engaging user experience. The project also includes a reset functionality, enabling players to start a new game with a single click.",
    image: projectImage3,
    githubLink: "https://stirring-sopapillas-e00ce1.netlify.app/",
  },
  {
    id: 4,
    name: "Transformation of Education Through Assistive Technology",
    description:
      "Our final year project, 'Transformation of Education Through Assistive Technology,' focuses on enhancing educational experiences for individuals with disabilities. We developed this platform using React.js, providing a responsive and accessible interface that integrates various assistive technologies to support diverse learning needs.",
    image: projectImage4,
    githubLink: "https://www.figma.com/design/lvI6NzSLzB2JZk95u4hfFf/Untitled?node-id=0-1&node-type=CANVAS&t=OXBdEp7QqS5NYSiE-0",
  },
  {
    id: 5,
    name: "Movie Finder",
    description:
      "Movie Finder is a React.js-based web application that allows users to search for movies. This project showcases my skills in React, API integration, and responsive design, providing an intuitive interface for discovering films.",
    image: projectImage5,
    githubLink: "https://react-project-eisha.netlify.app/",
  },
  {
    id: 6,
    name: "Todo List",
    description:
      "I developed a Todolist application using HTML, CSS, and JavaScript. This project allows users to efficiently manage and organize their daily tasks by adding, marking, and deleting items on their list. The interface is clean and user-friendly, designed to enhance productivity.",
    image: projectImage6,
    githubLink: "https://fanciful-cobbler-21d210.netlify.app/",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
