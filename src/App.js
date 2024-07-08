import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ResList from "./Components/Restaurants/ResList";
import RestaurantMenu from "./Components/Menu/RestaurantMenu";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<ResList /> } />
        <Route path='/restaurant-menu/:id' element = {<RestaurantMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
