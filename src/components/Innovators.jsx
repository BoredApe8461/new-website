import React from "react";
import Slider from "react-slick";
import teamData from "../assets/data/innovative-slider.json";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "./common/Icon";
import TeamBox from "./common/TeamBox";
import StarGreenImg from "/star-green.svg";

const Innovators = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: (
      <button type="button" className="slick-arrow slick-next">
        <ArrowLongRightIcon />
      </button>
    ),
    prevArrow: (
      <button type="button" className="slick-arrow slick-prev">
        <ArrowLongLeftIcon />
      </button>
    ),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="innovators"
      className="lg:py-[100px] md:py-[60px] py-[40px] bg-slate-700 overflow-hidden"
    >
      <div id="team" className="container mx-auto px-12 2xl:px-12">
        <div className="flex flex-col md:items-center md:justify-center md:mb-5 mb-[15px]">
          <img
            src={StarGreenImg}
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
        </div>
        <h2 className="text-black lg:text-[48px] md:text-[40px] text-[22px] md:leading-[54px] leading-[28px] font-inter font-medium lg:mb-5 mb-[25px] md:text-center pr-[100px] md:pr-0">
          Meet the{" "}
          <span className="text-primary md:text-black">Innovators</span> Behind
          RegionX
        </h2>
      </div>
      <div className="container-custom">
        <div className="w-full slider-equal-height">
          <Slider {...settings}>
            {teamData.map((item, i) => (
              <TeamBox item={item} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Innovators;
