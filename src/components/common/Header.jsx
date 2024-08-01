import React, { useEffect, useState } from "react";
import Logo from "/logo.svg";
import { ArrowRightIcon, BarIcon } from "../common/Icon";
import HeaderLinks from "./HeaderLinks";

const Header = ({ locomotiveRef, startScrolling, stopScrolling }) => {
  const [isLeftMenu, setIsLeftMenu] = useState(false);
  const toggleLeftMenu = () => {
    setIsLeftMenu(!isLeftMenu);
  };

  useEffect(() => {
    if (isLeftMenu) {
      stopScrolling();
    } else {
      startScrolling();
    }
  }, [isLeftMenu]);

  return (
    <>
      <header
        id="header"
        className="fixed w-full z-30 top-0 bg-white md:h-[80px] h-[70px]"
      >
        <div className="w-full h-full container mx-auto px-4 2xl:px-12">
          <div className="w-full h-full flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="no-underline hover:no-underline w-[32px] h-[32px]"
                href="#"
              >
                <img src={Logo} />
              </a>
            </div>
            <div
              className={`md:flex hidden z-[32] bg-white top-0 bottom-0 p-[15px] h-full w-[280px] md:static md:p-0 md:w-auto md:h-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] md:bg-transparent md:shadow-none transition-all md:transition-none`}
            >
              <ul className="list-reset md:flex justify-end flex-1 items-center mx:-[15px]">
                <HeaderLinks
                  locomotiveRef={locomotiveRef}
                  setIsLeftMenu={setIsLeftMenu}
                />
                <li className="md:hidden mb-[15px] last:mb-0">
                  <button
                    type="button"
                    onClick={() => window.location.href='https://app.regionx.tech'}
                    className="rounded-lg bg-primary text-white px-4 py-2 flex items-center whitespace-nowrap font-inter group transition-all ease-out duration-300"
                  >
                    Open App{" "}
                    <span className="ml-2 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <button
                type="button"
                className="flex items-center px-3 py-2 appearance-none focus:outline-none"
                onClick={toggleLeftMenu}
              >
                <BarIcon />
              </button>
            </div>
              <button
                type="button"
                onClick={() => window.location.href='https://app.regionx.tech'}
                className="rounded-lg bg-primary text-white px-4 py-2 items-center whitespace-nowrap font-inter lg:flex hidden group transition-all ease-out duration-300"
              >
                Open App{" "}
                <span className="ml-2 group-hover:translate-x-1 transition-all ease-out duration-300">
                  <ArrowRightIcon />
                </span>
              </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed md:hidden z-[32] bg-white top-0 bottom-0 p-[15px] h-full w-[280px] md:static md:p-0 md:w-auto md:h-auto shadow-[0_0_10px_0_rgba(0,0,0,0.2)] md:bg-transparent md:shadow-none transition-all md:transition-none ${
          isLeftMenu ? "left-0" : "left-[-300px]"
        }`}
      >
        <ul className="list-reset md:flex justify-end flex-1 items-center mx:-[15px]">
          <HeaderLinks
            locomotiveRef={locomotiveRef}
            setIsLeftMenu={setIsLeftMenu}
          />
          <li className="md:hidden mb-[15px] last:mb-0">
            <button
              type="button"
              onClick={() => window.location.href='https://app.regionx.tech'}
              className="rounded-lg bg-primary text-white px-4 py-2 flex items-center whitespace-nowrap font-inter group transition-all ease-out duration-300"
            >
              Open App{" "}
              <span className="ml-2 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </button>
          </li>
        </ul>
      </div>
      {isLeftMenu && (
        <div
          onClick={() => setIsLeftMenu(!isLeftMenu)}
          className="bg-black z-[31] md:hidden w-full h-full fixed top-0 left-0 bg-opacity-80"
        ></div>
      )}
    </>
  );
};

export default Header;
