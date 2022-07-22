import React from "react";

// import data
import { services } from "../data";

const Services = () => {
  return (
    <section className="section" id="what i love">
      <div className="container mx-auto">
        <h2
          className="section-title"
          data-aos="fade-down"
          data-aos-offset="600"
          data-aos-delay="300"
        >
          {services.title} <span className="dot"></span>
        </h2>
        <p
          className="section-subtitle"
          data-aos="fade-down"
          data-aos-offset="600"
          data-aos-delay="300"
        >
          {services.subtitle}
        </p>
        <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px -mt-16">
          {services.skills.map((service, index) => {
            return (
              <div
                className="p-[30px] w-full max-w-[417px] flex flex-col text-center hover:bg-white hover:shadow-2xl cursor-crosshair transition-all "
                data-aos="zoom-in"
                data-aos-offset="600"
                data-aos-delay="400"
              >
                {/* Icon */}
                <div className="w-20 h-20 mb-12 mx-auto lg:mx-auto">
                  <img src={service.icon} alt="" />
                </div>
                {/* Service Name */}
                <h3 className="text-2xl mb-3 font-semibold">{service.name}</h3>
                <p className="text-grey text-lg lg:mb-16">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
