import { useSelector } from "react-redux";
import Image from "next/image";
import CartItems from "../components/CartItems";
import shoppingImage from "../asset/shoppingcart.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { notify } from "../components/toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const router = useRouter();
  const { data: session, status } = useSession();
  const checkout = () => {
    if (!session) {
      router.push("/register");
      notify("please first login to your account");
      return;
    }

    // checkout logic
  };
  return (
    <div className=" w-[100vw] h-auto flex flex-col justify-center items-center mb-4 p-2 gap-4">
      <h1 className="w-full flex items-center justify-center text-[1rem] text-[#0cc0df] font-bold">
        Shopping cart
      </h1>

      <div className="w-full flex lg:flex-row items-start justify-center gap-2 pb:flex-col pb:px-[1.5rem] sm:p-0">
        {cartItems.length === 0 ? (
          <div className="w-full flex justify-center items-center flex-col sm:mt-[-5rem] pb:mt-[-2rem]">
            <Image src={shoppingImage} width="400" height="400" alt="cart" />
            <p className="sm:text-[1rem] pb:text-[.6rem] text-[#555] font-bold sm:mt-[-3rem] pb:mt-[-1rem]">
              Your Cart Is Currently Empty.
            </p>
            <Link
              href="/"
              className="sm:text-[0.75rem] pb:text-[0.55rem]  font-bold text-[#999] hover:text-[#555]"
            >
              <p className="flex justify-center items-center">
                <span>Return To Shop</span>
                <BsArrowRight className="sm:text-[1.1rem] pb:text-[.8rem]" />
              </p>
            </Link>
          </div>
        ) : (
          <>
            <div className="w-full h-auto border-[3px] rounded-md shadow-lg">
              {cartItems.map((items) => {
                return <CartItems item={items} key={items.id} />;
              })}
            </div>
            <div className=" md:w-[15rem] border-2 bg-[#f6feff] rounded-md shadow-lg  pb:w-full">
              <div className="flex items-center justify-center flex-col md:text-[.7rem] pb:text-[.62rem] font-bold text-[#222] px-2">
                <div className="w-full border-b-2">
                  <h1 className="text-[.8rem] font-bold">Summary</h1>
                </div>
                <div className="w-full border-b-2">
                  <div className="flex justify-between">
                    <p>total items:</p>
                    <p>{totalQuantity}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>total price: </p>
                    <p> ${totalPrice}</p>
                  </div>
                  <div className="flex flex-col ">
                    <p>apply to promotion code:</p>
                    <div className=" flex justify-start flex-row items-center gap-2 ">
                      <input
                        id="form1"
                        min="1"
                        max="5"
                        name="promotion"
                        value=""
                        className="w-[5rem] h-6 text-center border-2 border-[#222] rounded-md "
                        onChange={() => null}
                      />
                      <button className="w-[3rem] h-[5vh] flex justify-center items-center text-white bg-black my-2 rounded-md shadow-lg hover:bg-gray-600">
                        apply
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-center ">
                  <button
                    onClick={checkout}
                    className="w-[6rem] text-white bg-[#0cc0df] my-2 rounded-md shadow-lg hover:bg-[#4be4ff]"
                  >
                    Checkout now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
