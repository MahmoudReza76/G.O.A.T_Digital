import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Image from "next/image";
import image from "../asset/G.O.A.Tlogo.png";
const Footer = () => {
  return (
    <footer className="w-[100vw] h-auto flex flex-col justify-between items-start bg-black text-white  mt-4">
      <div className=" w-full flex justify-start items-center ">
        <Image src={image} width={200} height={50} alt="logo" />
      </div>
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="w-full flex gap-[50px]  md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="hidden md:flex items-center justify-start flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium  text-[1rem] cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium  text-white/[0.5] hover:text-[#0cc0df] md:text-[.7rem] pb:text-[.6rem] cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium   text-white/[0.5] hover:text-[#0cc0df] md:text-[.7rem] pb:text-[.6rem] cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium   text-white/[0.5] hover:text-[#0cc0df] md:text-[.7rem] pb:text-[.6rem] cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium   text-white/[0.5] hover:text-[#0cc0df] md:text-[.7rem] pb:text-[.6rem] cursor-pointer">
              student discount
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3 justify-start items-center">
              <div className="font-oswald font-medium   md:text-[1rem] pb:text-[.65rem]">
                Get help
              </div>
              <div className="md:text-[.7rem] pb:text-[.6rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Order Status
              </div>
              <div className="md:text-[.7rem] pb:text-[.6rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Delivery
              </div>
              <div className="md:text-[.7rem] pb:text-[.6rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Returns
              </div>
              <div className="md:text-[.7rem] pb:text-[.6rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Payment Options
              </div>
              <div className="md:text-[.7rem] pb:text-[.6rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3 justify-start items-center">
              <div className="font-oswald font-medium  md:text-[1rem] pb:text-[.65rem]">
                About Goat digital
              </div>
              <div className="text-[0.7rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                News
              </div>
              <div className="text-[0.7rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Careers
              </div>
              <div className="text-[0.7rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Investors
              </div>
              <div className="text-[0.7rem] text-white/[0.5] hover:text-[#0cc0df] cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        <div className="flex gap-4 justify-center flex-row ">
          <div className="  flex justify-center items-start pb:xl:flex-row md:flex-col   gap-4">
            <div className="md:w-10 md:h-10 pb:h-5 pb:w-5 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:text-[#0cc0df]/[0.5] cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div className="md:w-10 md:h-10 pb:h-5 pb:w-5 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:text-[#0cc0df]/[0.5] cursor-pointer">
              <FaTwitter size={20} />
            </div>
            <div className="md:w-10 md:h-10 pb:h-5 pb:w-5 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:text-[#0cc0df]/[0.5] cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="md:w-10 md:h-10 pb:h-5 pb:w-5 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:text-[#0cc0df]/[0.5] cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 goat digital, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
