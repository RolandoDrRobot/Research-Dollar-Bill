import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/img/home.png';
import statsIcon from '../../assets/img/stats.png';
import tradingIcon from '../../assets/img/trading.png';
import ProfileIcon from '../../assets/img/profile.png';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar d-flex ">
        <Link to="/profile" className="button">
          <img src={ProfileIcon} alt="" />
          Home
        </Link>
       <Link to="/" className="button">
          <img src={homeIcon} alt="" />
          Vaults
        </Link>
        <Link to="/stats" className="button">
          <img src={statsIcon} alt="" />
          Stats
        </Link>
        <Link to="/trading/0" className="button">
          <img src={tradingIcon} alt="" />
          Trading
        </Link>
      </div>
      <p className="info-text">AXE Capital Ⓒ 2022 Dollar Bill</p>
    </>
  )
}

export default Navbar;
