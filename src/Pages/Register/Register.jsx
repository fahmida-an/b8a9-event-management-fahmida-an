import { Link } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';

const Register = () => {
    return (
        <div>
        <Navbar></Navbar>

        <div className="hero min-h-screen">
         <div className="card flex-shrink-0 -mt-24 h-[600px] w-1/2 shadow-2xl bg-base-100 rounded-t-lg">
         <h2 className="py-5 text-3xl text-center bg-pinkdark1 text-white font-bold rounded-t-xl">Register Here</h2>
           <form className="card-body">
           <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered  text-dark3 text-sm"
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-xl">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                 placeholder="Your email.."
                 className="input input-bordered text-dark3 text-sm"
                 required
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-xl">Password</span>
               </label>
               <input
                 type="password"
                 name="password"
                 placeholder="Your password.."
                 className="input input-bordered text-dark3 text-sm"
                 required
               />

               
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-xl">Photo</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  placeholder="your Image"
                  className="input input-bordered  text-dark3 text-sm"
                  required
                />
              </div>
             </div>
             <div className="form-control mt-6">
               <button className="btn bg-pinkdark1 text-white ">Register</button>
             </div>
           </form>
           <p className="text-center pb-8">Already have an account? <Link className="text-pinkdark1" to={'/login'}>Login here</Link></p>
         </div>
       </div>

    </div>
    );
};

export default Register;