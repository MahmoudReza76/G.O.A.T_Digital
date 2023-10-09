import Image from "next/image";
import image from "../asset/404.png";
import Link from "next/link";
const error = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col p-5">
      <div>
        <Image src={image} width={500} height={200} alt="404 error" />
      </div>
      <div className="flex text-center w-full flex-col gap-4">
        <h1 className="md:text-[1.5rem] pb:text-[1rem] font-extrabold text-gray-500 leading-7 ">
          Sorry, we couldnt find this page.
        </h1>
        <p className="md:text-[.8rem] pb:text-[.7rem] font-bold text-slate-400 leading-4">
          But doesnt worry,you can find plenty of other things on our homepage.
        </p>
        <Link className="w-full" href="/">
          <button className="sm:w-20 pb:w-16 bg-cyan-500 text-slate-50 rounded-md font-bold sm:text-[.8rem] pb:text-[.7rem]  shadow-md hover:bg-cyan-600 hover:shadow-lg active:bg-cyan-400">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default error;
