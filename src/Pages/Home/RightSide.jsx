import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const RightSide = ({ event }) => {
  const { title, id, category, details, image, views } = event;

  return (
    <div>
      <div className="card w-64 bg-base-100 shadow-sm image-full mt-2 h-64 py-2 mb-2 mx-auto">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <div className="flex items-center gap-5">
              <Link to={`event/${id}`}>
                <button className="btn bg-pinkdark1 text-white border-none hover:text-black hover:bg-pinkbright1">
                  See Packages
                </button>
              </Link>
              <div className="flex gap-1 items-center font-bold text-dark2">
                <h2 className="text-black font-bold">{views}</h2>
                <h2>
                  <FaEye className="text-lg  text-orange"></FaEye>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
