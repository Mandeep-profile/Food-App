import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch } from "react-redux";
import { addItems } from "../../ReduxToolKit/cartSlice";
import "./MenuItems.scss";

const MenuItems = ({ data, showItems, setShowIndex }) => {
  const menuItems = data?.itemCards;

  const dispatch = useDispatch()

  const handleMenuItems = () => {
    setShowIndex();
  };

  return (
    <div className="menu-main-container" onClick={handleMenuItems}>
      <div className="menu-header">
        <span className="item-title">
          {data.title} ({menuItems.length})
        </span>
        <span className="item-arrow">
          {!showItems ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </span>
      </div>
      {showItems && (
        <div className="menu-body">
          {menuItems.map((item) => {
            return (
              <div className="menu-container">
                <div className="menu-img">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                    alt="item-img"
                    className="item-img"
                  />
                  <button className="item-btn" onClick={() => dispatch(addItems())}>
                    Add
                  </button>
                </div>
                <div className="menu-description">
                  <h3 className="item-name">{item.card.info.name}</h3>
                  <p className="item-price">
                    ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </p>
                  <p className="item-description">
                    {item.card.info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
