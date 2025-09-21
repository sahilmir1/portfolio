import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="mx-auto mb-2 w-36"
        />

        <div className="mx-auto flex w-max items-center gap-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          sahilmir1996@gmail.com
        </div>
      </div>

      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
        <p>2025 Mir Sahil. All rights reserved.</p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
