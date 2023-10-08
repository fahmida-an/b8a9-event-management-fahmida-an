import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const Register = ({children}) => {
    const [registerError, setRegisterError] = useState('');

    const {createUserAccount, createAccountwithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegisterForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photourl = form.get('photourl')
        const email = form.get('email')
        const password = form.get('password')

        console.log(name, email, photourl, password);

        if(password.length < 6){
            setRegisterError('Error: Password should be 6 characters long');
            return;
        }

        else if(!/^[!@#$%^&*()[\]{}|\\;:'"<>,.?/-_+=]+$/.test(password)) {
            setRegisterError('Error: Password should contain a special character.');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError(' Error: Password should contain a uppercase character.')
            return;
        }
       
        

        createUserAccount(email, password)
        .then(result => console.log(result.user),
        swal("Registration", "User registration successfull", "success"),
        navigate(location?.state ? location.state : '/')
        )
        .catch(error => {
            console.error(error)
            setRegisterError(error.message);
        });
        
    }

    const handleGoogleLogin = () =>{
      createAccountwithGoogle()
      .then(result =>{
        console.log(result.user);
        navigate('/')
      })
      .catch(error =>{
        console.error(error)
      })
     }



    return (
        <div>
        <Navbar></Navbar>

        
         <div className="card flex-shrink-0 mt-1 min-h-screen max-w-xl mx-auto shadow-2xl bg-base-100 rounded-t-lg">
         <h2 className="py-5 text-3xl text-center bg-pinkdark1 text-white font-bold rounded-t-xl">Register Here</h2>
           <form onSubmit={handleRegisterForm} className="card-body">
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
             <div className="form-control mt-3">
               <button className="btn bg-pinkdark1 text-white ">Register</button>
             </div>
           </form>

              <button onClick={handleGoogleLogin} className='mb-1'>Login with <span className='text-pinkdark1'>Google</span></button>
           {
                registerError && <p className='text-red text-center mb-2'>{registerError}</p>
            }
           <p className="text-center pb-8">Already have an account? <Link className="text-pinkdark1" to={'/login'}>Login here</Link></p>
         </div>
       </div>

  
    );
};

export default Register;