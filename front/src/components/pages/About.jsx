import React from 'react';
import arrow from "../../../public/assets/images/arrow.png";
import me from "../../../public/assets/images/me.png";

const About = () => {

    const getAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // Adjust age if birthday hasn't occurred yet this year
        if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && day < birthDateObj.getDate())) {
            age--;
        }

        return age;
    };

    const age = getAge('1990-03-17');

    return (
        <main className="section-container about-container">
            <div className="about-me-wrapper">
                <div className="name">
                    <h1>Sylvain, {age} ans</h1>
                    <img
                        src={arrow}// Update the path as necessary
                        className="arrow"
                        alt="dessin de flêche"
                        width="220"
                        height="200"
                    />
                </div>
                <div className="image-wrapper">
                    <img
                        src={me} // Update the path as necessary
                        className="profile"
                        alt="photo de profil"
                        width="400"
                    />
                </div>
                <div className="tags">
                    <ul>
                        <li>Conception </li>
                        <li>Développement Back-end</li>
                        <li>Développement Front-end</li>
                        <li>Git Workflow</li>
                    </ul>
                </div>
            </div>
            <div className="text-container">
        <span className="info age" data-move="left">{age} ans</span>
                <span className="info dev" data-move="bottom">Développeur</span>
                <div className="text-wrapper">
                    <p>
                        J'ai débuté par l'intégration web en <b>2017</b> avant de me
                        former aux autres technologies web par moi-même pour ensuite de
                        rejoindre en <b>2019</b> une formation en développement à{' '}
                        <b>Toulouse</b>.
                    </p>
                    <p>
                        Suite à quoi j'ai creusé différentes technologies avant de
                        revenir aux bases du web et au <b>PHP</b> en rejoignant une
                        alternance de <b>Concepteur Développeur</b> autour de{' '}
                        <b>Symfony</b>, <b>React</b> et du E-commerce avec <b>Magento</b>{' '}
                        auprès de l'entreprise <b>Ludilabel</b>
                        <br />
                        Mes missions touchant principalement au frontend et à l'<b>UX/UI</b>{' '}
                        sur la refonte du site de l'entreprise.
                        <br />
                    </p>
                    <p>
                        Le développement d'un outil de personnalisation intégré au nouveau site me permet également de mêler backend et
                        frontend en utilisant <b>Symfony</b> et <b>React</b>.
                    </p>
                    <p>
                        J'apprécie dans le développement et plus précisément le
                        développement <b>fullstack</b>, l'impression de donner vie à des
                        choses assez abstraites en créant les modèles de données et en leur
                        donnant forme à travers leur passage par les différentes couches de
                        l'application jusqu'à l'affichage final.
                    </p>

                    <p>
                        Sinon je suis aussi passionné de <b>Cinéma</b>, ou de sport, j'ai
                        pratiqué le <b>foot</b> pendant 16 ans et je pratique maintenant{' '}
                        <b>l'escalade</b> depuis 6 ans.
                        <br />
                    </p>
                    <p>Actuellement basé à <b>Toulouse</b>.</p>
                </div>
                <span className="info where" data-move="top">Toulouse </span>
                <span className="info grimpe" data-move="right">Grimpeur</span>
            </div>
        </main>
    );
};

export default About;
