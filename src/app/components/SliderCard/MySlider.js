import React from "react";
import SliderCard from "./SliderCard";
import { DataArray } from "@/app/data";

const MySlider = () => {
  return (
    <div>
      {DataArray.map((item, index) => (
        <div className="my-slider">
          <SliderCard item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default MySlider;
