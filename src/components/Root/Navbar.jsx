import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
   
        <li>
          <a href="">Home</a>
        </li>
      
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#company">Company</a>
      </li>
      <li>
        <a href="#service">Service</a>
      </li>
      <li>
        <a href="#project">Projects</a>
      </li>
      <li>
        <a href="#order">Order</a>
      </li>
      <li>
        <a href="#review">Review</a>
      </li>
    </>
  );

  const { handleGoogle, user, setUser, handleLogout } = useContext(AuthContext);

  function logIn() {
    handleGoogle()
      .then((result) => {
        const userG = result.user;
        setUser(userG);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  function logout() {}

  return (
    <div>
      <div className="navbar fixed top-0 z-50  bg-gradient-to-r from-cyan-400/50 to-blue-500/40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content font-semibold bg-base-100 to-blue-500/40 rounded-box z-[1] mt-3 w-52 h-[100vh] p-2 shadow text-xl"
            >
              {links}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl md:text-3xl font-bold">
            IT Maison
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-sm px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={() => logout()}
              className="btn hover:shadow-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <FaSignOutAlt></FaSignOutAlt> Logout{" "}
            </button>
          ) : (
            <button
              onClick={() => logIn()}
              className="btn hover:shadow-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <FaGoogle></FaGoogle> Google Login{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
