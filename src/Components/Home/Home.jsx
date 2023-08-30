import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const authUser = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(authUser);
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          Secure User Authentication
            <strong className="font-extrabold text-red-700 sm:block">
            Seamlessly Manage Access
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Streamline your application's user authentication and access management
            using the power of Django, DRF, React, and JWT tokens
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/register" 
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            
            >
              Register
            </Link>

            <Link to="/login" 
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
