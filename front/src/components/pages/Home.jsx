import { Link } from "react-router-dom";
import profilPic from "../../../public/assets/images/avatar.png";
import shape from "../../../public/assets/images/shape.svg";
import cv from "../../../public/assets/images/Sylvain_Pillet_CV_2025.pdf";
import frontPic from "../../../public/assets/images/front.png";
import backyPic from "../../../public/assets/images/back.png";
import React, {useEffect, useState} from "react";

const Home = () => {

    const text = "Développeur\nFullstack";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1)); // slice jusqu'à index + 1
                setIndex(index + 1); // avance index
            }, 160);

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    const [hasScrolledPast, setHasScrolledPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 200;
            setHasScrolledPast(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <main className="homepage">
            <div className="hero-area">
                <div className="presentation">
                    <div className="person">
                        <h1 className="typewriter">
                            {displayedText.split('\n').map((line, i) => (
                                <span key={i}>
                                            {line}
                                    {i !== displayedText.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                            <span className="cursor">|</span>
                        </h1>
                        <div className="person-description">
                            <p>
                                Développeur web basé à <b>Toulouse</b>, j'utilise principalement <b>Symfony</b> et <b>React</b>. <br/>
                                Curieux, et passionné par le <b>développement web</b>, je suis
                                en quête d’un environnement technique stimulant pour continuer à apprendre et m’épanouir en équipe.
                            </p>
                        </div>


                    </div>
                    <div className="picture-name-wrapper">
                        <div className={`picture-name-container`}>
                            <img src={profilPic} alt="photo de profil" width="300" />
                            <h2>Sylvain Pillet</h2>
                        </div>
                    </div>
                </div>

                <div className="links-wrapper">
                    <button className="cv-link link-button">
                        <a href={cv} title="Télécharger Mon CV en pdf" download >
                            <svg
                                width="36px"
                                height="36px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                                    stroke="#E4D00A"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            CV
                        </a>
                    </button>
                    <button className="project-link link-button">
                        <a  href={'#projets'} title={"Voir les projets"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                            </svg>
                            Projets
                            {/*<svg viewBox="0 0 70 36">*/}
                            {/*    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />*/}
                            {/*</svg>*/}
                        </a>
                    </button>
                </div>

                <img className="shape" src={shape} alt="" />
            </div>
        </main>
        <div className="home-description">
            <div className="para-container first-para">
                <img src={frontPic} alt="Logo react" height={'120'}/>
                <div className="text">
                    <p>J'ai un attrait particulier pour le <b>développement frontend</b>. J'aime développer des interfaces simples et limpides, trouver le bon agencement et fluidifier l'utilisation des fonctionnalités.
                    </p>
                <p>Je travaille aussi bien avec <b>React</b> qu'avec du natif ou un <b>moteur de templates</b>. </p>
                </div>
            <div className="bar"></div>
            </div>
            <div className="para-container second-para">
                <div className="text">
                <p>La conception de la <b>base de données</b> et la mise en place de ces données est souvent la première étape d'un projet.
                </p>
                <p> J'utilise principalement <b>Symfony </b> et <b>Doctrine</b> pour la préparation des données, leur récupération
                    et l'envoie en <b>frontend</b> que ce soit par une <b>api</b> ou pour un template <b>Twig</b> </p>
                </div>
                <img src={backyPic} alt="Logo symfony" height={'120'}/>
            <div className="bar"></div>
            </div>
        </div>
            {
                hasScrolledPast &&
                <a href={"#home"} className="back-to-top">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-arrow-up-from-dot-icon lucide-arrow-up-from-dot">
                    <path d="m5 9 7-7 7 7"/>
                    <path d="M12 16V2"/>
                    <circle cx="12" cy="21" r="1"/>
                </svg>
            </a>
            }

        </>
    );
};

export default Home;
