import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import slide1 from "../asset/slides/slide1.jpg";
import slide2 from "../asset/slides/slide2.jpeg";
import slide3 from "../asset/slides/slide3.jpg";
import slide4 from "../asset/slides/slide4.webp";
import off from "../asset/slides/off.jpg";
import Link from "next/link";
function Hero() {
  return (
    <div className="w-[100vw] flex space-x-4 justify-between text-[20px] px-4 mt-[1rem] ">
      <Carousel
        className="w-[100vw]"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div className="w-full">
          <Image
            className="aspect-[16/10] rounded-lg  relative h-[60vh] md:aspect-auto object-fill "
            src={slide1}
            alt="Picture of the iphone"
          />
          <div className="absolute top-8 left-4 flex text-left flex-col gap-3">
            <h1
              href="/"
              className="text-[#0cc0df] md:text-[1.1rem] sm:text-[.8rem] pb:text-[.75rem] font-bold leading-3  "
            >
              iPhone 14 Pro and iPhone 14 Pro Max
            </h1>
            <h4 className=" md:text-[.7rem] sm:text-[.65rem] pb:text-[.6rem] text-gray-300 font-bold leading-3">
              From $999 or $41.62/mo. for 24 mo. before trade‑in
            </h4>
          </div>
          <div className="absolute top-60 left-4  ">
            <Link
              href="/"
              className="text-white bg-[#0cc0df] bg-opacity-50 text-[.9rem] font-bold hover:bg-[#0cc0df] rounded-lg px-2 py-1 "
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="aspect-[16/10] rounded-lg relative h-[60vh] md:aspect-auto object-fill "
            src={slide2}
            alt="Picture of the iphone"
          />
          <div className="absolute top-8 left-4 flex text-left flex-col gap-3">
            <h1
              href="/"
              className="text-[#0cc0df]  md:text-[1.1rem] sm:text-[.8rem] pb:text-[.75rem] font-bold leading-3  "
            >
              JUST ANNOUNCED
            </h1>
            <h4 className=" md:text-[.7rem] sm:text-[.65rem] pb:text-[.6rem] text-gray-300 font-bold leading-3">
              The Ultimate Hybrid Camera
            </h4>
          </div>
          <div className="absolute top-60 left-4">
            <Link
              href="/"
              className="text-white bg-[#0cc0df] bg-opacity-50 text-[.9rem] font-bold hover:bg-[#0cc0df] rounded-lg px-2 py-1 "
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="aspect-[16/10] rounded-lg relative h-[60vh] md:aspect-auto object-fill "
            src={slide3}
            alt="Picture of the iphone"
          />
          <div className="absolute top-8 left-4 flex text-left flex-col gap-3">
            <h1
              href="/"
              className="text-[#0cc0df] md:text-[1.1rem] sm:text-[.8rem] pb:text-[.75rem] font-bold leading-3 "
            >
              Upgrade your TV entertainment experience
            </h1>
            <h4 className=" md:text-[.7rem] sm:text-[.65rem] pb:text-[.6rem] text-gray-100 font-bold leading-3">
              Introducing our latest family of TVs. Explore the detailed
              features of our full lineup.
            </h4>
          </div>
          <div className="absolute top-60 left-4">
            <Link
              href="/"
              className="text-white bg-[#0cc0df] bg-opacity-50 text-[.9rem] font-bold hover:bg-[#0cc0df] rounded-lg px-2 py-1 "
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="aspect-[16/10] rounded-lg relative h-[60vh] md:aspect-auto object-fill "
            src={slide4}
            alt="Picture of the iphone"
          />
          <div className="absolute top-8 left-4 flex text-left flex-col gap-3">
            <h1
              href="/"
              className="text-[#0cc0df] md:text-[1.1rem] sm:text-[.8rem] pb:text-[.75rem] font-bold leading-3  "
            >
              Focal Stellia
            </h1>
            <h4 className=" md:text-[.7rem] sm:text-[.65rem] pb:text-[.6rem] text-gray-300 font-bold leading-3">
              Powerful Sound. Perfect Fit.
            </h4>
          </div>
          <div className="absolute top-60 left-4">
            <Link
              href="/"
              className="text-white bg-[#0cc0df] bg-opacity-50 text-[.9rem] font-bold hover:bg-[#0cc0df] rounded-lg px-2 py-1 "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Carousel>
      <div className="w-full hidden md:flex max-w-[25vw]">
        <Link href="/">
          <Image className="h-[60vh]" src={off} alt="off" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
