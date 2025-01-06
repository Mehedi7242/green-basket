import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from './../provider/AuthProvider';
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully logged out",
          text: "Goodbye!",
          icon: "success",
        });
        navigate("/signIn");
      })
      .catch((error) => console.log("Log out failed", error));
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100 shadow-md">
          {/* Hamburger menu for mobile */}
          <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* Brand name */}
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Green Basket</a>
          </div>
          {/* User controls */}
          <div className="flex-none">
            <div>
              <Link to="/cartPage" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaShoppingCart size={24} />
                  <span className="badge badge-sm indicator-item">3</span>
                </div>
              </Link>
            </div>
            {/* Profile Dropdown */}
            <div
              className={`dropdown dropdown-end ${
                activeDropdown === "profile" ? "dropdown-open" : ""
              }`}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onClick={() => toggleDropdown("profile")}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                onClick={closeDropdown}
              >
                {user ? (
                  <>
                    <li>
                      <Link to="/userProfilePage" className="justify-between">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link to="/order" className="justify-between">
                        Orders
                        <span className="badge">New</span>
                      </Link>
                    </li>
          
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                    <li><h1>{user?.email}</h1></li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">Sign In</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                    
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar menu */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay lg:hidden"></label>
        <ul className="menu p-4 w-64 bg-base-200 text-base-content">
          <li className="text-lg font-semibold mb-2">Menu</li>
          <li>
            <NavLink to="/" onClick={closeDrawer}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order" onClick={closeDrawer}>
              Order
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/aboutUs" onClick={closeDrawer}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" onClick={closeDrawer}>
              Contact
            </NavLink>
          </li>

          {
            user ?
            
            <>
            <li>
              <NavLink to="/ContactUsAdmin" onClick={closeDrawer}>
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/addVegetableProduct" onClick={closeDrawer}>
                AddVegetableProduct
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={closeDrawer}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard" onClick={closeDrawer}>
                Admin Dashboard
              </NavLink>
            </li>  
          </>
          :
          <li>
            <NavLink to="/login" onClick={closeDrawer}>
              Admin Dashboard
          </NavLink>
          </li>
          } 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;