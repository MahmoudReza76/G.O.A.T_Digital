import Image from "next/image";
import Link from "next/link";
import imageBanner from "../asset/goatbanner.png";
const Banner = () => {
  return (
    <div className="w-[100vw] hidden h-auto py-10 sm:flex justify-center bg-[#5CE1E6] relative ">
      <Image
        className="rounded-md"
        src={imageBanner}
        alt="banner website"
        width={800}
        height={50}
      />
      <button className="bg-white text-[#0cc0df] absolute left-52 bottom-2 flex justify-center items-center rounded-md h-[5vh] w-[6rem] hover:text-white hover:bg-[#0cc0df]  ">
        <Link className="text-[.8rem] font-medium " href="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Banner;
