import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../components/productContext";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import Loader from "../../../components/loader";
function ComputersMenu() {
  const product = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [computersItems, setComputersItems] = useState([]);

  const handleItemClick = () => {
    setIsLoadingItem(true);

    setTimeout(() => {
      setIsLoadingItem(false);
    }, 80000);
  };
  useEffect(() => {
    const savedComputersItems = localStorage.getItem("computersItems");
    if (savedComputersItems) {
      setIsLoading(false);
      setIsLoadingItem(false);
      setComputersItems(JSON.parse(savedComputersItems));
    } else {
      if (product.products.computer) {
        setIsLoading(false);
        setComputersItems(product.products.computer);
        localStorage.setItem(
          "computersItems",
          JSON.stringify(product.products.computer)
        );
      }
    }
  }, [product.products.computer]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[100vw] h-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pb:grid-cols-1   p-6  ">
          {computersItems.map((items) => {
            console.log(items);
            return (
              <Link
                key={items.id}
                onClick={handleItemClick}
                href={{
                  pathname: `/products/computers/${items.title}`,
                  query: { ...items },
                }}
                className="w-full h-[40vh] border-2   flex flex-col items-center justify-between p-2 mb-1  transition-all delay-75 rounded-sm hover:rounded-md hover:scale-110  hover:z-10 shadow-md hover:shadow-lg overflow-hidden  bg-white relative "
              >
                <div>
                  <Image
                    loader={() => items.image1}
                    src={items.image1}
                    alt={items.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-[.75rem] leading-5 text-center font-bold line-clamp-2">
                  <h1>{items.title}</h1>
                </div>
                <div className="w-full flex justify-center gap-1 text-[.8rem] font-bold border-t-2 border-[#0cc0df]">
                  <span className="italic "> $</span> {items.price}
                </div>
                <div className=" absolute inset-0  px-2 flex justify-between items-center flex-col  opacity-0 hover:opacity-100 hover:bg-gradient-to-b from-[#0cbfdfde] to-[#0cbfdf2d] transition-opacity">
                  <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="text-[.6rem]  mb-[-1rem]  line-clamp-1 text-white font-bold">
                      Display:{" "}
                      <span className="text-[.5rem]">{items.Display}</span>
                    </h1>
                    <h1 className="text-[.6rem]  mb-[-1rem] line-clamp-1 text-white font-bold">
                      Processor:{" "}
                      <span className="text-[.5rem]">{items.Processor}</span>
                    </h1>
                    <h1 className="text-[.6rem]  mb-[-1rem] line-clamp-1 text-white font-bold">
                      Memory:
                      <span className="text-[.5rem]">{items.Memory}</span>
                    </h1>
                    <h1 className="text-[.6rem]  line-clamp-1 text-white font-bold">
                      Storage:{" "}
                      <span className="text-[.5rem]">{items.Storage}</span>
                    </h1>
                  </div>
                  <div className="w-full flex justify-center items-center gap-3 pb-2">
                    <button className="py-1 px-4 bg-red-500 hover:bg-red-400 active:bg-red-600  text-white rounded-md shadow-md">
                      <FaShoppingCart />
                    </button>
                    <button className="py-1 px-4 bg-red-500 hover:bg-red-400  active:bg-red-600  text-white rounded-md shadow-md">
                      <AiTwotoneHeart />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
          <div>
            {isLoadingItem && (
              <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-opacity-80 text-white text-xl font-bold">
                <Loader />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ComputersMenu;
