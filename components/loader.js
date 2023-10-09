import { ThreeCircles } from "react-loader-spinner";
import Image from "next/image";
import loaderimage from "../asset/G.O.A.Tlogo.png";
const Loader = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center flex-col gap-2">
      <Image
        className="mb-[-4rem]"
        src={loaderimage}
        alt="loader"
        width={300}
        height={300}
      />
      <ThreeCircles
        height="100"
        width="100"
        color="#0cc0df"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
