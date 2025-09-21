import Image from "next/image";
import React from "react";
import { assets, workData } from "@/assets/assets";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full scroll-mt-20 px-[12%] py-10">
      <h4 className="font-ovo mb-2 text-center text-lg">My portfolio</h4>
      <h2 className="font-ovo text-center text-5xl">My latest work</h2>

      <p className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid-cols-auto my-10 grid gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group relative aspect-square cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="flex aspect-square w-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                <Image
                  src={assets.send_icon}
                  a
                  alt="send icon"
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="hover:bg-lightHover dark:hover:bg-darkHover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 text-gray-700 duration-500 dark:border-white dark:text-white"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
        />
      </a>
    </div>
  );
};

export default Work;
