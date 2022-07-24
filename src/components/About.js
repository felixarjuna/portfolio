import React from "react";

// import data
import { about } from "../data";

// import images
import Image from "../assets/img/felix_about.png";

const About = () => {
  return (
    <section
      className="section relative lg:before:content-pattern lg:before:absolute lg:before:top-[332px] lg:before:left-[100px] lg:after:content-rope lg:after:absolute lg:after:overflow-hidden lg:after:left-0 lg:after:right-0 lg:after:top-1/2 lg:after:flex lg:after:justify-center lg:after:items-center"
      id="about"
    >
      <div className="container mx-auto">
        <h2
          className="section-title mt-36"
          data-aos="fade-down"
          data-aos-offset="100"
        >
          {about.title}
          <span className="dot"></span>
        </h2>
        <p
          className="section-subtitle lg:mb-[24px]"
          data-aos="fade-down"
          data-aos-offset="100"
        >
          {about.subtitle}
        </p>
        {/* image */}
        <div>
          {/* circle */}
          <div className="absolute w-32 h-32 bg-accent left-[38%] top-[42%] md:left-[50%] md:top-[35%] z-30 rounded-full mix-blend-hue blur-[30px] lg:-ml-20"></div>
          <img
            className="mx-auto z-20 relative "
            src={Image}
            alt=""
            data-aos="fade-left"
            data-aos-offset="100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
