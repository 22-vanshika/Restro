import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div>
      <div className="bg-slate-50 rounded-3xl flex flex-col justify-center items-center h-64 w-60 shadow-lg  shadow-red-100 ">
                    <div className=" rounded-full h-3/5 pt-5">
                    {/* <Link to={`/regular/${item.id}`}> */}
                        <figure>
                        <img
                            src={item.image}
                            alt=""
                            className=" rounded-full w-24 h-24 hover:border-2 border-red-500 hover:scale-125 transition-all duration-200"
                        />
                        </figure>
                    {/* </Link> */}
                    </div>

        <div className="flex items-center text-center text-lg text-gray-700 h-1/5  px-5">
          <h2 >{item.name}</h2>
          {/* <p className="text-stone-500">{item.recipe}</p> */}
        </div>
                        <div className="flex items-center gap-7  py-5">
                        <div className=" text-gray-500 text-lg">
                            <h5>
                            <span>₹ </span>
                            {item.price}
                            </h5>
                        </div>
                        <div className="text-red-500 border-2 border-gray-700 p-2 rounded-3xl text-xs hover:scale-125 transition-all duration-200">
                            <button>Order Now &gt; </button>
                        </div>
                        </div>
      </div>
    </div>
  );
};

export default Card;
