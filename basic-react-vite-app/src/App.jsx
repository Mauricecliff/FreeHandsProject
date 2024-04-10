import { useState } from "react";
import BackgrounChange from "./components/BackgrounChange";
import "./index.css";

function App() {
  const [backGroundColor, setBackGroundColor] = useState("black");

  console.log("app component rendered>>>");
  return (
    <div
      className="w-full h-screen bg-black"
      style={{ backgroundColor: backGroundColor }}
    >
      <h2 className="text-center text-2xl text-white">
        Creating a background changer with react vite
      </h2>
      <BackgrounChange setBackGroundColor={setBackGroundColor} />
    </div>
  );
}

export default App;
