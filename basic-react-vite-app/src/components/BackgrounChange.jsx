// eslint-disable-next-line react/prop-types
function BackgrounChange({ setBackGroundColor }) {
  console.log("background component rendered>>>");
  return (
    <div className="p-[10px 10px] flex justify-center">
      <div
        className="
       text-center text-white 
       absolute bottom-10 
       flex justify-center gap-10
       bg-slate-500 
       p-[10px 30px] rounded-md"
      >
        <button
          className="bg-red-400 p-2 rounded-md shadow-lg"
          onClick={() => setBackGroundColor("red")}
        >
          red
        </button>
        <button
          className="bg-yellow-400 p-2 rounded-md shadow-lg"
          onClick={() => setBackGroundColor("yellow")}
        >
          yellow
        </button>
        <button
          className="bg-green-400 p-2 rounded-md shadow-lg"
          onClick={() => setBackGroundColor("green")}
        >
          green
        </button>
      </div>
    </div>
  );
}

export default BackgrounChange;
