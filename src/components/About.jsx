import React, { useEffect } from "react";
import "../styles/about.css";
import cssLogo from "../assets/images/css-logo.svg";
import htmlLogo from "../assets/images/html-logo.svg";
import jsLogo from "../assets/images/js-logo.svg";
import reactLogo from "../assets/images/react-logo.svg";
import wbLogo from "../assets/images/wb-logo.svg";
import figmaLogo from "../assets/images/figma-logo.svg";
import gitLogo from "../assets/images/git-logo.svg";
import gamingLogo from "../assets/images/gaming.svg";
import mindfullnesLogo from "../assets/images/mindfullnes.svg";
import exerciseLogo from "../assets/images/exercise.svg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="about" id="about">
      <section className="description">
        <h1>Sobre mi_</h1>
        <div className="description description-about">
          <div></div>
          <div></div>
          <div></div>
          <div>
            <p className="">
              Soy una persona <span>proactiva</span> que día a día busca ser su
              mejor versión, nunca parando de <span>aprender</span> y buscando
              <span> retos </span>con propósito. Me encanta vivir cada día
              haciendo lo que amo crear <span>soluciones </span> con
              <span> tecnología</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="technologies">
        <h3>Tecnologías que Domino</h3>
        <div className="technologies-container">
          <figure className="technologies-item">
            <img src={cssLogo} alt="css Logo"></img>
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={htmlLogo} alt="html Logo"></img>
            <figcaption>HTML</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={jsLogo} alt="javascript Logo"></img>
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={wbLogo} alt="Webpack Logo"></img>
            <figcaption>Webpack</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={gitLogo} alt="Git Logo"></img>
            <figcaption>Git</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={reactLogo} alt="React Logo"></img>
            <figcaption>React</figcaption>
          </figure>
          <figure className="technologies-item">
            <img src={figmaLogo} alt="Figma Logo"></img>
            <figcaption>Figma</figcaption>
          </figure>
        </div>
      </section>
      <section className="laboral-experience">
        <h3>Experiencia Laboral</h3>
        <div className="experience-container">
          <div className="experience-item">
            <p className="date">2021</p>
            <p className="position">Desarrollador web freelance</p>
            <p className="company">Asadero Roque Fer</p>
            <div className="bullet"></div>
            <ul>
              <li>
                Creación de presencia digital en apps de delivery y redes
                sociales
              </li>
              <li>Desarrollo de páginas web interactivas/informativas</li>
              <li>Creación de piezas publicitarias</li>
              <li>Digitalización de menú de alimentos</li>
            </ul>
          </div>
          <div className="experience-item">
            <p className="date">2019 - 2020</p>
            <p className="position">
              Tecnólogo practicante en infraestructura.
            </p>
            <p className="company">SOLATI S.A.S.</p>
            <div className="bullet"></div>
            <ul>
              <li>Administración de bases de datos SQL</li>
              <li>
                Mantenimiento preventivo y correctivo de equipos de cómputo
              </li>
              <li>Administración de servidores Linux</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="education-experience">
        <h3>Educación</h3>
        <div className="education-container">
          <div className="education-item">
            <p className="date">2021 - Actualmente</p>
            <div className="bullet"></div>
            <p className="position">Escuela de desarrollo web</p>
            <p className="company">Platzi</p>
          </div>
          <div className="education-item">
            <p className="date">2020 - 2021</p>
            <div className="bullet"></div>
            <p className="position">Escuela de Javascript</p>
            <p className="company">Platzi</p>
          </div>
          <div className="education-item">
            <p className="date">2018 - 2020</p>
            <div className="bullet"></div>
            <p className="position">Tecnólogo en gestión de redes de datos</p>
            <p className="company">SENA</p>
          </div>
          <div className="education-item">
            <p className="date">2016 - 2018</p>
            <div className="bullet"></div>
            <p className="position">
              Tecnico en mantenimiento a equipos de computo
            </p>
            <p className="company">SENA</p>
          </div>
        </div>
      </section>
      <section className="hobbies">
        <h3>Hobbies</h3>
        <div className="hobbies-container">
          <figure className="hobbies-item">
            <img src={exerciseLogo} alt="Exercise Logo"></img>
            <figcaption>Ejercicio</figcaption>
          </figure>
          <figure className="hobbies-item">
            <img src={mindfullnesLogo} alt="Minfullnes image"></img>
            <figcaption>mindfullnes</figcaption>
          </figure>
          <figure className="hobbies-item">
            <img src={gamingLogo} alt="Gaming image"></img>
            <figcaption>Gaming</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default About;
