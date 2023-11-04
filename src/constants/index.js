import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  alazhar,
  threejs,
  hodmy,
  todo,
  quiz,
  metronic,
  // dentalHealth,
  niyat
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
   },
  {
    id: "work",
    title: "Work",
   },
  {
    id: "contact",
    title: "Contact",
   },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Al-Azhar University",
    icon: alazhar,
    iconBg: "rgb(171 172 175)",
    date: "March 2020 - April 2021",
    points: [ 
      "The system facilitates the registration of student information, including personal details, academic history, and contact information.",
      "Students can enroll in courses, and the system ensures that they meet the prerequisites for each course.",
      "The system keeps track of students' academic progress, recording their grades, class attendance, and overall performance in each course.",
      "It monitors the status of students, whether they are passed, failed, or in-progress in their courses.",
      "Students are classified into various categories (e.g., freshmen, sophomores, etc.) based on their academic progress and status.",
      "The system can record and track any special accommodations or support services needed for students' well-being."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Metronic",
    icon: metronic,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Feb 2022",
    points: [
       "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",

    ]
  },
  {
    title: "React.js Developer",
    company_name: "Niyat Clinics",
    icon: niyat,
    iconBg: "rgb(171 172 175)",
    date: "Mar 2023 - Jan 2023",
    points: [
      "Developed a dental appointment booking website using React.js for a seamless user experience.",
      "Users can schedule appointments, select branches, and provide personal information. Dentists have access to a dedicated dashboard for efficient appointment management.",
      "The system compiles data on appointment times, branch choices, cities, and other relevant information, offering valuable insights for healthcare providers and clinic management.",
      " Demonstrates my expertise in web development and user interface design, benefiting both dental clinics and patients."
    ], 
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hdomy Store",
    description:
    "In this e-commerce project, key features include Firebase for secure registration and login, a convenient shopping cart, and additional functionalities",
     tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: hodmy,
    source_code_link: "https://github.com/mahmoudahmedhassan/Hodmy-E-commerce-.git",
    source_demo_link:"https://hdomystore1.netlify.app/ ",
  },
  {
    name: "Todo App",
    description:
      "This todo project features efficient task management with essential functions such as adding, deleting, and marking tasks as active. The project also incorporates captivating motion farmer animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/mahmoudahmedhassan/React-Redux-Todo-App.git",
    source_demo_link:"https://todo-react-app-11.netlify.app/ ",

   },
  {
    name: "Quiz App",
    description:
      "I've crafted a dynamic Quiz App that offers a stimulating way to assess your knowledge. This app allows users to pick their preferred question categories, whether it's science, history, or pop culture, and tailor the challenge to their liking by selecting the difficulty level—ranging from easy to medium and even hard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/mahmoudahmedhassan/create-quiz-app.git",
    source_demo_link:"https://react-quiz-app-1.netlify.app/ ",
    },
];
let my_info={
  email: "mahmoudahmedd4800@gmail.com",
  github: "https://github.com/mahmoudahmedhassan",
  linkedin:"https://www.linkedin.com/in/mahmoud-ahmed-85a3b5197",
  number: "+201096759755",
}

export { services, technologies, experiences, testimonials, projects,my_info };
