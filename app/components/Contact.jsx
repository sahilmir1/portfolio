import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2ed7383-1195-49f8-9553-3fc9802b70d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-center bg-no-repeat px-[12%] py-10 dark:bg-none"
    >
      <h4 className="font-ovo mb-2 text-center text-lg">Connect with me</h4>
      <h2 className="font-ovo text-center text-5xl">Get in touch</h2>

      <p className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} action="" className="mx-auto max-w-2xl">
        <div className="grid-cols-auto mt-10 mb-8 grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="dark:bg-darkHover/30 flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none dark:border-white/90"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="dark:bg-darkHover/30 flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none dark:border-white/90"
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="dark:bg-darkHover/30 mb-6 w-full rounded-md border-[0.5px] border-gray-400 bg-white p-4 outline-none dark:border-white/90"
        ></textarea>

        <button
          type="submit"
          className="dark:hover:bg-darkHover mx-auto flex w-max items-center justify-between gap-2 rounded-full bg-black/80 px-8 py-3 text-white duration-500 hover:bg-black dark:border-[0.5px] dark:bg-transparent"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
