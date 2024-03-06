import React, { useEffect, useState, useContext } from "react";
import "./navbar.css";
import logo from "/logo.png";
import cart from "/cart.png";
import search from "/search.png";
import call from "/call.png";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` ${
        isSticky
          ? " bg-red-50 fixed top-0 left-0 right-0 transition-all duration-1000 ease-in-out "
          : ""
      }`}
    >
      <header>
        <div className="bg-red-50  px-16 py-8 shadow-lg  ">
          <div className="flex flex-row gap-9 mr-15">
            <span className=" text-4xl flex flex-row gap-2 items-center text-black">
              <a className="size-12 pt-2" href="/">
                <img src={logo} alt="yo" />
              </a>
              <h1>
                <a href="/">Foodle</a>
              </h1>
            </span>
            <div className="flex flex-row justify-center w-full gap-28 items-center text-stone-500 text-lg">
              <p className="text-black  ">
                <a href="/">HOME</a>
              </p>
              <button>
                <a className="hover:text-black" href="/menu">Menu</a>
              </button>
              <p className="hover:text-black  ">Services</p>
              <p className="hover:text-black">Offers</p>
            </div>
            <div className="flex gap-7 items-center justify-center text-stone-500 ">
              <a href="/">
                <img className={` ${!user ? " w-20 " : "w-14"}`} src={search} alt="yo" />
              </a>
              <a href="">
                <img
                  className={` ${!user ? " w-16 " : "w-10"}`}
                  src={cart}
                  alt="yo"
                />
              </a>
              <div className="">
                {user ? (
                  <Profile user={user} />
                )
                 : (
                  <button
                    className="rounded-full px-3 py-1 border-2 border-red-500 flex items-center justify-center "
                    onClick={() =>
                      document.getElementById("my_modal").showModal()
                    }
                  >
                    <FaUser className="size-3 " />
                    <p className="px-1 text-stone-500">Login</p>
                  </button>
                )
                }
              </div>
            </div>
            <Modal />
          </div>
        </div>
      </header>
      <footer></footer>
    </div>
  );
};

export default Navbar;
