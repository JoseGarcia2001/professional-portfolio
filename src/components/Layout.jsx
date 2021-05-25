import React from "react";
import "../styles/home.css";

const Layout = () => (
  <>
    <header>
      <nav>
        <ul>
          <li data-content="HOME">
            <a href="./"></a>
          </li>
          <li data-content="SOBRE MI">
            <a href="./"></a>
          </li>
          <li data-content="PROYECTOS">
            <a href=""></a>
          </li>
          <li data-content="CONTACTO">
            <a href=""></a>
          </li>
        </ul>
      </nav>
      <h2>
        Hola! <br />
        Soy Jose Garcia
      </h2>
      <h1>Frontend Developer</h1>
    </header>
    <main>
      <p></p>
    </main>
    <div className="bg"></div>
  </>
);

export default Layout;
