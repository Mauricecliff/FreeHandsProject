import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const contextInfo = useContext(UserContext);
  const { user } = contextInfo;
  console.log("user>>>", user);
  return (
    <div className="text-center">
      <p className="text-center text-3xl">User Profile</p>
      <p className="text-center text-3xl">Name: {user?.username}</p>
      <p className="text-center text-3xl">Password: {user?.password}</p>
    </div>
  );
}

export default Profile;
