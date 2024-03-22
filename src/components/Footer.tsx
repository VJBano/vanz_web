import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-1/2 flex lg:w-1/5 md:w-1/5  justify-around py-3 items-center">
      <a href="https://facebook.com/vincentjay.bano.1">
        <FaFacebook className="w-7 h-7" />
      </a>
      <a href="https://www.instagram.com/vanz.xxi/">
        <FaInstagramSquare className="w-7 h-7" />
      </a>
      <a href="https://twitter.com/jay_bano">
        <FaSquareXTwitter className="w-7 h-7" />
      </a>
      <a href="https://github.com/VJBano">
        <FaGithub className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/vincent-jay-bano-776076225/">
        <FaLinkedin className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Footer;
