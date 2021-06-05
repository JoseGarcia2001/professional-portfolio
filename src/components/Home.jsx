import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <main className="hero">
      <h1>
        Hello.
        <br />I am Jose G.
        <div className="hero_description">
          <svg
            width="46px"
            height="46px"
            viewBox="0 0 53 53"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="arrow-wrap"
              stroke="none"
              strokeidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="arrow"
                transform="translate(-904.000000, -343.000000)"
                stroke="#FFFFFF"
                strokeWidth="2"
              >
                <path
                  d="M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z"
                  id="wrap-arrow1a"
                ></path>
              </g>
            </g>
          </svg>
          <h2>
            Frontend_
            <br />
            Developer.
          </h2>
        </div>
      </h1>
      <a
        href="https://drive.google.com/uc?id=1JTybvweyVNEBuxUb3-QgORipMUEvjTDT&export=download"
        about="_blank"
      >
        <button className="hero_cv">Descargar CV</button>
      </a>
      <div className="description description-home">
        <div></div>
        <div></div>
        <div className="circle"></div>
        <div>
          <p className="description-paragraph">
            “Desde muy chico me encantó la <span>TECNOLOGÍA</span> y encontrar
            el porqué de las cosas, Algún día por un anuncio casual y mucha
            curiosidad, conocí la
            <span> PROGRAMACIÓN</span> En ese momento supe que debía hacer.”
          </p>
        </div>
      </div>
      <Link to="/about">
        <div className="next_section">
          <p>CONOCE MÁS DE MI</p>
          <svg
            width="63"
            height="64"
            viewBox="0 0 63 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.01694 27.6688L46.9924 27.669L26.1564 6.83218L31.8372 1.15138L62.3715 31.6858L31.8372 62.2201L26.1564 56.5393L46.9924 35.7025L5.01694 35.7027V27.6688Z"
              stroke="white"
              strokeWidth="1.3"
            />
          </svg>
        </div>
      </Link>
    </main>
  );
};

export default Home;
