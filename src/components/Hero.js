import React from "react";

// Import components
import Social from "./Social";
// Import images
import Man from "../assets/img/felix_banner.png";
// Import Icons
import { RiFileDownloadFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      className="pt-[100px] bg-heroText bg-contain bg-no-repeat bg-center lg:bg-top"
      id="home"
    >
      <div className="container mx-auto xl:px-[100px]">
        <div className="lg:flex text-center lg:text-left">
          {/* hero left side */}
          <div className="flex-1 lg:max-w-[558px] mt-12">
            <h3
              className="text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[50px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Hola! I'm
            </h3>
            <h2
              className="text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Felix Arjuna
            </h2>
            <h1
              className="text-[60px] md:text-[80px] lg:text-[90px] leading-none font-semibold mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Web <br />
              <span className="lg:pl-[40px]">Developer</span>
              <span className="w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2"></span>
            </h1>
            <p
              className="mb-[35px] text-lg lg:text-xl text-center lg:text-left"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              I love to engange and learn new things! :)
            </p>
            {/* socials */}
            <div
              className="mx-auto max-w-min lg:m-0 relative z-10"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <Social />
            </div>
            <a
              href="lebenslauf.pdf"
              download="felixarjuna_cv.pdf"
              data-aos="fade-down"
              data-aos-delay="750"
            >
              <button
                className="btn bg-accent mx-auto lg:mx-0 mb-6 shadow-xl shadow-[#ad8e6a] relative z-10"
                data-aos="fade-down"
                data-aos-delay="750"
              >
                Download my CV{" "}
                <span className="text-xl ml-3">
                  <RiFileDownloadFill />
                </span>
              </button>
            </a>
          </div>
          <div
            className="flex-1 flex justify-center lg:justify-end relative xl:after:content-arrow xl:after:w-96 xl:after:h-96 xl:after-block xl:after:absolute xl:after:top-2/4 xl:after:-left-96"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <img className="z-20 w-[500px] mt-20 pt-12" src={Man} alt="" />
            <div className="w-[350px] h-[400px] sm:w-[553px] sm:h-[753px] bg-blob bg-contain bg-no-repeat mx-auto absolute top-[85px] z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
