import { Link } from "react-router-dom";
import profilPic from "../../../public/assets/images/self.png";
import shape from "../../../public/assets/images/shape.svg";

const Home = () => {
    return (
        <>
        <main className="homepage">
            <div className="hero-area">
                <div className="presentation">
                    <div className="person">
                        <h1>
              <span className="concepteur title">
                <span className="first-letter">C</span>oncepteur
              </span>
                            <span className="dev title">
                <span className="first-letter">D</span>éveloppeur
              </span>
                        </h1>
                    </div>
                    <div className="picture-wrapper">
                        <img src={profilPic} alt="photo de profil" width="300" />
                        <h2>Sylvain Pillet</h2>
                    </div>
                </div>

                <button className="project-link">
                    <Link to="/projects">Projets</Link>
                </button>
                <img className="shape" src={shape} alt="" />
            </div>
        </main>
        <div className="home-description">
            <img src="public/assets/images/dev_picto.svg" alt="dessin de développeur" width={220}/>
            <div className="description-text">
              <p> Développeur web basé à <b>Toulouse</b>, j'utilise principalement <b>Symfony</b> pour le <b>backend</b> et <b>React</b> pour le <b>frontend</b>.
                  Curieux, et passionné par le <b>développement web</b>, je suis actuellement à la recherche d’un <b>poste</b> pour continuer à progresser dans un environnement technique stimulant.</p>

              <p>Mon objectif : contribuer à des <b>projets concrets</b>, progresser sur les <b>bonnes pratiques</b>, et évoluer dans une <b>équipe</b> où je pourrai <b>développer mes compétences</b> tout en apportant ma touche.</p>
             </div>
        </div>
        </>
    );
};

export default Home;
