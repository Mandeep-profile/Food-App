import React, {useState} from "react";
import { RestaurantData } from "../../utils/RestaurantAPI";

const useRestaurantList = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getData = async () => {
    setLoading(true);
    try {
      const restaurantsData = await RestaurantData();
      const restaurants =
        restaurantsData?.data?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export default useRestaurantList;
