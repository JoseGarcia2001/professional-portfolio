import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
import pageDivisor from "../assets/images/Separador.svg";

const Layout = ({ children }) => (
  <>
    <header>
      <Link className="logo" to="/">
        <div className="logo">
          <div className="line"></div>
          <p>JG</p>
        </div>
      </Link>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/About">
              <span data-content="Sobre mi"></span>
            </Link>
          </li>
          <li>
            <Link to="/professional-portfolio/">
              <span data-content="Proyectos"></span>
            </Link>
          </li>
          <li>
            <Link to="/professional-portfolio/">
              <span data-content="Contacto"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {children}
    <img className="separator" src={pageDivisor} alt="Dividor de página"></img>
    <div className="bg"></div>
  </>
);

export default Layout;
