import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    leetcode,
    college,
    css,
    reactjs,
    linkedin,
    school,
    githubb,
    portfolio,
    redux,
    pace,
    grad,
    tailwind,
    ats,
    nodejs,
    mongodb,
    rotaract,
    git,
    figma,
    docker,
    carrent,
    gfg,
    meta,
    // starbucks,
    // tesla,
    // shopify,
    fitness,
    jobit,
    tripguide,
    threejs,
    
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
      title: "Leetcode",
      icon: leetcode,
      link: "https://leetcode.com/ysp_/",
    },
    {
      title: "GFG",
      icon: gfg,
      link: "https://auth.geeksforgeeks.org/user/ysp_/",
    },
    {
      title: "Github",
      icon: githubb,
      link: "https://github.com/yashrajp-dot",
    },
    {
      title: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/yashrajpatil22/",
      
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "Fr. Agnel Multipurpose School, Vashi",
      icon: school,
      iconBg: "#383E56",
      date: "June 2012 - June 2018",
      points: [
        "SSC:- 92.8%",
        "Best phase of my life",
        "During my school days, I gained a lot of academic knowledge in subjects like mathematics, science, language arts, and social studies. These subjects provided a foundation for my future education and career.",

      
      ],
    },
    {
      title: "Junior College",
      company_name: "S.S. High School & Jr. College, Seawoods",
      icon: college,
      iconBg: "#E6DEDD",
      date: "July 2018 - July 2020",
      points: [
        "HSC:- 86.3%",
        "MHT-CET:- 99.24%tile",
        "VITEEE:- AIR 4K",
        "During my time in junior college, I had an enriching experience that taught me a multitude of valuable lessons, both academically and personally. Despite encountering various challenges and obstacles, I persevered and gained a wealth of life experience that has contributed significantly to my personal growth and development.",
      ],
    },
    {
      title: "Graduation",
      company_name: "Walchand College of Engineering,Sangli",
      icon: grad,
      iconBg: "#E6DEDD",
      date: "July 2020 - July 2024",
      points: [
        "CGPA: 8.97",
        "As an active member of various communities in college, I have had the opportunity to engage in some prevalent community work, which has played a profound role in my growth. Through my involvement in these communities, I have been able to interact with people from diverse backgrounds and gain a better understanding of the challenges they face.",
      ],
    },
    {
      title: "Program Director of Publicity",
      company_name: "PACE",
      icon: pace,
      iconBg: "#383E56",
      date: "June 2021- April 2022",
      points: [
       
        "As a member of the club, I undertook the responsibility of promoting and publicizing the events organized by the club, using various marketing strategies and channels to ensure that our events were well-attended and successful.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "I brainstormed and implemented innovative ideas to augment participation in club activities, constantly seeking to engage and motivate members to become more involved in our events and initiatives. ",
        
      ],
    },
    {
      title: "Secretary",
      company_name: "Rotaract Club of WCE Sangli",
      icon: rotaract,
      iconBg: "#E6DEDD",
      date: "July 2022 - Present",
      points: [
        "I was responsible for maintaining detailed records and reports of all club activities, ensuring that accurate and up-to-date information was available to all members and stakeholders. This involved diligently tracking attendance, participation, and feedback from events, compiling relevant data, and presenting it in a clear and organized manner.",
        "I was required to seek and obtain permissions from campus authorities for conducting club activities on campus. This involved navigating complex bureaucratic procedures, communicating effectively with various stakeholders, and negotiating to ensure that the club's needs were met while complying with all relevant regulations and guidelines.",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Personal AI Fitness Trainer",
      description:
        "The Personal AI Fitness Trainer using Movenet is an application that uses advanced computer vision and machine learning algorithms to help users perform yoga exercises correctly and efficiently. The application tracks the user's movements in real-time using Google's Movenet technology, providing personalized guidance and feedback based on the user's performance.",
      tags: [
        {
          name: "MoveNet",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],

      image:fitness,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Text Summarization with translation ",
      description:
        "In our project, we have successfully implemented Spacy and NLP techniques to create a tool that can perform automatic text summarization and translation in Indian regional languages such as Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, and other commonly spoken languages in India. By leveraging the MyMemory translation API, we have streamlined the translation process, making it faster and more efficient.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "Spacy",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: ats,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Personal Portfolio Site",
      description:
        "My 3D portfolio site is a visually stunning web application that allows users to interact with a collection of 3D models and animations. I built the site using Three.js, which is a powerful library for creating 3D graphics in the browser. I also used Tailwind CSS for styling and React for building the user interface",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/yashrajp-dot/portfolio",
    },
  ];



  export { services, technologies, experiences, testimonials, projects};