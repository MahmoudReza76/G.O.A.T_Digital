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
  {
    id: 1,
    name: "Mobiles & Tabletes",
    url: "/products/mobile&tablet",
  },
  { id: 2, name: "Televisions", url: "/products/televesions" },
  { id: 3, name: "Audio", url: "/products/audio" },
  { id: 4, name: "Computers", url: "/products/computers" },
  { id: 5, name: "Accesssories", url: "/products/accessories" },
  { id: 6, name: "Cameras", url: "/products/cameras" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="w-full hidden  lg:flex items-center lg:px-8 xl:px-0 gap-4 font-medium text-black">
      {data.map((items) => {
        return (
          <React.Fragment key={items.id}>
            {!!items?.subMenu ? (
              <li
                className=" cursor-pointer  flex items-center gap-2 relative text-[.65rem]  max-[1090px]:text-[.5rem]"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {items.name}
                <BsChevronDown size={12} />
                {showCatMenu && (
                  <ul className="bg-white absolute top-8 min-w-[20vw] text-[1.1vw] p-1 text-black shadow-lg">
                    {subMeneData.map((items) => {
                      return (
                        <Link
                          key={items.id}
                          href={items.url}
                          onClick={() => {
                            setShowCatMenu(false);
                          }}
                        >
                          <li className="h-8  flex justify-between items-center px-3 hover:bg-[#0cc0df] font-medium rounded-md">
                            {items.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <ul className="  whitespace-nowrap ">
                <li className="cursor-pointer  text-[.65rem] max-[1090px]:text-[.5rem] ">
                  <Link href={items?.url}>{items.name}</Link>
                </li>
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
