/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useEffect } from "react";

function SwapButton({ onSwapAndConvert }) {
  return (
    <div className="flex justify-center -mt-5 relative">
      <button
        onClick={onSwapAndConvert}
        className="bg-[#bac3cf] py-1.5 px-1.5 rounded-lg capitalize text-gray-200 absolute mt-[7px]"
      >
        swap
      </button>
    </div>
  );
}

export default SwapButton;
