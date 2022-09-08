import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context";

const SearchedProperties = () => {
  const { propertyData } = React.useContext(AppContext);

  let [searchParams, setSearchParams] = useSearchParams();

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const location = searchParams.get("location");
  const availableFrom = searchParams.get("availableFrom");
  const propertyType = searchParams.get("propertyType");
  console.log(availableFrom);

  return (
    <div className="container">
      {propertyData
        .filter(
          (item) =>
            item.location === location &&
            item.price >= minPrice &&
            item.price < maxPrice &&
            item.property_type === propertyType &&
            item.available_from <= availableFrom
        )
        .map((item) => {
          return (
            <div key={item.id}>
              <PropertyCard {...item} />
            </div>
          );
        })}
    </div>
  );
};

export default SearchedProperties;
