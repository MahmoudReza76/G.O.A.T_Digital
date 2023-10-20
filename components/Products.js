import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Products = ({ products }) => {
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
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const ButtonGroup = (_a) => {
    var { next, previous, goToSlide } = _a,
      rest = __rest(_a, ["next", "previous", "goToSlide"]);
    const {
      carouselState: { currentSlide },
    } = rest;
    return React.createElement(
      "div",
      {
        className:
          "carousel-button-group mb-4   gap-4 flex justify-end \n          items-center w-full",
      },
      React.createElement(
        "button",
        { className: "block p-3 bg-slate-300", onClick: () => previous() },
        " ",
        React.createElement(FiChevronLeft, null)
      ),
      React.createElement(
        "button",
        { onClick: () => next() },
        React.createElement(
          "span",
          { className: "block p-3 bg-slate-300" },
          React.createElement(BiChevronRight, null)
        )
      )
    );
  };
  return (
    <div className="w-full  px-2 h-auto ">
      {/* mobile */}

      <div>
        <div className=" w-full flex  justify-between items-center px-10">
          <h1 className="md:text-[.9rem] pb:text-[.8rem] font-bold">Mobiles</h1>
          <Link
            href="/products/mobile&tablet"
            className="md:text-[.70rem] pb:text-[.6rem]  hover:font-medium"
          >
            Show more
          </Link>
        </div>
        <Carousel
          responsive={responsive}
          className="w-full flex flex-row border-2 px-2  justify-between bg-slate-50 "
        >
          {products.mobile.map((items) => {
            return (
              <Link
                href={{
                  pathname: `/products/mobile&tablet/${items.title}`,
                  query: { ...items },
                }}
                className="w-full flex items-center border-2 border-slate-50  h-full justify-between py-2 flex-col bg-white  "
                key={items.id}
              >
                <Image
                  loader={() => items.image1}
                  src={items.image1}
                  alt={items.image1}
                  width={100}
                  height={100}
                />
                <h1 className="md:text-[0.7rem] pb:text-[0.6rem] p-[1rem] text-center leading-4 font-medium">
                  {items.title}
                </h1>
                <p className="text-[.7rem] text-center  font-bold">
                  {items.price} $
                </p>
              </Link>
            );
          })}
        </Carousel>
      </div>

      {/* coputers */}
      <div className="my-10">
        <div className=" w-full flex md:text-[.9rem] pb:text-[.8rem] justify-between items-center px-10">
          <h1 className="font-bold">Computers</h1>
          <Link
            href={{ pathname: `/products/computers` }}
            className="md:text-[.70rem] pb:text-[.6rem] hover:font-medium"
          >
            Show more
          </Link>
        </div>
        <Carousel
          responsive={responsive}
          className="w-full flex flex-row border-2 px-2  justify-between bg-slate-50 "
        >
          {products.computer.map((items) => {
            return (
              <Link
                href={{
                  pathname: `/products/computers/${items.title}`,
                  query: { ...items },
                }}
                className="w-full flex items-center border-2 border-slate-50  h-full justify-between py-2 flex-col bg-white  "
                key={items.id}
              >
                <Image
                  loader={() => items.image1}
                  src={items.image1}
                  alt={items.image1}
                  width={100}
                  height={100}
                />
                <h1 className="md:text-[0.7rem] pb:text-[0.6rem] p-[1rem] text-center leading-4 font-medium">
                  {items.title}
                </h1>
                <p className="text-[.7rem] text-center  font-bold">
                  {items.price} $
                </p>
              </Link>
            );
          })}
        </Carousel>
      </div>
      {/* Televesion */}
      <div className="my-10">
        <div className=" w-full flex  justify-between items-center px-10">
          <h1 className="md:text-[.9rem] pb:text-[.8rem] font-bold">
            Televesions
          </h1>
          <Link
            href={{
              pathname: `/products/televesions`,
            }}
            className="md:text-[.70rem] pb:text-[.6rem]  hover:font-medium"
          >
            Show more
          </Link>
        </div>
        <Carousel
          responsive={responsive}
          className="w-full flex flex-row border-2 px-2  justify-between bg-slate-50 "
        >
          {products.televesion.map((items) => {
            return (
              <Link
                href={{
                  pathname: `/products/televesions/${items.title}`,
                  query: { ...items },
                }}
                className="w-full flex items-center border-2 border-slate-50  h-full justify-between py-2 flex-col bg-white  "
                key={items.id}
              >
                <Image
                  loader={() => items.image1}
                  src={items.image1}
                  alt={items.image1}
                  width={100}
                  height={100}
                />
                <h1 className="md:text-[0.7rem] pb:text-[0.6rem] p-[1rem] text-center leading-4 font-medium">
                  {items.title}
                </h1>
                <p className="text-[.7rem] text-center  font-bold">
                  {items.price} $
                </p>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
