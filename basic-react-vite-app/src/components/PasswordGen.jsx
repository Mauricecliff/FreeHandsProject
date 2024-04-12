import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGen() {
  const [allowedChar, setAllowedChar] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (allowedChar) str += "@#$%^&*_-=+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [allowedChar, numberAllowed, length]);

  const copyPasswordHandler = () => {
    window.navigator.clipboard.writeText(password);
    alert("password copied");
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [allowedChar, numberAllowed, length, generatePassword]);

  return (
    <div className="flex justify-center">
      <div className=" bg-slate-400 mt-2 px-3 py-3 rounded-lg shadow-lg">
        <input
          type="text"
          className="outline-none outline-black p-2"
          placeholder="Generate Password Here"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button className="p-3 bg-teal-400 ml-5" onClick={copyPasswordHandler}>
          Copy
        </button>
        <br />
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="range">Length: {length}</label>
        <br />
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="Number">Numbers</label>
        <br />
        <input
          type="checkbox"
          defaultChecked={allowedChar}
          onChange={() => setAllowedChar((prev) => !prev)}
        />
        <label htmlFor="Character">Characters</label>
      </div>
    </div>
  );
}

export default PasswordGen;
