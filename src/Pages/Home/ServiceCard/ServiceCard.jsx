import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({ services }) => {
  const { title, id, category, details, image, rating } = services;

  const stars = [];
  for(let i = 1; i<=5; i++){
    // const starClassName = i <= rating ? <FaStar></FaStar> : '';
    const isFilled = i <= rating;
    stars.push(
      <span key={i}>
      {isFilled ? <FaStar className="text-orange" /> : <FaStar />}
    </span>
    );

  }
  return (
    <div>
      <div className="relative flex w-80 mx-auto md:w-72 lg:w-full lg:max-w-[48rem] flex-col lg:flex-row rounded-xl bg-white bg-clip-border shadow-md mt-4">
        <div className="relative m-0 w-72 md:w-60 mx-auto lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-lg lg:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {title}
          </p>


       <div className="flex items-center">
       <div className="mr-20 lg:mr-40">
        <Link to={`/service/${id}`} className="inline-block" href="#">
            <button className=" btn flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle  text-xs font-bold uppercase transition-all hover:bg-pinkbright1 hover:text-black bg-pinkdark1 text-white">
             View Details
            </button>
          </Link>

        </div>

        <div>
          <p className="text-sm mb-1 text-dark2 font-semibold text-center">Reviews</p>
        <div className="flex">{stars}</div>
        </div>
       </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
