"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import LeetcodeIcon from "../../../public/lt.png";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {

  return (
    <section
      id="contact"
      className="my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl text-center font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          {" "}
          I am currently looking for new opportunities.Feel free to reach me out. 
          Even if you wanna say hi or you have any queries.
          I will try to get back to you as soon as possible.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/Rejoan2020">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rejoan-rahman/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://leetcode.com/Rejoan/">
            <Image src={LeetcodeIcon} alt="Linkedin Icon" width={37} className="py-1 mx-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;