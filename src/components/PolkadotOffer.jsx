import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const PolkadotOffer = () => {
  const containerRef = useRef();
  const { scrollYProgress: startAnim } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 80%"],
  });

  const { scrollYProgress: scaleAnim } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 68%"],
  });
  const y = useTransform(startAnim, [0, 1], [100, 0]);
  const scale = useTransform(scaleAnim, [0, 1], [1.08, 1]);
  return (
    <div className="lg:py-[100px] overflow-hidden py-[40px]">
      <div
        ref={containerRef}
        id="wiki"
        className="container mx-auto px-4 2xl:px-12"
      >
        <motion.div
          style={{ y, scale }}
          className="bg-slate-500 pt-5 overflow-hidden relative rounded-3xl"
        >
          <svg
            className="absolute top-0 right-8"
            width="187"
            height="527"
            viewBox="0 0 187 527"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M186 527L186 244.529C186 208.75 149.331 179.745 104.099 179.745L97.3541 179.745C44.1397 179.745 0.999964 145.623 0.99996 103.53L0.999951 3.26241e-05"
              stroke="white"
              stroke-opacity="0.15"
              stroke-width="1.225"
            />
          </svg>
          <motion.div
            className="right-line right-[calc(32px+186px)] top-0 rotate-[90deg]"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.01,
            }}
          />

          <svg
            className="absolute top-0 left-8"
            width="187"
            height="527"
            viewBox="0 0 187 527"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1 0V282.471C1 318.25 37.6685 347.255 82.901 347.255H89.6458C142.86 347.255 186 381.377 186 423.47V527"
              stroke="white"
              stroke-opacity="0.15"
              stroke-width="1.225"
              strokeLinecap="round"
            />
          </svg>

          <motion.div
            className="left-line left-8 top-0 rotate-[90deg]"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.01,
            }}
          />

          <div className='md:bg-[url("/polkadot-bg.svg")] bg-fixed bg-[url("/polkadot-bg-mobile.svg")] bg-no-repeat bg-center bg-cover'>
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-[679px] py-[180px] sm:py-[100px] md:py-[120px] lg:py-[150px] 3xl:py-[240px] mx-auto text-center p-4 flex flex-col items-center justify-center">
                <h2 className="text-white md:text-[48px] md:leading-[40px] text-[24px] leading-[32px] font-inter font-medium">
                  What does <span className="text-primary">Polkadot</span>{" "}
                  offer?
                </h2>
                <p className="md:text-white text-white/80 md:text-[18px] md:leading-[22px] text-sm !leading-[122%] font-inter font-normal mt-[12px]">
                  Polkadot provides economic security to your project. With
                  hundreds of validators scattered around the world it serves as
                  a world computer on which projects can be deployed. With its
                  architecture where the validators are split into cores, it can
                  verify state transitions in parallel just like a modern CPU.{" "}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PolkadotOffer;
