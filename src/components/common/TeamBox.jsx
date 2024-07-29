import React from "react";
import { LinkedinIcon } from "./Icon";

const TeamBox = ({ item }) => {
  return (
    <div className="lg:p-[20px] p-[8px] flex-important h-full">
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-900">
        <div className="md:h-[400px] h-[200px] w-full">
          <img alt="" src={item.image} className="w-full h-full object-cover" />
        </div>
        <div className="border-b border-b-slate-900 lg:p-6 p-4">
          <h2 className="xl:text-3xl font-semibold xl:leading-[36px] md:text-2xl text-slate-600 pr-[30px] relative text-[18px] leading-[23px]">
            {item.title}{" "}
            <a
              className="absolute top-0 right-0"
              href={item.linkedin}
              target={item.linkedin.startsWith('#') ? '_self' : '_blank'}
            >
              <LinkedinIcon />
            </a>
          </h2>
          <p className="md:text-[18px] md:leading-[22px] text-sm leading-[18px] font-inter font-light md:text-black/50 text-black/70">
            {item.job}
          </p>
        </div>
        <div className="lg:p-6 p-4">
          <p className="md:text-base md:leading-[22px] text-sm leading-[18px] font-inter font-light md:text-black/50 text-black/70">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBox;
