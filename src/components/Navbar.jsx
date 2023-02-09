import React from "react";
import  Navigation from "./Navbar/Navigation";
import Account from "./Navbar/Account";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-6">
      <Navigation />
      <Account />
    </div>
  );
};

export default Navbar;
