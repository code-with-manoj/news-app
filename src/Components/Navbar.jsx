import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex  p-5 items-center">
          <a href="/" class="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="" className="w-20" />
            <span class="ml-3 text-xl">Brew News</span>
          </a>

          <button class="inline-flex ml-auto items-center text-white bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-900 rounded text-base">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
