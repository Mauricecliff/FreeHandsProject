import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

/* eslint-disable react/prop-types */
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const contextInfo = useContext(UserContext);

  const { setUser } = contextInfo;

  const loginHandler = (e) => {
    e.preventDefault();
    setUser({ password, username });
    setPassword("");
    setUsername("");
    console.log("contextinfo>>>", contextInfo);
  };

  return (
    <form className="flex justify-center gap-1" onSubmit={loginHandler}>
      <input
        type="text"
        className="border-2 p-3 rounded-md"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="border-2 p-3 rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="rounded-md bg-slate-400 p-3 text-yellow-950">
        Login
      </button>
    </form>
  );
}
export default Login;
