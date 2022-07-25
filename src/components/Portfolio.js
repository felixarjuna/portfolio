import React from "react";

// import data
import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <h3
          className="text-center text-2xl lg:text-3xl"
          data-aos="fade-down"
          data-aos-offset="1200"
          data-aos-delay="400"
        >
          {portfolio.preTitle}
        </h3>
        <h2
          className="section-title text-accent mb-16 lg:mb-[120px]"
          data-aos="fade-down"
          data-aos-offset="1200"
          data-aos-delay="400"
        >
          {portfolio.title}
        </h2>
        {/* portfolio projects grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div
            data-aos="zoom-in"
            data-aos-offset="1200"
            data-aos-delay="1300"
            className="lg:w-[2800px]"
          >
            <img src={portfolio.image1} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div
              className="flex"
              data-aos="zoom-in"
              data-aos-offset="1300"
              data-aos-delay="400"
            >
              <a href="https://felixarjuna.github.io/glasswebsite">
                <img className="rounded-md" src={portfolio.image2} alt="" />
              </a>
            </div>
            <div
              className="flex"
              data-aos="zoom-in"
              data-aos-offset="1400"
              data-aos-delay="500"
            >
              <a href="https://2yv83b.csb.app/">
                <img className="rounded-md" src={portfolio.image3} alt="" />
              </a>
            </div>
            <div
              className="flex"
              data-aos="zoom-in"
              data-aos-offset="1400"
              data-aos-delay="600"
            >
              <a href="https://0eu8o2.csb.app/">
                <img className="rounded-md" src={portfolio.image4} alt="" />
              </a>
            </div>
            <div
              className="flex"
              data-aos="zoom-in"
              data-aos-offset="1400"
              data-aos-delay="700"
            >
              <a href="https://felixarjuna.github.io/mod5_solution">
                {" "}
                <img className="rounded-md" src={portfolio.image5} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
