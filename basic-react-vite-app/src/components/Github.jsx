import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const { bio, login, avatar_url, company } = data;

  return (
    <div className="bg-gray-700 text-center my-4 flex justify-center">
      Github
      <div>
        <img src={avatar_url} height={"300"} />
        <p className="text-center text-orange-700 ">BIO: {bio}</p>
        <p className="text-center text-orange-700 ">Login: {login}</p>
        <p className="text-center text-orange-700 ">Company: {company}</p>
      </div>
    </div>
  );
}

export default Github;
