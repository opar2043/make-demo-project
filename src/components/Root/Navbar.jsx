
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink>
        <li>
          <a href="">Home</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a href="#about">About</a>
        </li>
      </NavLink>
      <NavLink to="#company"></NavLink>
      <NavLink>
        <li>
          <a href="#service">Service</a>
        </li>
      </NavLink>
      <li>
        <a href="#company">Company</a>
      </li>
    </>
  );

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
          <p className="btn btn-ghost text-xl md:text-3xl font-bold">IT Maison</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">Log In </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
