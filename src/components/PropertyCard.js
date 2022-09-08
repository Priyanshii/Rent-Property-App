import React from "react";
import { AppContext } from "../context";

const Property = (props) => {
  const { AddToFavourites, RemoveFromFavorites } = React.useContext(AppContext);
  const {
    id,
    location,
    price,
    available_from,
    property_type,
    image,
    favourite,
  } = props;

  const payload = {
    id,
    location,
    price,
    available_from,
    property_type,
    image,
    favourite: !favourite,
  };

  return (
    <div className="mainCard">
      <section className="imageSection">
        <img src={image} alt="" />
      </section>
      <section className="infoSection">
        <div>
          <h4>Location</h4>
          <span>{location}</span>
        </div>
        <div>
          <h4>Price</h4>
          <span>{price}</span>
        </div>
        <div>
          <h4>Available From</h4>
          <span>{available_from}</span>
        </div>
        <div>
          <h4>Property Type</h4>
          <span>{property_type}</span>
        </div>
        <button
          type="button"
          className="data-card-button"
          onClick={() => {
            if (!favourite) {
              AddToFavourites(payload);
            } else {
              RemoveFromFavorites(id);
            }
          }}
        >
          {favourite ? "Remove from Favourites" : "Add to favorites"}
        </button>
      </section>
    </div>
  );
};

export default Property;
