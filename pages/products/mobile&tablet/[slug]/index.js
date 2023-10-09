import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Radio, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../../Redux/cartSlice";
import { addToWatch } from "../../../../Redux/cartSlice";
import { removeFromWatch } from "../../../../Redux/cartSlice";
import Cookies from "js-cookie";

const MobileSpaces = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const data = router.query;
  const [readmore, SetReadmore] = useState(false);
  console.log(data);
  const [isWatched, setIsWatched] = useState(
    Cookies.get(`isWatched-${data.id}`) === "true"
  );

  useEffect(() => {
    Cookies.set(`isWatched-${data.id}`, JSON.stringify(isWatched));
  }, [data.id, isWatched]);

  const handleToggleWatch = () => {
    if (isWatched) {
      dispatch(removeFromWatch(data.id));
      Cookies.remove(`isWatched-${data.id}`);
    } else {
      dispatch(
        addToWatch({
          title: data.title,
          image: data.image1,
          price: data.price,
          id: data.id,
          quantity: data.quantity,
        })
      );
      Cookies.set(`isWatched-${data.id}`, JSON.stringify(true));
    }
    setIsWatched(!isWatched);
  };

  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const breadcrumbs = [
    <Link underline="hover" key="1" href="/">
      <Typography
        sx={{
          fontSize: ".7rem",
          color: "#888",

          ":hover": { color: "#0cbfdfe1" },
        }}
      >
        Home
      </Typography>
    </Link>,
    <Link underline="hover" key="2" href="/products/mobile&tablet/">
      <Typography
        sx={{
          fontSize: ".7rem",
          color: "#888",
          ":hover": { color: "#0cbfdfe1" },
        }}
      >
        Mobiles & Tablets
      </Typography>
    </Link>,

    <Typography
      key="3"
      sx={{
        fontSize: ".7rem",
        color: "#888",
      }}
    >
      {data.title}
    </Typography>,
  ];
  return (
    <div className="w-[100vw] h-auto px-6 py-5">
      {console.log(data)}
      <Stack spacing={2}>
        <Breadcrumbs
          sx={{ fontSize: ".7rem", color: "#888" }}
          separator="›"
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div className="w-full border-2 shadow-md rounded-md bg-[#0cbfdf07] p-3  grid gap-3   items-start xl:grid-cols-4  md:grid-cols-3 ">
        <div className="w-full h-auto flex col-span-1  ">
          <Carousel
            className="xl:w-[40vw] md:w-[70vw] "
            thumbWidth="2.2rem"
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={true}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={data.image1} />
              <img
                loader={() => data.image1}
                src={data.image1}
                alt={`${data.title}1`}
              />
            </picture>

            <picture>
              <source media="(min-width: 768px)" srcSet={data.image2} />
              <img
                loader={() => data.image2}
                src={data.image2}
                alt={`${data.title}2`}
              />
            </picture>

            <picture>
              <source media="(min-width: 768px)" srcSet={data.image3} />
              <img
                loader={() => data.image3}
                src={data.image3}
                alt={`${data.title}3`}
              />
            </picture>
          </Carousel>
        </div>
        <div className="w-full px-2  col-span-2 ">
          <div className="w-full text-[.8rem] flex flex-col gap-6 ">
            <div className="  border-b-4 border-[#0cc0df]">
              <div>
                <h1 className="text-[1.2rem] font-bold text-[#888] ">
                  {data.title}
                </h1>
                <p className="text-[0.5rem] font-bold text-[#999] pb-2 leading-3">
                  {data.Memory}
                </p>
              </div>
              <Stack className="w-[5rem]">
                <Rating
                  sx={{ color: "#0cc0df" }}
                  name="size-medium"
                  defaultValue={4}
                />
              </Stack>
            </div>

            <div>
              {readmore ? (
                <ul className="flex flex-col justify-center gap-2 list-disc text-[0.6rem] leading-3 ">
                  <li>
                    <strong>Body:</strong> <span>{data.Body}</span>
                  </li>

                  <li>
                    <strong> Display:</strong>
                    <span>{data.Display}</span>
                  </li>

                  <li>
                    <strong>Chipset:</strong> <span>{data.Chipset}</span>
                  </li>

                  <li>
                    <strong>Memory:</strong> <span>{data.Memory}</span>
                  </li>

                  <li>
                    <strong>OS/Software:</strong> <span>{data.OS}</span>
                  </li>

                  <li>
                    <strong>Rear camera:</strong> <span>{data.Rearcamera}</span>
                  </li>

                  <li>
                    <strong>Front camera:</strong>{" "}
                    <span>{data.Frontcamera}</span>
                  </li>

                  <li>
                    <strong>Video capture:</strong>{" "}
                    <span>{data.Videocapture}</span>
                  </li>

                  <li>
                    <strong>Battery:</strong> <span>{data.Battery}</span>
                  </li>

                  <li>
                    <strong> Misc:</strong>
                    <span>{data.Misc}</span>
                  </li>
                </ul>
              ) : (
                <ul className="flex flex-col justify-center gap-2 list-disc text-[0.6rem] leading-3 ">
                  <li>
                    <strong>Body:</strong> <span>{data.Body}</span>
                  </li>

                  <li>
                    <strong> Display:</strong>
                    <span>{data.Display}</span>
                  </li>

                  <li>
                    <strong>Chipset:</strong> <span>{data.Chipset}</span>
                  </li>

                  <li>
                    <strong>Memory:</strong> <span>{data.Memory}</span>
                  </li>

                  <li>
                    <strong>OS/Software:</strong> <span>{data.OS}</span>
                  </li>

                  <li>
                    <strong>Rear camera:</strong> <span>{data.Rearcamera}</span>
                  </li>
                </ul>
              )}

              <button
                className="text-[0.7rem] text-[#0cc0df] font-bold"
                onClick={() => SetReadmore(!readmore)}
              >
                {readmore ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-[20vw] lg:w-[70vw] md:w-[80vw] sm:w-[75vw] h-full  ">
          <div className="w-full md:h-[25vh]  xl:h-[50vh] bg-gradient-to-r from-[#0cbfdfa1]   to-[#0cbfdf44] shadow-lg rounded-lg flex items-center justify-center pb:flex-col xl:flex-col md:flex-row md:divide-x  ">
            <div className="w-full h-full flex items-center justify-center flex-col px-2 sm:border-b-2 md:border-0 xl:border-b-2  ">
              <h1 className="w-full text-[0.8rem]   text-slate-50 font-bold leading-5 py-2 ">
                Choose the color you want:
              </h1>
              <div>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title={data.colors?.[0]}
                >
                  <Radio
                    sx={{
                      color: data.colors?.[0],
                      "&.Mui-checked": {
                        color: data.colors?.[0],
                      },
                    }}
                    {...controlProps("a")}
                  />
                </Tooltip>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title={data.colors?.[1]}
                >
                  <Radio
                    sx={{
                      color: data.colors?.[1],
                      "&.Mui-checked": {
                        color: data.colors?.[1],
                      },
                    }}
                    {...controlProps("b")}
                  />
                </Tooltip>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title={data.colors?.[2]}
                >
                  <Radio
                    sx={{
                      color: data.colors?.[2],
                      "&.Mui-checked": {
                        color: data.colors?.[2],
                      },
                    }}
                    {...controlProps("c")}
                  />
                </Tooltip>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title={data.colors?.[3]}
                >
                  <Radio
                    sx={{
                      color: data.colors?.[3],
                      "&.Mui-checked": {
                        color: data.colors?.[3],
                      },
                    }}
                    {...controlProps("d")}
                  />
                </Tooltip>
              </div>
            </div>
            <div className="w-full flex items-center justify-center sm:border-b-2 md:border-0 md:border-r-2 xl:border-b-2 py-1">
              <h1 className="w-[6rem] h-10 font-bold text-[1rem] text-white px-2 rounded-md  ">
                <span className="italic">US</span> {data.price}{" "}
                <span className="italic">$</span>
              </h1>
            </div>
            <div className="w-full py-2 flex flex-col justify-between items-center gap-2  ">
              <div
                onClick={handleToggleWatch}
                className="w-[7rem] flex flex-row justify-center items-center gap-2 bg-cyan-500 rounded-md text-[.65rem] text-white shadow-md hover:text-cyan-500 hover:bg-slate-100 active:bg-red-500 active:text-slate-100 "
              >
                {!isWatched ? (
                  <div className="flex flex-row items-center justify-between gap-1">
                    <AiOutlineHeart className="text-[0.9rem] " />
                    <button>Add to watchlist</button>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center gap-1 bg-red-500 w-full rounded-md hover:bg-red-700 hover:text-white">
                    <AiOutlineClose className="text-[0.9rem] " />
                    <button>Remove</button>
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addtoCart({
                      title: data.title,
                      image: data.image1,
                      price: data.price,
                      id: data.id,
                      quantity: data.quantity,
                    })
                  )
                }
                className="w-[7rem] flex flex-row justify-center items-center gap-2 bg-cyan-500 rounded-md text-[.7rem] text-white shadow-md hover:text-cyan-500 hover:bg-slate-100 active:bg-red-500 active:text-slate-100 "
              >
                <GiShoppingCart className="text-[0.9rem]" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSpaces;
