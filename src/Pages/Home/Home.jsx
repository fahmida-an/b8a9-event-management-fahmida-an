import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Header/Banner";
import Navbar from "../Shared/Header/Navbar";
import RightSide from "./RightSide";
import ServiceCard from "./ServiceCard/ServiceCard";

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
               <div className="grid grid-cols-3">
                    <div className="col-span-2">
                    <h2 className="text-3xl py-8 font-bold text-pinkdark1 text-center">Services</h2>

                    {
                        services.map((service) => <ServiceCard services = {service} key={service.id}></ServiceCard>)
                    }


                    </div>
    
                    <div className="py-8">
                        <RightSide></RightSide>
                    </div>
               </div>
            </div>

        </div>
    );
};

export default Home;