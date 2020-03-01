
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'; 
import './navbar.style.css';
import {Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function navbar() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand text-danger" href="#" alt="">BIZPORTSOLUTIONS</Link>
          <button className="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Nav.Link href="/">HOME</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link href="/abtslide">ABOUT</Nav.Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown"role="button">SERVICES</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item product" to="Customised">CUSTOMIZED DEVELOPMENT</Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="MobileApp">MOBILE APP DEVELOPMENT</Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="Webpage">WEBPAGE DEVELOPMENT</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" >PRODUCTS</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                  <Link className="dropdown-item product" to="retail">RETAIL-CLICK</Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="Cent">CENTRALIZED STORE MNGT SYSTEM</Link>

                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item product" to="ERetail">E-RETAIL</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="Contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
}


export default navbar;
