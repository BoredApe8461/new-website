import React from "react";
import FooterLogo from "/footer-logo.svg";
import { ArrowCircularIcon, ExternalIcon } from "./Icon";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling behavior
    });
  };
  return (
    <footer className="bg-slate-500 lg:py-[80px] py-[24px]">
      <div className="container mx-auto px-4 2xl:px-12 relative">
        <div className="flex flex-wrap mx-[-10px]">
          <div className="lg:w-1/5 px-[10px] w-full">
            <img alt="" src={FooterLogo} />
          </div>
          <div className="lg:w-1/4 px-[10px] w-full">
            <div className="md:mb-[32px] flex flex-col gap-2 md:last:mb-0 mb-4">
              <span className="footer-link-heading">Contact us</span>

              <a className=" footer-links" href="#">
                - - -
              </a>
            </div>
            <div className="md:mb-[32px] flex flex-col gap-2 md:last:mb-0 mb-4">
              <span className="footer-link-heading">Email</span>

              <a className="footer-links" href="mailto:support@regionx.tech">
                support@regionx.tech
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 px-[10px] w-full">
            <div className="md:mb-[32px] flex flex-col gap-2 md:last:mb-0 mb-4">
              <span className="footer-link-heading">Address</span>
              <a
                className="inline-block footer-links"
                href="#"
                target="_blank"
              >
                - - -
              </a>
            </div>
            <div className="md:mb-[32px] gap-2 flex-col flex md:last:mb-0 mb-4">
              <span className="footer-link-heading">OUR COMMUNITY</span>
              <a
                href="https://www.linkedin.com/company/regionx/"
                target="_blank"
                className="footer-links flex items-center"
              >
                LinkedIn{" "}
                <span className="ml-2">
                  <ExternalIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/5 px-[10px] w-full flex items-end justify-end flex-col">
            <button
              type="button"
              className="lg:mb-auto lg:static absolute top-[15px] right-[15px]"
              onClick={handleScrollToTop}
            >
              <ArrowCircularIcon />
            </button>
            <p className="text-sm font-medium text-slate-900/60">
              © {new Date().getFullYear()} — Copyright
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
