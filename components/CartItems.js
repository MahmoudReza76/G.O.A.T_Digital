import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increase, decrease, getCartTotal } from "../Redux/cartSlice";
import Image from "next/image";
import { removeFromCart } from "../Redux/cartSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { BsTrash } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";

const CartItems = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const handleIncrease = () => {
    setQuantity((prevQty) => +prevQty + 1);
    dispatch(increase(item.id));
  };

  const handleDecrease = () => {
    setQuantity((prevQty) => {
      if (prevQty === 1) return 1;
      return +prevQty - 1;
    });

    dispatch(decrease(item.id));
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems, dispatch]);

  const isSmallScreen = useMediaQuery("(max-width: 490px)");

  return (
    <TableContainer
      sx={{
        width: "100%",
        height: "auto",
      }}
      component={Paper}
      key={item.id}
    >
      <Table aria-label="simple table">
        <TableBody
          sx={{
            width: "100%",
            display: "flex",

            alignItems: "center",
            borderBottom: "1px solid #0cc0df",
            background: "#f6feff",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <TableCell
            sx={{
              width: "100%",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="w-[2.5rem] min-w-[2rem]"
              loader={() => item.image}
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
            />
          </TableCell>

          <TableCell
            sx={{
              width: "100%",
              border: "none",

              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-start",
              alignItems: "center",
            }}
          >
            <p className="md:text-[.7rem] md:font-bold line-clamp-3 pb:text-[.6rem] pb:font-bold">
              {item.title}
            </p>
          </TableCell>

          <TableCell
            sx={{
              width: "100%",
              border: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p className="md:text-[.7rem] md:font-bold whitespace-nowrap pb:text-[.6rem] pb:font-bold">
              {item.price} $
            </p>
          </TableCell>
          <TableCell
            sx={{
              width: "100%",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className=" h-auto flex flex-row items-center justify-center md:gap-2 pb:gap-0">
              <button
                onClick={handleDecrease}
                className="md:w-[1.5rem] pb:w-[1rem] p-1 h-[3vh] flex justify-center items-center rounded-md text-slate-100 bg-red-500 hover:bg-red-400 active:bg-red-600 shadow-md"
              >
                <AiOutlineLeft className="md:text-[1.5rem] pb:text-[.8rem]" />
              </button>
              <div className="">
                <input
                  id="form1"
                  min="1"
                  max="5"
                  name="quantity"
                  value={quantity}
                  className="md:w-[2rem] pb:w-[1rem] text-center"
                  onChange={() => null}
                />
              </div>
              <button
                onClick={handleIncrease}
                className="md:w-[1.5rem] pb:w-[1rem] p-1 h-[3vh] flex justify-center items-center rounded-md text-slate-100  bg-green-500 hover:bg-green-400 active:bg-green-600  shadow-md"
              >
                <AiOutlineRight className="md:text-[1.5rem] pb:text-[.8rem] " />
              </button>
            </div>
          </TableCell>
          <TableCell
            sx={{
              width: "50%",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
              }}
            >
              <BsTrash className="text-[#0cc0df] md:text-[1.2rem] pb:text-[.8rem] hover:text-[red] " />
            </button>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartItems;
