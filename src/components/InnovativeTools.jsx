import React, { useEffect, useRef, useState } from "react";
import InnovativeBg from "/innovative-bg.svg";
import ScrollSpy from "react-ui-scrollspy";
import tools from "../assets/data/tools.json";
import { innovativeToolsLink } from "./common/helper";
import InnovativeLinks from "./common/InnovativeLinks";
import InnovativeBox from "./common/InnovativeBox";
import { motion, useScroll, useTransform } from "framer-motion";
const InnovativeTool = () => {
  const [items, setItems] = useState([]);

  const [isFixed, setIsFixed] = useState(false);
  const myRef = useRef(null);
  const handleScroll = () => {
    const top = document.getElementById("innovators").offsetTop;
    if (window.scrollY >= myRef.current.offsetTop - 80) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (window.scrollY > top - 250) {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setItems(tools);
  }, []);

  const containerRef = useRef();
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
  return (
    <section className="lg:py-[100px] md:pb-[60px] md:pt-0 py-[40px]">
      <div className="container mx-auto px-4 2xl:px-12">
        <div className="flex relative lg:mb-[135px]">
          <div className="xl:w-[300px] lg:w-[250px] absolute top-[-200px] hidden lg:block">
            <img src={InnovativeBg} alt="" className="w-full" />
          </div>
          <div className="xl:pl-[400px] lg:pl-[350px]">
            <p className="lg:text-[24px] md:text-[18px] text-[15px] leading-[29px] uppercase text-slate-500/40 lg:mb-4 md:md-3 md-2">
              Built as a dedicated parachain
            </p>
            <h2 className="lg:text-[48px] lg:leading-[50px] md:text-[26px] md:leading-[30px] text-[22px] leading-[29px] text-black font-inter">
              Innovative Tools for Seamless Decentralized Project Deployment on
              Polkadot
            </h2>
          </div>
        </div>
        <div className="lg:flex">
          <div
            className={`xl:w-[300px] lg:w-[250px] w-full lg:mt-[40px] relative z-[2] lg:min-h-auto min-h-[72px]`}
            ref={myRef}
          >
            <div className="gradient-border absolute top-0 left-0 h-full hidden lg:block"></div>
            <div
              className={`overflow-x-auto lg:overflow-x-visible bg-white lg:bg-transparent lg:p-0 py-4 lg:w-auto w-full ${
                isFixed
                  ? "fixed md:top-[80px] top-[70px] lg:left-auto left-0 md:px-0 px-4"
                  : ""
              }`}
            >
              <div className="flex gap-4 lg:block">
                {innovativeToolsLink.map((data, index) => (
                  <InnovativeLinks data={data} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="xl:w-[calc(100%_-_300px)] lg:w-[calc(100%_-_250px)] lg:pl-[100px] w-full">
            <ScrollSpy scrollThrottle={100}>
              {items.map((item, i) => (
                <InnovativeBox item={item} key={i} />
              ))}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTool;
