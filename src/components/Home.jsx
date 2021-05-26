import React, { useState, useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  // const [isLoaded, setLoading] = useState(0);

  // useEffect(() => {
  //   document.title = `${isLoaded}`;
  // });
  return (
    <main className="hero">
      <h1>
        HOLA SOY
        <br />
        &nbsp;JOSE GARCIA!
      </h1>
      <h2>FRONTEND DEVELOPER.</h2>
      <div className="cv">
        <div></div>
        <div></div>
        <div>
          <p>Descargar CV</p>
        </div>
      </div>

      <div className="description">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <p>
            “Desde muy chico me encantó la <span>TECNOLOGÍA</span> y encontrar
            el porqué de las cosas, Algún día por un anuncio casual y mucha
            curiosidad, conocí la
            <span> PROGRAMACIÓN</span> En ese momento supe que debía hacer.”
          </p>
        </div>
        {/* <div></div> */}
      </div>
    </main>
  );
};

export default Home;
