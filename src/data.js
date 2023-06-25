import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/1.png";
import img2 from "./images/3.png";
import img3 from "./images/7.png";
import img4 from "./images/5.png";

export const Experience = [
  {
    id: 1,
    date: "Aug 2022 - March 2023",
    iconsSrc: <IoCodeWorking />,
    title: "QuickMobile ReactJs Frontend Developer",
    location: "Mumbai, India",
    description: "Front end developer as a freelancer",
  },
  {
    id: 2,
    date: "June 2017- May 2019",
    iconsSrc: <IoCodeWorking />,
    title: "IsCreatives Frontend Developer",
    location: "Mumbai, India",
    description: "Front end developer as a freelancer",
  },
];

export const Projects = [
  {
    id: 1,
    name: "MERN Stack E-Commerce App",
    imageSrc: img1,
    techs: "MongoDb, ReactJs, ExpressJs,NodeJs",
    github: "https://github.com/Ajmalshaikh04/mernProjectEStore",
  },
  {
    id: 2,
    name: "Colour Palete Generator with pure javascript",
    imageSrc: img2,
    techs: "Javascript",
    github: "https://github.com/Ajmalshaikh04/NewColorPaletesGenerator",
  },
  {
    id: 3,
    name: "Wave-Band-Project",
    imageSrc: img3,
    techs: "Javascript",
    github: "https://github.com/Ajmalshaikh04/wav-proj",
  },
  {
    id: 4,
    name: "Travel Project with Gsap",
    imageSrc: img4,
    techs: "GSAP, Javascript",
    github: "https://github.com/Ajmalshaikh04/Travel-Project",
  },
];

export const SocialLinks = [
  {
    id: 2,
    iconSrc: <IoLogoGithub className="text-3xl cursor-pointer text-textBase" />,
    name: "GitHub",
    link: "https://github.com/Ajmalshaikh04",
  },
  {
    id: 5,
    iconSrc: (
      <IoLogoLinkedin className="text-3xl text-blue-500 cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ajmal-shaikh-15788b122/",
  },
  {
    id: 4,
    iconSrc: <IoLogoTwitter className="text-3xl cursor-pointer text-sky-400" />,
    name: "Twitter",
    link: "https://twitter.com/AJ_cK04",
  },

  {
    id: 1,
    iconSrc: (
      <IoLogoInstagram className="text-3xl text-pink-600 cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://instagram.com/Ajmal_shk",
  },
  {
    id: 6,
    iconSrc: (
      <IoLogoWhatsapp className="text-3xl text-green-600 cursor-pointer" />
    ),
    name: "WhatsApp",
    link: "https://wa.me/7767883953",
  },
  {
    id: 3,
    iconSrc: <IoLogoYoutube className="text-3xl text-red-500 cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
];
