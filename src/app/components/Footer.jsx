import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mb-0 mt-2">
      <div className="container p-12 flex justify-between">
        <span><Image src='/lg.jpg' height={100} width={150} /></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;