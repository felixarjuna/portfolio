import React from "react";

// import data
import { contact } from "../data";

// import logo
import Logo from "../assets/img/logo.png";

// import components
import Social from "./Social";

const Contact = () => {
  return (
    <section
      className="section before:content-ornament before:flex before:justify-center lg:before:mb-[44px]"
      id="contact"
    >
      <div className="container mx-auto">
        <h2
          className="section-title text-accent"
          data-aos="fade-down"
          data-aos-offset="2200"
          data-aos-delay="1300"
        >
          {contact.title}
        </h2>
        <p
          className="section-subtitle"
          data-aos="fade-down"
          data-aos-offset="2200"
          data-aos-delay="1300"
        >
          {contact.subtitle}
        </p>
        {/* Logo */}
        <div
          className="max-w-[300px] lg:max-w-xs mx-auto mb-28"
          data-aos="fade-up"
          data-aos-offset="2300"
          data-aos-delay="1200"
        >
          <img className="" src={Logo} alt="" />
        </div>
        {/* social */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-offset="2300"
          data-aos-delay="1200"
        >
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
