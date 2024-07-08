import React, { useState, useEffect } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Page from "../Pagination/Page";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import Footer from "../Footer/Footer";
import { RestaurantData } from "../../utils/RestaurantAPI";
import { useNavigate } from "react-router-dom";
import "./ResList.scss";

const ResList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const restaurantsData = await RestaurantData();
      const restaurants =
        restaurantsData?.data?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  return (
    <>
      <div className="res-card-main">
        {currentRestaurants.map((res) => (
          <div className="res-card-div" key={res?.info?.id} onClick={() => handleOpenRestaurantMenu(res?.info?.id)}>
            <div className="res-card">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`}
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
                    {res?.info?.cuisines.join(", ").slice(0, 30)}...
                  </h3>
                </div>
                <div className="price-div">
                  <p>{res?.info?.costForTwo}</p>
                </div>
              </div>
              <div className="place-div">
                <p>
                  <AddLocationAltTwoToneIcon />
                  {res?.info?.areaName}
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
