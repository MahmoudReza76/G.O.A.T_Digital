import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-[100vw] max-w-[1280px]:px-10 md:px-10  mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
