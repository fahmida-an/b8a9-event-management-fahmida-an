import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import user from "../../../assets/user.png";
import { HashLink } from "react-router-hash-link";
const Navbar = ({ children }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li className="mr-3 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-3  hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <HashLink
          to="/#service"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : " "
          }
        >
          Services
        </HashLink>
      </li>

      <li className="mr-3 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
        <HashLink
          to="/#aboutus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
          }
        >
          About Us
        </HashLink>

      </li>
      {user && (
        <li className="mr-1 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
          <HashLink
            to="/#events"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
            }
          >
            Events
          </HashLink>
        </li>

      )}
      {user && (
        <li className="mr-4 hover:bg-pinkdark1 hover:text-white rounded-md text-pinkdark1">
          <NavLink
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-pinkdark1 text-white" : ""
            }
          >
            Booked for
          </NavLink>
        </li>

      )}
    </>
  );

  return (
    <div>
      <div className="navbar mb-2 shadow-lg px-5 h-32 mx-auto ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <div className=" ml-3 md:ml-10">
            <h2 className="uppercase tracking-widest md:text-xl lg:text-2xl font-bold text-pinkdark1">
              Celebrations
            </h2>

            <Link to="/">
              <div className="flex items-center justify-center ">
                <FaHeart className="text-pinkbright1" />
                <p className="text-md lg:text-lg text-center font-bold">withDreamTeam</p>
                <FaHeart className="text-pinkbright1" />
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ml-56">
        <ul className="menu menu-horizontal shadow-none  px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end lg:flex ">
          
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-72 md:72 w-64"
              >
                <li>
                
                 <button className="btn btn-sm btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full">
                  {user.displayName}
                </button>
            
                </li>
                <li>
                  <button className="btn btn-sm btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full">
                    {user.email}
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm  btn-ghost text-pinkdark1 hover:bg-pinkdark1 text-sm mb-1 w-full"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-pinkdark1 text-white rounded-lg p-2 "
                  : " hover:bg-pinkdark1 hover:text-black rounded-lg p-2 text-pinkdark1"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
