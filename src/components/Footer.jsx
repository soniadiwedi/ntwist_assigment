import React from "react";
import {AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="bg-[#081528]">
      <div className="flex items-center justify-center flex-col py-10 gap-4">
        <div>
          <img
            className=" w-[10rem]"
            loading="lazy"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
        </div>
        <div className=" text-white flex items-center gap-4 text-md">
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>
        <span className="text-[#6F7D8F] text-sm">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</span>
        <div className="text-white flex items-center gap-4">
            <AiOutlineTwitter/>
            <AiFillLinkedin/>
        </div>
        <span className="text-[#6F7D8F] text-sm">© 2022. Ntwist Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
