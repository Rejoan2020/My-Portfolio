"use client"
import React from "react";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


const TopSection = () => {
  const downlaodcv =()=>
        <iframe
          src="/Rej.pdf"
          width="600"
          height="800"
          title="PDF Viewer"
        ></iframe>
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8">
        <div className="col-span-7 place-self-center text-center">
            <span className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello, I am {" "}
            <br/>
            <TypeAnimation
              sequence={[ 
                'Md. Rejoanur Rahman Apu',
                1000, 
                'Software Engineer',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
            </span>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-2 ">
            Let&apos;s dive and keep exploring
            </p>
            <div>
              <Link href='/#contact'>
                <button className="px-6 text-black py-3 w-full sm:w-fit rounded-full mr-4 bg-white">
                  Hire me
                </button>
              </Link>
              <Link href='/Rej.pdf'>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3">
                Download CV
                </button>
              </Link>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/Rejoanr.png"
            alt = "Rejoan"
            className = "transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[230px] h-[200px] lg:w-[330px] lg:h-[300px] relative"
            height={250}
            width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
