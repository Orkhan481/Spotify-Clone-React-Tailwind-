import React from "react";
import  Navigation from "./Navbar/Navigation";
import Account from "./Navbar/Account";
import { useMatch} from "react-router-dom";
import NavSearch from "./Navbar/NavSearch";

const Navbar = () => {
const searchRoute = useMatch("/search")

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <Navigation />
      {
        searchRoute && <NavSearch />
      }
      <Account />
    </div>
  );
};

export default Navbar;
