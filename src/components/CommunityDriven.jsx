import React, { useRef } from "react";
import StarGreenImg from "/star-green.svg";
import { GoalIcon, LockIcon, StarIcon, UserGroupIcon } from "./common/Icon";
import { motion, useScroll, useTransform } from "framer-motion";
const CommunityDriven = () => {
  const containerRef = useRef();
  const coreTimeRef = useRef();
  const { scrollYProgress: startAnim } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 80%"],
  });

  const { scrollYProgress: scaleAnim } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 68%"],
  });
  const y = useTransform(startAnim, [0, 1], [200, 0]);
  const opacity = useTransform(startAnim, [0, 1], [0, 1]);
  const scale = useTransform(scaleAnim, [0, 1], [1.08, 1]);

  const { scrollYProgress: coretimeProgress } = useScroll({
    target: coreTimeRef,
    offset: ["start 80%", "start 68%"],
  });

  const { scrollYProgress: coretimeBoxProgress } = useScroll({
    target: coreTimeRef,
    offset: ["start 60%", "start 50%"],
  });
  const coretimeBoxY = useTransform(coretimeBoxProgress, [0, 1], [200, 0]);
  const CoretimeBoxOpacity = useTransform(coretimeBoxProgress, [0, 1], [0, 1]);

  const coretimeY = useTransform(coretimeProgress, [0, 1], [200, 0]);
  const CoretimeOpacity = useTransform(coretimeProgress, [0, 1], [0, 1]);
  return (
    <div id="whitepaper" data-scroll-section className="relative">
      <div className="absolute top-0 w-[1px] h-[100%] bg-[rgba(16,194,133,0.2)] bottom-0 left-[50%] translate-x-[-50%] mt-[-100px] lg:block hidden"></div>
      <div ref={containerRef} className="lg:py-[100px] py-10 relative">
        <div className='hidden xl:block bg-[url("/abstract-01.svg")] bg-no-repeat bg-center bg-cover absolute h-[270px] top-0 w-full'></div>
        <div className="container mx-auto px-4 2xl:px-12 relative">
          <div className='hidden xl:block bg-[url("/star-black.svg")] bg-no-repeat bg-center bg-cover absolute top-0 left-[8%] mt-[-376px] h-[828px] w-10'></div>
          <div className='hidden xl:block bg-[url("/star-black-2.svg")] bg-no-repeat bg-center bg-cover absolute top-0 right-[8.5%] mt-[-368px] h-[828px] w-10'></div>
          <motion.div
            style={{ y, scale, opacity }}
            className="max-w-[921px] mx-auto"
          >
            <p className="text-center text-black/40 lg:text-[30px] lg:leading-[40px] text-[24px] leading-[32px] font-inter">
              To deploy your project on Polkadot,{" "}
              <span className="text-black/100">
                you need to reserve 'Coretime' on one of its cores.
              </span>{" "}
              Most projects initially don’t require nearly as much as an entire
              core allocated to them.{" "}
            </p>
            <p className="text-center mt-5 text-black/50 lg:text-[30px] lg:leading-[40px] text-[24px] leading-[32px] font-inter">
              With RegionX,{" "}
              <span className="text-black/100">
                we enable you to easily share a single core with others,
              </span>{" "}
              significantly reducing deployment and operational costs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="lg:py-[100px] py-[40px] overflow-hidden">
        <div ref={coreTimeRef} className="container mx-auto px-4 2xl:px-12">
          <div className="flex flex-col items-center justify-center">
            <img
              src={StarGreenImg}
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
          </div>
          <motion.h2
            style={{ opacity: CoretimeOpacity, y: coretimeY }}
            className="text-center text-black/100 xl:text-[48px] md:text-[38px] md:leading-[50px] text-[22px] leading-[29px] font-inter font-medium"
          >
            Making Coretime procurement{" "}
            <span className="block text-primary">community driven</span>
          </motion.h2>
          <motion.div
            style={{ y: coretimeBoxY, opacity: CoretimeBoxOpacity }}
            className="flex flex-wrap mx-[-20px]"
          >
            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box overflow-hidden py-20 lg:py-0 lg:min-h-[476px] flex justify-center lg:mt-[40px] md:mt-6 mt-4">
                <div className="flex flex-col justify-center">
                  <span className="xl:[&>svg]:w-[80px] xl:[&>svg]:h-[80px] md:[&>svg]:w-[45px] md:[&>svg]:h-[45px] [&>svg]:w-[32px] [&>svg]:h-[32px]">
                    <GoalIcon />
                  </span>
                  <h2 className="community-main-text">
                    Decentralized Governance Goals
                  </h2>
                  <p className="community-para-text">
                    Most projects deployed on Polkadot share the goal of being
                    self-governing, decentralized autonomous entities.
                  </p>
                </div>
              </div>
              <div className="community-main-box py-20 lg:py-0 xl:min-h-[696px] lg:min-h-[530px] flex justify-center lg:mt-[40px] md:mt-6 mt-4">
                <div className="flex flex-col justify-center">
                  <span className="xl:[&>svg]:w-[80px] xl:[&>svg]:h-[80px] md:[&>svg]:w-[45px] md:[&>svg]:h-[45px] [&>svg]:w-[32px] [&>svg]:h-[32px]">
                    <UserGroupIcon />
                  </span>
                  <h2 className="community-main-text">RegionX's Solution</h2>
                  <p className="community-para-text">
                    With RegionX, we make it possible for projects to
                    decentralize and make the procurement process
                    community-driven.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box py-20 lg:py-0 xl:min-h-[696px] lg:min-h-[530px] flex justify-center lg:mt-[40px] md:mt-6 mt-4">
                <div className="flex flex-col justify-center">
                  <span className="xl:[&>svg]:w-[80px] xl:[&>svg]:h-[80px] md:[&>svg]:w-[45px] md:[&>svg]:h-[45px] [&>svg]:w-[32px] [&>svg]:h-[32px]">
                    <LockIcon />
                  </span>
                  <h2 className="community-main-text">
                    Limitations of Default Protocol
                  </h2>
                  <p className="community-para-text">
                    By default, the core Polkadot protocol does not provide a
                    way to procure Coretime in a decentralized manner that does
                    not rely on a specific set of people to continue its
                    operation on Polkadot.
                  </p>
                </div>
              </div>
              <div className="community-main-box py-20 lg:py-0 lg:min-h-[476px] flex justify-center lg:mt-[40px] md:mt-6 mt-4">
                <div className="flex flex-col justify-center">
                  <span className="xl:[&>svg]:w-[80px] xl:[&>svg]:h-[80px] md:[&>svg]:w-[45px] md:[&>svg]:h-[45px] [&>svg]:w-[32px] [&>svg]:h-[32px]">
                    <StarIcon />
                  </span>
                  <h2 className="community-main-text">
                    Community Participation Rewards
                  </h2>
                  <p className="community-para-text">
                    Anyone can help a project in this process and, depending on
                    the project, get rewarded for doing so.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDriven;
