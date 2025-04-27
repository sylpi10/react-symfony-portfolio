import React, {useEffect} from "react";
import cv from "../../../public/assets/images/Sylvain_Pillet_CV_2025.pdf"

const Parcours = () => {

    useEffect(() => {
        const TAGS = [
            'Symfony', 'React', 'vite js', 'Php', 'Javascript', 'Html', 'CSS', 'Scss', 'Sass', 'doctrine', 'composer',
            'Less', 'Sql', 'MySql', 'Doctrine', 'npm', 'Redux', 'Twig', 'Rest', 'UI/UX', 'Magento', 'PhpStorm', 'Photoshop', 'Git', 'click-up'
        ];
        const DURATION = 12000;
        const ROWS = 3;
        const TAGS_PER_ROW = 5;

        // Fonction pour générer un nombre aléatoire dans une plage
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        // Fonction pour mélanger un tableau
        const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

        // Création du slider infini
        const createInfiniteLoopSlider = (tags, duration, reverse) => {
            const slider = document.createElement('div');
            slider.className = 'loop-slider';
            slider.style.setProperty('--duration', `${duration}ms`);
            slider.style.setProperty('--direction', reverse ? 'reverse' : 'normal');

            const inner = document.createElement('div');
            inner.className = 'inner';
            const tagElements = tags.map((tag, index) => {
                const tagDiv = document.createElement('div');
                tagDiv.className = 'tag';
                tagDiv.textContent = `# ${tag}`;
                return tagDiv;
            });

            // Ajoute les tags deux fois pour créer une animation fluide
            tagElements.concat(tagElements).forEach(el => inner.appendChild(el));
            slider.appendChild(inner);
            return slider;
        };

        // Récupérer la liste des tags
        const tagList = document.getElementById('tagList');
        for (let i = 0; i < ROWS; i++) {
            const tags = shuffle(TAGS).slice(0, TAGS_PER_ROW);
            const duration = random(DURATION - 5000, DURATION + 5000);
            const reverse = i % 2 === 0;
            const slider = createInfiniteLoopSlider(tags, duration, reverse);
            tagList.appendChild(slider);
        }

    }, []);

    return (
        <main className="section-container parcours-container">
            <div className="parcours-wrapper">
                <div className="title">
                    <h2 className={"section-title"}>Mon parcours</h2>
                    <div className="cv-link">
                        <a
                            href={"cv"}
                            title="Télécharger Mon CV en pdf"
                            download
                        >
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
                    </div>
                </div>

                <div className="timeline">
                    <ul>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h2>Développeur web</h2>
                                <h3>Ludilabel</h3>
                                <ul>
                                    <li>Php</li>
                                    <li>Symfony</li>
                                    <li>React</li>
                                    <li>Magento</li>
                                    <li>Sql</li>
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
                                <ul>
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
                                <h2>Formation Java/Angular</h2>
                                <h3>Aelion</h3>
                                <ul>
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
                                <ul>
                                    <li>Php</li>
                                    <li>Javascript</li>
                                    <li>UML</li>
                                    <li>Merise</li>
                                    <li>Photoshop</li>
                                    <li>Sql</li>
                                </ul>
                                <span className="date">2019</span>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <div className="timeline-content">
                                <h2>Master 1 NUMIC</h2>
                                <h3>Université Rennes 2</h3>
                                <ul>
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

            <div className="toolkit-wrapper">
                <div className="toolkit">
                    <span>Toolkit</span>
                </div>
                <div className="tag-list" id="tagList">
                    <div className="fade"></div>
                </div>
            </div>
        </main>
    );
};

export default Parcours;
