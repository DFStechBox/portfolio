import React from "react";

const SliderCard = ({ item, index }) => {
  return (
    <>
      <div className="h-[200px] lg:h-[450px] md:h-400 sm:h-[200px] lg:w-[650px] md:w-[450px] sm:w-[300px] w-[300px] relative m-auto">
        <div className="h-full w-full group cursor-all-scroll z-50 relative">
          <img
            src={item.images[0]}
            alt="item thumbnail"
            className="w-full h-[200px] lg:h-[350px] md:h-[300px] max-w-[100%] rounded-lg"
          />
        </div>
        <div
          className="absolute top-14 sm:left-12 rounded bg-white h-[200px] lg:h-[350px] md:h-[300px] w-full"
          style={{ boxShadow: "#48afde -10px 10px 20px 10px" }}
        >
          
        </div>
      </div>
    </>
  );
};

export default SliderCard;
