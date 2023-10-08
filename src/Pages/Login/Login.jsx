
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = ({children}) => {
const {logInUser} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const handleLoginForm = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    logInUser(email, password)
    .then(result => 
      console.log(result),
      navigate( location?.state ? location.state : '/')
    
    )
    .catch(error => console.error(error))

}

    
    return ( 
       <div>
         <Navbar></Navbar>

         <div className="hero min-h-screen">
          <div className="card flex-shrink-0 -mt-24 h-[560px] w-1/2 shadow-2xl bg-base-100 rounded-t-lg">
          <h2 className="py-5 text-3xl text-center bg-pinkdark1 text-white font-bold rounded-t-xl">Login Here</h2>
            <form onSubmit={handleLoginForm} className="card-body">
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
                <label className="label mt-2">
                  <a href="#" className="label-text-alt text-pinkdark1 link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pinkdark1 text-white ">Login</button>
              </div>
            </form>
            <p className="text-center pb-8">Do not have an account? <Link className="text-pinkdark1" to={'/register'}>Register here</Link></p>
          </div>
        </div>

     </div>
        
       
       
    );
};

export default Login;