import React from "react";
import { ArrowRightIcon } from "./common/Icon";
import SocialMedia from "./common/SocialMedia";
import { motion } from "framer-motion";

const Banner = () => {
  const varients = {
    initial: { y: 100, rotate: 10 },
    animate: { y: 0, rotate: 0 },
  };
  return (
    <div
      data-scroll-section
      className="bg-[url('/banner-bg.svg')] h-screen bg-primary bg-no-repeat xl:bg-cover bg-auto"
    >
      <div className="overflow-hidden relative h-full flex items-end pb-6">
        <div className="absolute left-[-10%] top-[329px] sm:top-[8vh] w-[950px] sm:w-[2000px] h-[652px] sm:h-[1290px] rotate-[16deg] hero-white-layer z-0"></div>
        <div className="container mx-auto px-4 2xl:px-12 w-full relative z-[1]">
          <div className="max-w-[950px]">
            <h1 className="text-slate-500 text-[35px] flex flex-col sm:text-[48px] lg:text-[56px] xl:text-[60px] 2xl:text-[67px] 3xl:text-[100px] md:text-[50px] leading-[130%] mb-0">
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                >
                  We are making
                </motion.span>{" "}
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                >
                  <span className="font-semibold">Web3</span> Accessible
                </motion.span>
              </div>
            </h1>
            <p className="text-slate-500/40 xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] text-[12px] md:text-[22px] text-base leading-[1.2] md:mt-4 mt-[10px]">
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.7 }}
                >
                  We provide you the tools to deploy and operate a decentralized
                </motion.span>{" "}
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
                >
                  project on Polkadot with minimal costs
                </motion.span>
              </div>
            </p>
            <div className="overflow-hidden md:mt-[40px] mt-6">
              <motion.ul
                initial={varients.initial}
                animate={varients.animate}
                className=" origin-left list-reset flex items-center gap-[20px]"
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
              >
                <li className="flex">
                  <button
                    type="button"
                    className="rounded-lg bg-primary text-white px-4 py-2 flex items-center justify-center whitespace-nowrap h-[57px] w-[132px] group transition-all ease-out duration-300"
                  >
                    Open App{" "}
                    <span className="ml-2 group-hover:translate-x-1 ease-out duration-300 transition-all">
                      <ArrowRightIcon />
                    </span>
                  </button>
                </li>
                <SocialMedia />
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
