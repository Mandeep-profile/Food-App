import React from "react";
import logo from "../../Assets/Main-logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="Nav-main">
      <div className="Nav-logo">
       <Link to="/"> <img src={logo} alt="App-Logo" /></Link>
      </div>
      <div className="Nav-items">
        <ul>
          <Link to="cart">
            <li>
              <ShoppingCartIcon />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
