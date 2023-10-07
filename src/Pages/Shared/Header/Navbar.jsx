import { Link, NavLink } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-4 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-4  hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="mr-4 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          Contacts
        </NavLink>
      </li>
      <li className="mr-4 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar mb-2 shadow-lg px-5 h-32 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pinkdark1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
         
         <div>
         <h2 className="uppercase tracking-widest text-2xl font-bold text-pinkdark1">Celebrations</h2>

         <Link to="/">
         <div className="flex items-center justify-center ">
         <FaHeart className="text-pinkbright1"/>
         <p className="text-lg text-center font-bold">withDreamTeam</p>
         <FaHeart className="text-pinkbright1"/>
         </div>
         </Link>

         </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal shadow-none  px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
