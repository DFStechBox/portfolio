import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HomeComponent = () => {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(62deg, #eef7fb 0 50%, #48afde 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47aede] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5  md:mt-3">
                    I'm Elhizeex
                  </h1>
                  <h2
                    className={`text-[223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    CEO Edubaba Digital &amp; an Instructor
                  </h2>
                  <a
                    className={`inline-block bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 lg:mt-10 ${hind.className} hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 `}
                  >
                    Projects
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
