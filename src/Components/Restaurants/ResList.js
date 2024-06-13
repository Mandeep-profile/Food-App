import React, { useState, useEffect } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { data } from "../../utils/RestroData";
import Page from "../Pagination/Page";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import Footer from '../Footer/Footer'
import "./ResList.scss";

const ResList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setListOfRestaurants(data);
  };

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRestaurants = listOfRestaurants.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="res-card-main">
        {currentRestaurants.map((res) => (
          <div className="res-card-div" key={res.id}>
            <div className="res-card">
              <img
                src={res.RestaurantImg}
                alt="RestaurantImg"
                className="res-img"
              />
              <div className="top-div">
                <div>
                  <h3 className="res-name">
                    {res.RestaurantName.slice(0, 25)}
                  </h3>
                </div>
                <div className="rating-div">
                  <p>
                    {res.RestaurantRating}{" "}
                    <StarBorderPurple500Icon className="res-star" />
                  </p>
                </div>
              </div>
              <div className="center-div">
                <div>
                  <h3 className="cousine-name">
                    {res.RestaurantCousines.slice(0, 30)}...
                  </h3>
                </div>
                <div className="price-div">
                  <p>{res.RestaurantPrice}</p>
                </div>
              </div>
              <div className="place-div">
                <p>
                  <AddLocationAltTwoToneIcon />
                  {res.RestaurantPlace}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Page
        itemsPerPage={itemsPerPage}
        totalItems={listOfRestaurants.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
};

export default ResList;
