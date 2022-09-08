import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { AppContext } from "../context";
import Modal from "./Modal";

const SearchBar = () => {
  const { isModalOpen, modalContent, EmptyFields, InvalidValues } =
    React.useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    location: "",
    availableFrom: "",
    minPrice: "",
    maxPrice: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      inputs.location &&
      inputs.minPrice &&
      inputs.maxPrice &&
      inputs.availableFrom &&
      inputs.propertyType
    ) {
      if (inputs.minPrice < inputs.maxPrice) {
        const params = inputs;
        navigate({
          pathname: "/search",
          search: `?${createSearchParams(params)}`,
        });

        setInputs({
          location: "",
          availableFrom: "",
          minPrice: "",
          maxPrice: "",
          propertyType: "",
        });
      } else {
        EmptyFields();
      }
    } else {
      InvalidValues();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        {/* <section>Search Property to Rent</section> */}
        <section>
          {isModalOpen && <Modal modalContent={modalContent} />}
        </section>
        <section className="form-control">
          <div>
            <label htmlFor="location">location</label>
            <input
              id="location"
              type="text"
              name="location"
              value={inputs.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="availableFrom">When</label>
            <input
              id="availableFrom"
              type="date"
              name="availableFrom"
              value={inputs.availableFrom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="minPrice">Min Price</label>
            <select
              id="minPrice"
              placeholder="MIN"
              name="minPrice"
              value={inputs.minPrice}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                MIN
              </option>
              <option value="1000">1000</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
            </select>
          </div>
          <div>
            <label htmlFor="minPrice">Max Price</label>
            <select
              id="maxPrice"
              placeholder="MAX"
              name="maxPrice"
              value={inputs.maxPrice}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                MAX
              </option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
            </select>
          </div>
          <div>
            <label htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              placeholder="Select"
              name="propertyType"
              value={inputs.propertyType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="House">House</option>
              <option value="Bungalows">Bungalows</option>
              <option value="Flat">Flat</option>\
              <option value="Serviced-Apartment">Serviced-Apartment</option>
            </select>
          </div>

          <button type="submit">
            <FiSearch />
            <h5>Search</h5>
          </button>
        </section>
      </form>
    </>
  );
};

export default SearchBar;
