import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Restaurants from "./Components/Restaurants/Restaurants";
import RestaurantMenu from "./Components/Menu/RestaurantMenu";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Restaurants /> } />
        <Route path='/restaurant-menu/:id' element = {<RestaurantMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
