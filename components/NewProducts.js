import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
const NewProducts = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 828 },
      items: 4,
      slidesToSlide: 4, //
    },
    fablet: {
      breakpoint: { max: 828, min: 464 },
      items: 3,
      slidesToSlide: 3, //
    },
    mobile: {
      breakpoint: { max: 464, min: 320 },
      items: 3,
      slidesToSlide: 3,
    },
    mini: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  function truncate(str, length) {
    return str.length > length ? `${str.substr(0, length)}...` : str;
  }

  return (
    <div className="w-[100vw] px-4 h-[60vh] relative  flex justify-center items-center flex-col">
      <div className="w-full flex items-start justify-start ">
        <div className="w-[10rem] h-[6vh] text-center rounded-md top-8 absolute  bg-[#0cc0df] text-white">
          <h1 className="font-bold md:text-[1rem] pb:text-[0.8rem]">
            New Products
          </h1>
        </div>
      </div>
      <Carousel
        className="w-full  pb:[100vw] rounded-lg shadow-lg px-3  h-[38vh] flex justify-between items-center   text-[.6rem] font-bold bg-[#0cc0df] text-center leading-4"
        responsive={responsive}
      >
        <Link
          href={{
            pathname: `/products/mobile&tablet/${products.mobile[0].title}`,
            query: { ...products.mobile[0] },
          }}
          className="flex  xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg  bg-white items-center justify-between  flex-col py-2  shadow-lg "
        >
          <Image
            loader={() => products.mobile[0].image1}
            src={products.mobile[0].image1}
            alt={products.mobile[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.mobile[0].title, 20)}</h1>
          <p>$ {products.mobile[0].price}</p>
        </Link>
        <Link
          href={{
            pathname: `/products/computers/${products.computer[0].title}`,
            query: { ...products.computer[0] },
          }}
          className=" flex xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg px-2 bg-white items-center justify-between flex-col flex-1 py-2  shadow-lg	"
        >
          <Image
            loader={() => products.computer[0].image1}
            src={products.computer[0].image1}
            alt={products.computer[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.computer[0].title, 20)}</h1>
          <p>$ {products.computer[0].price}</p>
        </Link>
        <Link
          href={{
            pathname: `/products/televesions/${products.televesion[0].title}`,
            query: { ...products.televesion[0] },
          }}
          className=" flex xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg px-2 bg-white items-center justify-between flex-col flex-1 py-2 shadow-lg	"
        >
          <Image
            loader={() => products.televesion[0].image1}
            src={products.televesion[0].image1}
            alt={products.televesion[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.televesion[0].title, 20)}</h1>
          <p>$ {products.televesion[0].price}</p>
        </Link>
        <Link
          href="/"
          className=" flex xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg px-2 bg-white items-center justify-between flex-col flex-1 py-2  shadow-lg"
        >
          <Image
            loader={() => products.camera[0].image1}
            src={products.camera[0].image1}
            alt={products.camera[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.camera[0].title, 25)}</h1>
          <p>$ {products.camera[0].price}$</p>
        </Link>
        <Link
          href="/"
          className=" flex xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg px-2 bg-white items-center justify-between flex-col flex-1 py-2  shadow-lg	"
        >
          <Image
            loader={() => products.audio[0].image1}
            src={products.audio[0].image1}
            alt={products.audio[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.audio[0].title, 25)}</h1>
          <p>$ {products.audio[0].price}</p>
        </Link>
        <Link
          href="/"
          className=" flex xl:w-[17vw] lg:w-[18vw] md:w-[20vw] sm:w-[25vw] pb:w-full h-[30vh] rounded-lg px-2 bg-white items-center justify-between flex-col flex-1 py-2  shadow-lg"
        >
          <Image
            loader={() => products.accessories[0].image1}
            src={products.accessories[0].image1}
            alt={products.accessories[0].title}
            width={80}
            height={80}
          />
          <h1>{truncate(products.accessories[0].title, 25)}</h1>
          <p>$ {products.accessories[0].price}</p>
        </Link>
      </Carousel>
    </div>
  );
};

export default NewProducts;
