import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  express,
  mysql,
  quiz_app,
  vijaya,
  sourceum,
  qrcode,
  pos,
  go,
  BANO,
  BANO1,
  BANO2,
  BANO3,
  BANO4,
  BANO6,
  UDEMY,
  SKILLUP1,
  SKILLUP2,
  ems,
  dms,
  freelance,
  CyberSecurity,
  UXdesign,
  jiracourse,
  dynamicInterfaces,
  datascience,
  advanceDataAnalytics,
} from "../assets";

export const certificate = [
  { title: "Industry Base Web Development", img: BANO },
  { title: "Android:Working On Database", img: BANO1 },
  { title: "Database Normalization & SQL JOIN Queries", img: BANO2 },
  { title: "Intro to UX Design", img: BANO3 },
  { title: "IoT and Embedded System Development", img: BANO4 },
  { title: "Introduction to Data Analytics", img: SKILLUP1 },
  { title: "Agile Scrum Foundation", img: SKILLUP2 },
  { title: "Building Modern Web Applications with Go", img: UDEMY },
  { title: "Foundations of Cybersecurity", img: CyberSecurity },
  { title: "Foundations of User Experience (UX) Design", img: UXdesign },
  { title: "Automate tasks and processes with Jira", img: jiracourse },
  {
    title: "Dynamic User Interfaces (UI) for Websites",
    img: dynamicInterfaces,
  },
  { title: "Foundations of Data Science", img: datascience },
  {
    title: "Google Advanced Data Analytics Capstone",
    img: advanceDataAnalytics,
  },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "reviews",
    title: "Reviews",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "GoLang",
    icon: go,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "",
    icon: freelance,
    iconBg: "#333333",
    date: "Aug 2023 - Present",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Vijaya Technologies Inc",
    icon: vijaya,
    iconBg: "#333333",
    date: "Jul 2022 - Aug 2023",
  },
  {
    title: "Research Assistant",
    company_name: "Sourceum Research",
    icon: sourceum,
    iconBg: "#333333",
    date: "Nov 2021 - Aug 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Quiz App Mobile",
    description:
      "A Quiz App for Mobile is an engaging and interactive application that allows users to test their knowledge, learn new facts, and have fun answering questions on various topics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz_app,
    repo: "https://vjbano.github.io/quiz_app/",
    demo: "https://vjbano.github.io/quiz_app/",
  },

  {
    id: "project-2",
    name: "QRCode Generator",
    description:
      "A QR Code Generator is a versatile tool that allows users to create customized QR codes effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: qrcode,
    repo: "https://vjbano.github.io/QRCode-Generator/",
    demo: "https://vjbano.github.io/QRCode-Generator/",
  },
  {
    id: "project-3",
    name: "Mobile POS",
    description:
      "A mobile Point of Sale (POS) system with a barcode scanner offers efficient and streamlined product and stock management for businesses.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    repo: "https://github.com/VJBano/POS",
    demo: "https://github.com/VJBano/POS",
  },
  {
    id: "project-4",
    name: "EMS",
    description: `"Enrollment Management System" Experience seamless enrollment management with our cutting-edge system built on React with Material-UI. Our innovative platform offers intuitive user interfaces, empowering administrators to efficiently manage enrollments and streamline administrative tasks. `,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ems,
    repo: "https://github.com/VJBano/Enrollment-Management-System",
    demo: "https://github.com/VJBano/Enrollment-Management-System",
  },
  {
    id: "project-5",
    name: "DOCS_MS",
    description: `Introducing my cutting-edge document management system, 
       My platform combines intuitive file upload capabilities with advanced features like real-time notifications and tracking of seen and received files, ensuring seamless collaboration and efficient document handling.`,
    tags: [
      {
        name: "react-ts",
        color: "blue-text-gradient",
      },
      {
        name: "express-tsnode",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: dms,
    repo: "https://github.com/VJBano/DOCS_MS",
    demo: "https://github.com/VJBano/DOCS_MS",
  },
];

// Client Reviews Data
const reviews = [
  {
    id: "review-1",
    name: "Nick Pridachin ",
    position: "Co-Founder at Digital Octane",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQECdUR9InjX6g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1659130413427?e=1756339200&v=beta&t=Zlolmk7870nhHHRoB7w_UxinszILQ_7DjTDeu1IGHTc",
    rating: 5,
    testimonial: `As the CTO, I had the pleasure of working closely with Vincent on several key projects. Throughout our collaboration, Vincent demonstrated strong technical skills, particularly in writing Python scripts and developing a React interface. His work was consistently delivered on time and met the high-quality standards we set for our team.

Vincent’s ability to understand complex requirements and translate them into effective solutions was evident in every task he undertook. His programming skills are solid, and his proactive approach ensured that all deliverables were completed efficiently.

Overall, Vincent is a reliable and skilled programmer who has been a valuable asset to our team.`,
  },
];

export { services, technologies, experiences, projects, reviews };
