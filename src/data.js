// remix icons
import {
  RiTwitterFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

// services icons
import Service1Icon from "./assets/img/services/uiux_design.svg";
import Service2Icon from "./assets/img/services/web_design.svg";
import Service3Icon from "./assets/img/services/development.svg";
//import BooksIcon from "./assets/img/services/books.svg";

// brands images
import Brand1Image from "./assets/img/brands/behance.svg";
import Brand2Image from "./assets/img/brands/google.svg";
import Brand3Image from "./assets/img/brands/dribbble.svg";
import Brand4Image from "./assets/img/brands/uplabs.svg";
import Brand5Image from "./assets/img/brands/99designs.svg";

// portfolio images
import PortfolioImage1 from "./assets/img/portfolio/p1.jpg";
import PortfolioImage2 from "./assets/img/portfolio/p2.jpg";
import PortfolioImage3 from "./assets/img/portfolio/p3.jpg";
import PortfolioImage4 from "./assets/img/portfolio/p4.jpg";
import PortfolioImage5 from "./assets/img/portfolio/p5.jpg";

// nav
export const nav = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "what i love",
  },
  {
    name: "contributors",
  },
  {
    name: "projects",
  },
  {
    name: "contact",
  },
];

// social
export const social = [
  {
    icon: <RiTwitterFill />,
    href: "https://twitter.com/felixarjunaaa",
  },
  {
    icon: <RiInstagramFill />,
    href: "https://www.instagram.com/felixarjunaa/?hl=en",
  },
  {
    icon: <RiGithubFill />,
    href: "https://github.com/felixarjuna",
  },
  {
    icon: <RiLinkedinFill />,
    href: "https://www.linkedin.com/in/felix-arjuna-91b1101a3/",
  },
];

// about
export const about = {
  title: "About me",
  subtitle:
    "I graduated as a Mechanical Engineer (Energy Technology) at FH Aachen University of Applied Sciences in April 2022. My interest was aroused as i meet the Web Development field. This is where logical thinking and creativity meet.",
  image: "",
};

// services
export const services = {
  title: "What i love",
  subtitle: "Here are the things that i love to do!",
  skills: [
    {
      icon: Service3Icon,
      name: "Web Development",
      description: "",
    },
    {
      icon: Service1Icon,
      name: "Business",
      description: "",
    },
    {
      icon: Service2Icon,
      name: "Books",
      description: "",
    },
  ],
};

// contributors
export const contributors = {
  title: "Contributors",
  subtitle:
    "They support products that simplify and automate decent mechanic processes saving time for activities.",
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  preTitle: "Working on",
  title: "Projects.",
  image1: PortfolioImage1,
  image2: PortfolioImage2,
  image3: PortfolioImage3,
  image4: PortfolioImage4,
  image5: PortfolioImage5,
};

// contact
export const contact = {
  title: "Contact.",
  subtitle: "Here's where you can find me! ",
};
