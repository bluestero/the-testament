import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-indigo-600 flex bg-opacity-70 bg-gradient-to-tr">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-yellow-300"
            className="inflex-flex items-center py-6 px-3 mr-4 hover:text-pink-400 text-white text-5xl font-bold cursive tracking-widest"
          >
            Ahmed
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-indigo-300 bg-opacity-30"
            className="inflex-flex items-center py-3 px-3 my-6 rounded git hover:text-pink-400 text-white text-xl"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-indigo-300 bg-opacity-30"
            className="inflex-flex items-center py-3 px-3 my-6 rounded hover:text-pink-400 text-white text-xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-indigo-300 bg-opacity-30"
            className="inflex-flex items-center py-3 px-3 my-6 rounded hover:text-pink-400 text-white text-xl"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 flex">
          <SocialIcon
            url="https://linkedin.com/in/ahmedkhatib99/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            bgColor="currentColor"
          />
          <SocialIcon
            url="https://github.com/bluestero"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            bgColor="currentColor"
          />
          <SocialIcon
            url="https://instagram.com/ahmedabadguyyy"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            bgColor="currentColor"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
