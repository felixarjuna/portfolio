import React from "react";

// import data
import { contributors } from "../data";

const Contributors = () => {
  return (
    <section className="section" id="contributors">
      <div className="container mx-auto">
        <h2
          className="section-title"
          data-aos="fade-right"
          data-aos-offset="1000"
          data-aos-delay="500"
        >
          {contributors.title} <span className="dot"></span>
        </h2>
        <p
          className="section-subtitle"
          data-aos="fade-left"
          data-aos-offset="1000"
          data-aos-delay="500"
        >
          {contributors.subtitle}
        </p>
        {/* contributors list */}
        <div
          className="flex flex-col gap-10 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-[204px]"
          data-aos="zoom-in"
          data-aos-offset="1000"
          data-aos-delay="500"
        >
          {contributors.brands.map((brand, item) => {
            return (
              <div className="max-w-[260px] h-24 flex items-center">
                <img src={brand.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
