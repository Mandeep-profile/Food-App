import { useState, useEffect } from "react";
import { RestaurantData } from "../../utils/RestaurantAPI";
import { useParams } from "react-router-dom";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    setLoading(true);
    try {
      const restaurantsData = await RestaurantData(id);
      const restaurants =
        restaurantsData?.data?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {listOfRestaurants, loading, setListOfRestaurants};
};

export default useRestaurantList;
