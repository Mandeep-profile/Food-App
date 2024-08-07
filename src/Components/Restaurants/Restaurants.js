import React, { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Page from "../Pagination/Page";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Restaurants.scss";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurantList from "./useRestaurantList";

const Restaurants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {listOfRestaurants, loading, setListOfRestaurants} = useRestaurantList()
  const itemsPerPage = 9;

  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRestaurants = listOfRestaurants.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenRestaurantMenu = (id) => {
    navigate(`/restaurant-menu/${id}`);
  };

  const handleTopRestaurant = () => {
    const filteredRestaurant = listOfRestaurants.filter(
      (res) => res?.info?.avgRatingString >= 4.2
    );
    setListOfRestaurants(filteredRestaurant);
  };

  return (
    <>
      <div>
        <button className="top-rated" onClick={handleTopRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      {loading === true ? (
        <Shimmer />
      ) : (
        <div className="res-card-main">
          {currentRestaurants?.map((res) => (
            <div
              className="res-card-div"
              key={res?.info?.id}
              onClick={() => handleOpenRestaurantMenu(res?.info?.id)}
            >
              <div className="res-card">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    res?.info?.cloudinaryImageId
                  }
                  alt="RestaurantImg"
                  className="res-img"
                />
                <div className="top-div">
                  <div>
                    <h3 className="res-name">{res?.info?.name}</h3>
                  </div>
                  <div className="rating-div">
                    <p>
                      {res?.info?.avgRatingString}
                      <StarBorderPurple500Icon className="res-star" />
                    </p>
                  </div>
                </div>
                <div className="center-div">
                  <div>
                    <h3 className="cousine-name">
                      {res?.info?.cuisines.join(", ")?.slice(0, 30)}...
                    </h3>
                  </div>
                  <div className="price-div">
                    <p>{res?.info?.costForTwo}</p>
                  </div>
                </div>
                <div className="place-div">
                  <p>
                    <AddLocationAltTwoToneIcon />
                    {res?.info?.locality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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

export default Restaurants;
