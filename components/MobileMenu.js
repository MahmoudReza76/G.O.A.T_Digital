import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Brands", url: "/brands" },
  { id: 5, name: "Find a store", url: "/findstore" },
  { id: 6, name: "Buying guides", url: "/guides" },
  { id: 7, name: "Contact us", url: "/contact" },
];

const subMeneData = [
  { id: 1, name: "Mobiles & Tabletes", url: "/products/mobile&tablet" },
  { id: 2, name: "Televisions", url: "/products/televesions" },
  { id: 3, name: "Audio", url: "/products/audio" },
  { id: 4, name: "Computers", url: "/products/computers" },
  { id: 5, name: "Accesssories", url: "/products/accessories" },
  { id: 6, name: "Cameras", url: "/products/cameras" },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col text-[0.65rem] font-bold absolute top-[50px] left-0 w-full h-[100vh] bg-white border-t text-black  ">
      {data.map((items) => {
        return (
          <React.Fragment key={items.id}>
            {!!items?.subMenu ? (
              <li
                className=" cursor-pointer py-5 px-5 border-b flex flex-col relative "
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="h-[1vh] flex justify-between items-center">
                  {items.name}
                  <BsChevronDown size={12} />
                </div>
                {showCatMenu && (
                  <ul className="bg-teal-300 -mx-5 mt-4 -mb-4 ">
                    {subMeneData.map((items) => {
                      return (
                        <Link
                          key={items.id}
                          href={items.url}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="h-[1vh] py-4 px-8 border-t flex justify-between items-center">
                            {items.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="h-[8vh] flex justify-start items-center py-4 px-5 border-b ">
                <Link href={items?.url} onClick={() => setMobileMenu(false)}>
                  {items.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
