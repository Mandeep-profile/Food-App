import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../../ReduxToolKit/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./MenuItems.scss";

const MenuItems = ({ data, showItems, setShowIndex }) => {
  const menuItems = data?.itemCards;

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleMenuItems = () => {
    setShowIndex();
  };

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItems = (item) => {
    dispatch(removeItem(item))
  }

  const getItemCount = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
    return item ? item.quantity : 0;
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
            const itemCount = getItemCount(item.card.info.id);
            return (
              <div className="menu-container" key={item.card.info.id}>
                <div className="menu-img">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                    alt="item-img"
                    className="item-img"
                  />
                  {itemCount === 0 ? (
                  <button
                    className="item-btn"
                    onClick={() => handleAddItems(item)}
                  >
                    Add
                  </button>
                ) : (
                  <div className="btn">
                    <RemoveIcon
                      className="minus-btn"
                      onClick={() => handleRemoveItems(item)}
                    />
                    <div className="ItemsNumber">{itemCount}</div>
                    <AddIcon
                      className="add-btn"
                      onClick={() => handleAddItems(item)}
                    />
                  </div>
                )}
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
