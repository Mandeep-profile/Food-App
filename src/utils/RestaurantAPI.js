import axios from "axios"

export const RestaurantData = () => {
    return axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6473089&lng=77.1579605&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
}

export const Menu = () => {
    return axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6473089&lng=77.1579605&restaurantId=655882&catalog_qa=undefined&submitAction=ENTER")
} 