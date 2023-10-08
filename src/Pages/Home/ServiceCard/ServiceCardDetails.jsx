import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";


const ServiceCardDetails = () => {
    const [detailCard, setDetailCard] = useState({});

    const details = useLoaderData();
    const {id} = useParams();
    const idt = parseInt(id);
    console.log(id);

    useEffect(() =>{
        const eventDetail = details.find((details) => details.id === idt)
        setDetailCard(eventDetail);
    },[idt, details])


    return (
        <div>
           <Navbar></Navbar>
           <div>
            <h2>{detailCard.title}</h2>
           </div>
        </div>
    );
};

export default ServiceCardDetails;