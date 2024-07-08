import React, { useState, useEffect } from "react";
import Veg from "../../Assets/vegetarian.png";
import NonVeg from "../../Assets/non-vegetarian.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { data } from "../../utils/RestroData";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./RestaurantMenu.scss";

const RestaurantMenu = () => {
  const [MenuList, setMenuList] = useState([]);
  const { id } = useParams();

  const Restaurants = data.find((restaurant) => restaurant.id === parseInt(id));

  const getMenuData = () => {
    if (Restaurants) {
      setMenuList(Restaurants.Menu.map((menu) => ({ ...menu })));
    }
  };

  useEffect(() => {
    getMenuData();
  });

  return (
    <>
      <div className="menu-card">
        <h4 className="res-heading">{Restaurants.RestaurantName}</h4>
        {MenuList.map((item) => (
          <div className="menu-card-info" key={item.Mid}>
            <div className="menu-card-img">
              <img src={item.ItemImg} alt="" />
            </div>
            <div className="menu-card-name">
              <div className="type-icons">
                <h3>{item.ItemName}</h3>
                {item.type === 'veg' ? (<div>
                  <img src={Veg} alt="Veg-icon" />
                </div>) :
                (<div>
                  <img src={NonVeg} alt="Veg-icon" />
                </div>)}
              </div>
              <p>{item.description.slice(0, 100)}</p>
              <div className="menu-card-price">
                <p>Price : ₹{item.Price}</p>
                <button className="btn">Add</button>
                <div className="btn">
                  <RemoveIcon className="minus-btn" />
                  <div className="ItemsNumber">{item.quantity}</div>
                  <AddIcon className="add-btn" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RestaurantMenu;
