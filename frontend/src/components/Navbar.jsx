import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { BsBalloonHeart } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";

{/*import Avatar images*/}
import avatar from "../assets/avatar.png"
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]
export const Navbar = () => {

   const [isDropdownOpen,setIsDropdownOpen]= useState(false)
  
  const {currentUser,logout} =useAuth();
  const handleLogOut = () => {
    logout()
  }

  const token = localStorage.getItem('token');

  const cartItems = useSelector(state => state.cart.cartItems);
  console.log(cartItems)
  return (
    <header className="max-w-screen-2xl mx-auto px-6 py-6">
      <nav className="flex justify-between items-center">
        {/*left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <AiOutlineBars className="size-6" />
          </Link>

          <div className="relative sm:w-72 w-40 space-x-2">
            <FiSearch className="absolute inline-block left-1.5 inset-y-2" />

            <input
              type="text"
              placeholder="Search Here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/*right side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {
              currentUser ? <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="cursor-pointer">
                  <img src ={avatar} alt="Boken Image" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
                </button>
                 {/*show dropdown*/}

                 {
                    isDropdownOpen && (
                      <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-md z-40">
                        <ul className="py-2">
                          {
                            navigation.map((item) =>(
                              <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                {item.name}
                                </Link>
                              </li>
                            ))
                          }
                          <li>
                            <button onClick={handleLogOut} className="block px-4 py-2 text-sm hover:bg-gray-100 w-full">Logout</button>
                          </li>
                        </ul>
                      </div>
                    )
                 }
                </>:token ? <Link to="/dashboard" className='border-b-2 border-primary'>Dashboard</Link> : (
                                <Link to="/login"> <LiaUserGraduateSolid className="size-6" to="/login"/></Link>)
            }
          </div>
          <button>
            <BsBalloonHeart className="size-9" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-lg"
          >
            <MdOutlineShoppingCart className="size-6" />
            {
                cartItems.length > 0 ? <span calssName='text-sm font-semibold sm-ml-1'>{cartItems.length}</span> :  <span className="text-sm font-semibold sm:ml-1">Empty cart</span>
            }
           
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
