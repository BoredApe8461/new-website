import React from "react";
import { socialMedialinks } from "./helper";

const SocialMedia = () => {
  return (
    <>
      {socialMedialinks.map((link, index) => (
        <li key={index} className="flex">
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialMedia;
