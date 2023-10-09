import { useSelector } from "react-redux";
import { addtoCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { removeFromWatch } from "../Redux/cartSlice";
import Image from "next/image";
const WatchList = () => {
  const addTowatch = useSelector((state) => state.cart.watch);

  const dispatch = useDispatch();
  console.log(addTowatch);
  return (
    <div className="w-[100vw]">
      <div className="w-full grid grid-cols-2 p-4">
        {addTowatch.map((items) => {
          return (
            <div className="w-full " key={items.id}>
              <div className="flex flex-col items-center border-2 p-2 ">
                <Image
                  className="w-[4rem] min-w-[2rem]"
                  loader={() => items.image}
                  src={items.image}
                  alt={items.title}
                  width={100}
                  height={100}
                />
                <p className="md:text-[.7rem] md:font-bold line-clamp-3 pb:text-[.6rem] pb:font-bold">
                  {items.title}
                </p>
                <p className="md:text-[.7rem] md:font-bold whitespace-nowrap pb:text-[.6rem] pb:font-bold">
                  {items.price} $
                </p>
                <div className="w-full flex items-center justify-center gap-4 text-[0.8rem] font-bold">
                  <button
                    onClick={() =>
                      dispatch(
                        addtoCart({
                          title: items.title,
                          image: items.image,
                          price: items.price,
                          id: items.id,
                          quantity: items.quantity,
                        })
                      )
                    }
                    className="w-[5.5rem] h-[6vh] flex items-center justify-center rounded-md shadow-md text-white bg-[#0cc0df] hover:bg-[#46e3ff]"
                  >
                    add to cart
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeFromWatch(items.id));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
