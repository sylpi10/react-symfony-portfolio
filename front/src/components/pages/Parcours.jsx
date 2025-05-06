import React, {useEffect} from "react";
import cv from "../../../public/assets/images/Sylvain_Pillet_CV_2025.pdf"

const Parcours = () => {

    useEffect(() => {
        const TAGS = [
            'Symfony', 'React', 'Vite js', 'Php', 'Javascript', 'Html', 'CSS', 'Scss', 'Sass', 'Doctrine', 'Composer',
            'Less', 'Sql', 'MySql', 'Doctrine', 'npm', 'Redux', 'Twig', 'Rest', 'UI/UX', 'Magento', 'PhpStorm', 'Photoshop', 'Git', 'Click-up'
        ];
        const DURATION = 12000;
        const ROWS = 5;
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
            tagElements.forEach(el => inner.appendChild(el));
            slider.appendChild(inner);
            return slider;
        };

        // Récupérer la liste des tags
        const tagList = document.getElementById('tagList');
        for (let i = 0; i < ROWS; i++) {
            const start = i * TAGS_PER_ROW;
            const end = start + TAGS_PER_ROW;
            const tags = TAGS.slice(start, end); // on prend 5 tags consécutifs
            const duration = DURATION; // même durée pour tout le monde
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
