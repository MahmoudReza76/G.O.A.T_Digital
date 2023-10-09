import { useState, useEffect } from "react";
import image from "../asset/G.O.A.Tlogo.png";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import PositionedMenu from "./PositionedMenu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const cartItems = useSelector((state) => state.cart.cart);
  const addWatchItems = useSelector((state) => state.cart.watch);
  const [login, setLogin] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("-translate-y-[80px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <header
      className={`sm:w-[100vw] pb:w-[110vw] z-20 bg-white  h-[3rem] flex items-center justify-between  md:h-[8vh]  sticky  top-0 transition-transform duration-300 ${show} shadow-md `}
    >
      <Wrapper className="w-full xl:px-15 lg:px-20 flex lg:justify-center pb:justify-between   items-center flex-row gap-2">
        <Link
          className="sm:w-20 pb:w-14 flex justify-start xl:ml-0 md:ml-[-2.5rem] shrink-0 "
          href="/"
        >
          <Image src={image} alt="logo" width={120} height={50} />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        {/* start icon */}
        <div className="lg:w-[10vw]  pb:w-3/3 flex pb:pr-10 md:pr-0 md:justify-between row items-center ">
          <div className="w-full flex justify-center items-center xl:gap-3 ">
            <div className="flex items-center justify-center text-black ">
              <Link href="/cart">
                <div className=" w-10 pb:w-10 h-10 pb:h-10  rounded-full flex justify-center items-center relative hover:bg-black/[0.05] cursor-pointer  ">
                  <BsCart className="text-[15px] pb:text-[20px] " />
                  <div className="h-[14px] pb:h-[18px] min-w-[14px] pb:min-w-[18px] rounded-full bg-red-600 absolute   pb:left-5 top-2 text-white text-[10px] pb:text-[12px] flex justify-center items-center px-[2px] pb:px-[5px] ">
                    {cartItems.length}
                  </div>
                </div>
              </Link>
            </div>
            {/* end icon */}
            <div className="w-full flex items-center justify-center gap-2 text-black ">
              <div className="  w-10 pb:w-10 h-10 pb:h-10  rounded-full flex justify-center items-center relative hover:bg-black/[0.05] cursor-pointer  ">
                <Link href={"/watchList"}>
                  <AiOutlineHeart className="text-[16px] pb:text-[25px]" />
                  <div className="h-[14px] pb:h-[18px] min-w-[14px] pb:min-w-[18px] rounded-full bg-red-600 absolute  left-10 pb:left-5 top-2 text-white text-[10px] pb:text-[12px] flex justify-center items-center px-[2px] pb:px-[5px] ">
                    {addWatchItems.length}
                  </div>
                </Link>
              </div>
            </div>
            {status === "authenticated" ? (
              <div className="w-full">
                <PositionedMenu />
              </div>
            ) : (
              <Link href="/register">
                <button className="lg:w-[4rem] lg:h-[6vh] pb:w-[3rem] pb:h-[4vh] pb:text-[.6rem] bg-cyan-500 lg:text-[.7rem] text-slate-50 font-bold shadow-md rounded-md flex justify-center items-center hover:bg-cyan-400 hover:text-white active:bg-cyan-600">
                  Register
                </button>
              </Link>
            )}
          </div>
          {/* Mobile icone */}

          <div className=" w-[2rem]  px-1  pb:h-8 lg:hidden rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 ">
            {mobileMenu ? (
              <VscChromeClose
                className=" text-[1.2rem]"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <BiMenuAltRight
                className=" text-[1.2rem] "
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
          {/* register start */}

          {/* end start */}
        </div>
        {/* Mobile icone */}
      </Wrapper>
    </header>
  );
};

export default Header;
