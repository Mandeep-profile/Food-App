import React, { useState, useEffect } from "react";
import Veg from "../../Assets/vegetarian.png";
import NonVeg from "../../Assets/non-vegetarian.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Menu } from "../../utils/RestaurantAPI";
import Shimmer from "../Shimmer/Shimmer";
import MenuItems from "./MenuItems";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./RestaurantMenu.scss";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getMenuData = async () => {
    setLoading(true);
    try {
      const menu = await Menu(id);
      const menuItems =
        menu?.data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const categoryItems = menuItems?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      setMenuList(categoryItems);
      setLoading(false);
    } catch (error) {
      console.log("Error While Fetching Data", error);
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <>
      {loading === true ? (
        <Shimmer />
      ) : (
        <div className="menu-card">
          <h2 className="restaurant-name"></h2>
          <div className="menu-items">
            {menuList?.map((category) => (
              <MenuItems data={category?.card?.card} />
            ))}
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default RestaurantMenu;
