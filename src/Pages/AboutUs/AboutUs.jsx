import profile1 from "../../assets/profile1.jpg";
import profie2 from "../../assets/profie2.jpg";
import profile2 from "../../assets/profile2.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div>
      <div className="lg:max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2 mb-14 ">
        <div className="card w-72 mx-auto bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img className="w-50 h-50 rounded-full" src={profile1} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fahmida Khan</h2>
            <p>Event Technology Specialists</p>
            <div className="card-actions">
              <button className="btn bg-pinkdark1 hover:bg-pinkbright1 hover:text-black">
                <BiSolidPhoneCall className="text-white text-xl"></BiSolidPhoneCall>
                <p className="text-white">+8801700000123</p>
              </button>
            </div>
          </div>
        </div>

        <div className="card mx-auto w-72 bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img className="w-50 h-50 rounded-full" src={profie2} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Yuki Dan</h2>
            <p>Event Planner</p>
            <div className="card-actions">
              <button className="btn bg-pinkdark1 hover:bg-pinkbright1 hover:text-black">
                <BiSolidPhoneCall className="text-white text-xl"></BiSolidPhoneCall>
                <p className="text-white">+8801700000123</p>
              </button>
            </div>
          </div>
        </div>

        <div className="card mx-auto w-72 bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img className="w-50 h-50 rounded-full" src={profile2} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Jahan Khan</h2>
            <p>Event Manager</p>
            <div className="card-actions">
              <button className="btn bg-pinkdark1 hover:bg-pinkbright1 hover:text-black">
                <BiSolidPhoneCall className="text-white text-xl"></BiSolidPhoneCall>
                <p className="text-white">+8801700000123</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
