import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  console.log("userid>>>>", userid);

  return (
    <div className="bg-orange-700 text-center text-3xl text-white">
      User {userid}
    </div>
  );
}

export default User;
