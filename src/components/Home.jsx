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
        Hola Soy
        <br />
        &nbsp;Jose Garcia!
      </h1>
      <h2>Frontend Developer.</h2>
      <div className="cv">
        <div></div>
        <div></div>
        <div>
          <p>Descargar CV</p>
        </div>
      </div>
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
    </main>
  );
};

export default Home;
