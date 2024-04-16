/* eslint-disable react/prop-types */
function Button({ from, to }) {
  console.log("from>>", from);
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <button className="w-[96%] mt-5 bg-[#bac3cf] py-1.5 rounded-lg text-gray-200 capitalize text-xs ">
          convert {from && from.toUpperCase()} to {to && to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default Button;
