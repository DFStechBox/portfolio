"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        id="portfolio"
        className="mt-0 pt-5 -mb-40"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #eef7fb 0 45%, white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px] text-[#f7fbfd] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px, -20px)" }}
          >
            portfolio
          </p>
          <div style={{ transform: "translate(0px, -250px)"}}>
            <p className="text-[#48afde] md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5text-[16px] text-[#47626d] leading-8 mt-5 ${hind.className}`}
            >
              Here are a few of my most recent work. As a web designer and
              full-stack web developer, I constantly prioritise 100% client
              satisfaction. I always enjoy working on my projects, so each one
              is a new adventure for me. While working on each new project, I
              attempt to learn new things. As a result, my paintings are always
              current and one-of-a-kind.
            </p>
          </div>
        </div>
        <div style={{transform: 'translate(10px, -20px)'}}>
          <MySlider />
        </div>
      </div>
    </main>
  );
}
