import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets/assets";

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
    title: "Technology and Cultural Events",
    icon: web,
  },
  {
    title: "Workshop",
    icon: mobile,
  },
  {
    title: "Hackathons",
    icon: backend,
  },
  {
    title: "Challenges",
    icon: creator,
  },
];

const technologies = [
  {
    name: "COCACOLA",
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
  {
    name: "Three JS",
    icon: threejs,
  },
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
    title: "Workshops",
    company_name: "Yantraksh",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "WEB 3.0.",
      "NANOTECH.",
      "BLOCKCHAIN.",
      "APP DEVELOPMENT.",
      "WEB DEVELOPMENT.",
      "CLOUD COMPUTING.",
      "SIXTH SENSE TECHNOLOGY"
    ],
  },
  {
    title: "CHALLENGES",
    company_name: "Yantraksh",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "ROBO WAR.",
      "HACKATHON.",
      "CODING MANIA.",
      "QUERY THE CHATGPT.",
      "PAPER PRESENTATION.",
      "DIGITAL CIRCUIT DESIGN.",
      "BUILDING THE CHATBOTS"
    ],
  },
  {
    title: "E-SPORTS",
    company_name: "Yantraksh",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "MINI MALITIA.",
      "VALORANT.",
      "CALL OF DUTY MOBILE.",
      "COUNTER STRIKE.",
    ],
  },
  {
    title: "TECH SHOW",
    company_name: "Yantraksh",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "LIGHT SHOW.",
      "TECH TALK.",
      "AR/VR SHOW.",
      "HOLOGRAM SHOW.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sponsors can reach out to a large and diverse audience of tech-savy and potential customers through various channels such as banners, stalls, flyers, online media, etc. They can also showcase their products, services and brand images to the participants and guests",
    name: "Sara Lee",
  },
  {
    testimonial:
      "Sponsors can conduct interactive sessions, demos or contests to engage with the participants and collect feedback. They can also network with peers and industry professionals and exchange ideas and insight.",
    name: "Chris Brown",
  },
  {
    testimonial:
      "Sponsors can support the growth and development of technology education and innovation in India by sponsoring events, workshops, lectures, etc. that promote learning and creativity. They can also receive recognition and appreciation from the organizers, participantsand media.",
    name: "Lisa Wang",
  },
];

const projects = [
  {
    name: "Event 1",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Yantraksh",
        color: "blue-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "green-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event 2",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Yantraksh",
        color: "blue-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "green-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Event 3",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Yantraksh",
        color: "blue-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "green-text-gradient",
      },
      {
        name: "Yantraksh",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
