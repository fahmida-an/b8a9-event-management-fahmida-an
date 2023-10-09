import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Header/Banner";
import Navbar from "../Shared/Header/Navbar";
import RightSide from "./RightSide";
import ServiceCard from "./ServiceCard/ServiceCard";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("/eventdata.json")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <div id="service" className="grid cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl py-12 font-bold text-pinkdark1 text-center uppercase">
              Services
            </h2>

            {services.map((service) => (
              <ServiceCard services={service} key={service.id}></ServiceCard>
            ))}
          </div>

          <div className="">
            <h2 className=" text-3xl font-bold text-pinkdark1 text-center py-12">
              SEE ALL EVENTS
            </h2>
            {/* <RightSide></RightSide> */}

            {event.map((e) => (
              <RightSide event={e} key={e.id}></RightSide>
            ))}
          </div>
        </div>
      </div>

      <div>
       <div id="aboutus">
       <h2 className="py-14 font-bold text-2xl lg:text-3xl text-pinkdark1 text-center">
          Meet Our Team Section
        </h2>
        <AboutUs></AboutUs>
       </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
