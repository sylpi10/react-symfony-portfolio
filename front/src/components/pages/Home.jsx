import { Link } from "react-router-dom";
import profilPic from "../../../public/assets/images/avatar.png";
import shape from "../../../public/assets/images/shape.svg";
import {useEffect, useState} from "react";

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
                                Développeur web basé à Toulouse, j'utilise principalement Symfony pour le backend et React pour le frontend.
                                Curieux, et passionné par le développement web, je suis actuellement à la recherche d’un poste pour continuer à progresser dans un environnement technique stimulant.
                            </p>
                        </div>
                    </div>
                    <div className={`picture-wrapper`}>
                        <img src={profilPic} alt="photo de profil" width="300" />
                        <h2>Sylvain Pillet</h2>
                    </div>
                </div>

                <button className="project-link">
                    <a  href={'#projets'}>Projets
                        <svg viewBox="0 0 70 36">
                            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        </svg>
                    </a>
                </button>
                <img className="shape" src={shape} alt="" />
            </div>
        </main>
        {/*<div className="home-description">*/}
        {/*    <div className="para-container first-para">*/}
        {/*        <p> Développeur web basé à <b>Toulouse</b>, j'utilise principalement <b>Symfony</b> pour le <b>backend</b> et <b>React</b> pour le <b>frontend</b>.*/}
        {/*            Curieux, et passionné par le <b>développement web</b>, je suis actuellement à la recherche d’un <b>poste</b> pour continuer à progresser dans un environnement technique stimulant.</p>*/}
        {/*    </div>*/}
        {/*    <div className="para-container second-para">*/}
        {/*        <p>Mon objectif : contribuer à des <b>projets concrets</b>, progresser sur les <b>bonnes pratiques</b>, et évoluer dans une <b>équipe</b> où je pourrai <b>développer mes compétences</b> tout en apportant ma touche.</p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
    );
};

export default Home;
