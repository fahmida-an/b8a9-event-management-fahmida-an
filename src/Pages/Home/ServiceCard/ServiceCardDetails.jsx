import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";

const ServiceCardDetails = () => {
  const [detailCard, setDetailCard] = useState({});

  const details = useLoaderData();
  const { id } = useParams();
  const idt = parseInt(id);
  console.log(id);

  useEffect(() => {
    const eventDetail = details.find((details) => details.id === idt);
    setDetailCard(eventDetail);
  }, [idt, details]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div className="lg:col-span-2">
          <img
            className=" max-w-xl mx-auto h-[300] lg:max-w-4xl lg:mx-auto lg:h-[400px] mb-10"
            src={detailCard.image}
            alt=""
          />
          <h1 className="text-3xl text-center font-bold mx-auto">
            {detailCard.category}
          </h1>
          <p className="mt-3 text-xl text-center">{detailCard.title}</p>
        </div>
        <div>
          <p className="w-80 mt-4 lg:mt-0 mx-auto text-justify text-dark2 text-md">{detailCard.details}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceCardDetails;
