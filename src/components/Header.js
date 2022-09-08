import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHeart, AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <section className="navBar">
        <NavLink to={"/"} className="styledLink">
          <AiFillHome />
          <h4>Home</h4>
        </NavLink>

        <span className="navBarTitle">Welcome to Estatery</span>

        <NavLink to={"/favourites"} className="styledLink">
          <AiFillHeart />
          <h4>Favourites</h4>
        </NavLink>
      </section>
    </>
  );
};

export default Header;
