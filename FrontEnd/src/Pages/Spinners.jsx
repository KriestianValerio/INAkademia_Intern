import { Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinners = () => {
  return (
    <React.Fragment>
      <div className="absolute top-0 grid place-content-center w-screen h-screen">
        <AiOutlineLoading3Quarters
          aria-label="Extra large spinner example"
          className="w-10 h-10 animate-spin"
        />
      </div>
    </React.Fragment>
  );
};

export default Spinners;
