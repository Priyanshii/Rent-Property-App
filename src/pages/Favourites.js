import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { AppContext } from "../context";

const Favourites = () => {
  const { favouritesData } = React.useContext(AppContext);
  console.log(favouritesData);
  return (
    <div className="container">
      {favouritesData.map((item) => {
        return (
          <div key={item.id}>
            <PropertyCard {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
