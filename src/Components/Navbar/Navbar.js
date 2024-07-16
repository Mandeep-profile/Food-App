import React from "react";
import logo from "../../Assets/Main-logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.scss";

const Navbar = () => {

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  return (
    <div className="Nav-main">
      <div className="Nav-logo">
       <Link to="/"> <img src={logo} alt="App-Logo" /></Link>
      </div>
      <div className="Nav-items">
        <ul>
          <Link to="cart">
            <li>
              <ShoppingCartIcon /> <span className="cart-items">{cartItems.length}</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
