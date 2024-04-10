/* eslint-disable react/prop-types */

function Card({
  username = "Your username",
  post = "Your position",
  image = "https://plus.unsplash.com/premium_photo-1664301778733-4810d1a19072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D",
}) {
  return (
    <div className="flex justify-center">
      <div className="w-[32rem]">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={image}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur, alias.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">{username}</div>
              <div className="text-slate-700 dark:text-slate-500">{post}</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default Card;
