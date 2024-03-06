import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import SampleIcon from "/SampleIcon.png"

const Profile = ({ user }) => {
  const {logOut} = useContext(AuthContext)
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      <div className="drawer drawer-end z-50  ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />


        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4" 
            // className="drawer-button btn btn-ghost btn-circle avatar w-6 h-6"
          >
            <div className=" border-2 border-red-600  rounded-full p-1 ml-2">
              {
                user.photoURL ? <img
                // alt="Pic"
                src={user.photoURL}
              /> : <img className="w-9  rounded-full " alt="" src={SampleIcon}/>
              }
            </div>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu pt-12 px-4 w-80 min-h-full bg-red-50   gap-3 text-lg text-stone-500">
            {/* Sidebar content here */}
            <li className="hover:text-black">
              <a href="/update-profile">Profile</a>
            </li>
            <li className="hover:text-black" >
              <a>Order</a>
            </li>
            <li className="hover:text-black">
              <a>Setting</a>
            </li>
            <li className="hover:text-black">
              <a
               onClick={handleLogout}
              >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile