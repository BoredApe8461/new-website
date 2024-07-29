import React from "react";

const InnovativeBox = ({ item }) => {
  return (
    <div
      id={item.id}
      className="bg-slate-700 border border-slate-900 xl:p-[50px] lg:p-[30px] p-4 rounded-[12px] flex xl:flex-row flex-col-reverse lg:mt-[40px] mt-4 first:mt-0"
    >
      <div className="xl:w-[calc(100%_-_330px)] xl:flex flex-col pr-[20px]">
        <h2 className="xl:text-[30px] xl:leading-[36px] md:text-[24px] md:leading-[26px] lg:font-semibold font-medium text-slate-600 text-[18px] leading-[23px] xl:mb-0 mb-[10px]">
          {item.title}
        </h2>
        <p
          className="xl:text-[22px] xl:leading-[30px] md:text-[18px] md:leading-[22px] text-sm leading-[18px] text-slate-600 mt-auto"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></p>
      </div>
      <div className="xl:w-[330px] w-[200px] xl:mb-0 md:mb-5 mb-[10px]">
        <img src={item.image} alt="" />
      </div>
    </div>
  );
};

export default InnovativeBox;
