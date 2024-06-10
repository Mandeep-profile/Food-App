import React from "react";
import logo from "../../Assets/Main-logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const navigate = useNavigate()

  const mainPage = () => {
    navigate('/')
  }
  return (
    <div className="Nav-main">
      <div className="Nav-logo">
        <img src={logo} alt="App-Logo" onClick={mainPage} />
      </div>
      <div className="Nav-items">
        <ul>
          <Link to="about" className="link">
            <li>About</li>
          </Link>
          <li>Contact</li>
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
