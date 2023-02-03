import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">

        <li>
          <NavLink
            activeClassName="bg-active text-white"
            exact
            to="/"
            className="h-10 flex items-center font-sm font-semibold text-link hover:text-white  px-4 rounded gap-x-4"
          >
            <AiOutlineHome size={24} />
            Ana Sayfa
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to="/search"
            className="h-10 flex items-center font-sm font-semibold text-link hover:text-white rounded px-4 gap-x-4"
          >
            <AiOutlineSearch size={24} />
            Ara
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to="/collection"
            className="h-10 flex items-center font-sm font-semibold text-link hover:text-white rounded px-4 gap-x-4"
          >
            <BsFillCollectionFill size={24} />
            Kitaplığın
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Menu;
