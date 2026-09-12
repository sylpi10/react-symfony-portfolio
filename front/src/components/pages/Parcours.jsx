import React from "react";
import TechLogoSlider from "./TechLogoSlider.jsx";

const Parcours = () => {
  return (
    <main className="section-container parcours-container">
      <div className="parcours-wrapper">
        <div className="title">
          <h2 className={"section-title"}>Mon parcours</h2>
        </div>

        <div className="timeline">
          <ul>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Développeur web</h2>
                <h3>Ludilabel</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>Développement fullstack Symfony-React</li>
                    <li>Développement frontend Magento</li>
                    <li>UI/UX, performances, SEO, & accessibilité</li>
                    <li>Clean architecture</li>
                    <li>Déploiement</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Php</li>
                  <li>Symfony</li>
                  <li>React</li>
                  <li>Magento</li>
                  <li>Sql</li>
                  <li>Docker</li>
                  <li>Html</li>
                  <li>Sass</li>
                  <li>Less</li>
                  <li>Git</li>
                </ul>

                <div className="date">2021/2025</div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Concepteur Développeur</h2>
                <h3>3WAcademy (alternance)</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>Développement fullstack Symfony-React</li>
                    <li>Conception UML / Merise</li>
                    <li>UI/UX, SEO, & accessibilité</li>
                    <li>Clean architecture, design patterns, SOLID</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Symfony</li>
                  <li>React</li>
                  <li>UML</li>
                  <li>Sql</li>
                  <li>Conception</li>
                </ul>
                <div className="date">2021/2023</div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Développeur freelance</h2>
                <h3>Freelance</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>Développement de sites vitrines</li>
                    <li>Développement e-commerce</li>
                    <li>Responsive Webdesign</li>
                    <li>Maquettage</li>
                    <li>Gestion de l’hébergement et mise en production</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Symfony</li>
                  <li>Django</li>
                  <li>MySql</li>
                  <li>PostgreSql</li>
                  <li>Photoshop</li>
                </ul>
                <span className="date">2020</span>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Formation Java/Angular</h2>
                <h3>Aelion</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>Développement fullstack Spring Boot-Angular</li>
                    <li>Clean architecture, DTO </li>
                    <li>UI/UX, performances, SEO, & accessibilité</li>
                    <li>Git, déploiement</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Spring Boot</li>
                  <li>Angular</li>
                  <li>MySql</li>
                  <li>PostgreSql</li>
                </ul>
                <span className="date">2020</span>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Formation Développeur Web</h2>
                <h3>Adrar</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>Développement Web</li>
                    <li>POO, MVC </li>
                    <li>Responsive Web Design</li>
                    <li>SEO, & accessibilité</li>
                    <li>Maquettage</li>
                    <li>Conception</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Php</li>
                  <li>Javascript</li>
                  <li>UML</li>
                  <li>Merise</li>
                  <li>Photoshop</li>
                  <li>Sql</li>
                  <li>Git</li>
                </ul>
                <span className="date">2019</span>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Master 1 NUMIC</h2>
                <h3>Université Rennes 2</h3>
                <div className="description">
                  <ul className="tasks">
                    <li>
                      Valorisation de l'audiovisuel à travers le numérique
                    </li>
                    <li>Gestion de projet </li>
                    <li>Webdesign</li>
                    <li>Intégration web</li>
                    <li>Conception de visites virtuelles 360°</li>
                  </ul>
                </div>
                <ul className="tools">
                  <li>Html</li>
                  <li>Css</li>
                  <li>Photoshop</li>
                  <li>Visites virtuelles 360°</li>
                  <li>Wordpress</li>
                </ul>
                <span className="date">2016/2017</span>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <h2>Licence Cinéma</h2>
                <h3>Université Paul Valéry</h3>
                <span className="date">2010/2012</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <TechLogoSlider speedSec={25} gap={32} height={64} />

      {/*<div className="toolkit-wrapper">*/}
      {/*    <div className="toolkit">*/}
      {/*        <span>Toolkit</span>*/}
      {/*    </div>*/}
      {/*    <div className="tag-list" id="tagList">*/}
      {/*        <div className="fade"></div>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </main>
  );
};

export default Parcours;
