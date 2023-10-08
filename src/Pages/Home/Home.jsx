import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Header/Banner";
import Navbar from "../Shared/Header/Navbar";
import RightSide from "./RightSide";
import ServiceCard from "./ServiceCard/ServiceCard";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const Home = () => {
    const services = useLoaderData();
    console.log(services);

    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('/eventdata.json')
            .then(res => res.json())
            .then(data => setEvent(data));
            
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
               <div id="service"className="grid grid-cols-3">
                    <div className="col-span-2">
                    <h2 className="text-3xl py-8 font-bold text-pinkdark1 text-center">Services</h2>

                    {
                        services.map((service) => <ServiceCard services = {service} key={service.id}></ServiceCard>)
                    }


                    </div>
    
                    <div className="py-8">
                    <h2 className="mb-8 text-3xl font-bold text-pinkdark1 text-center">SEE ALL EVENTS</h2>
                        {/* <RightSide></RightSide> */}

                        {
                            event.map((e) => <RightSide event={e} key={e.id}></RightSide>)
                        }
                    </div>
               </div>
            </div>

        </div>
    );
};

export default Home;