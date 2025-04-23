import {Link} from "react-router-dom";
import React from "react";

const project = (props) => (
    <div
        className="item-content"
        style={{
            backgroundImage: `url(/assets/images/${props.background}`,
        }}
    >
        <h3>{props.name}</h3>
        <div className="infos">
            <span className="date">{props.date}</span>
            <span className="techno">{props.technos}</span>
        </div>
        <div className="links">
            {props.weblink && (
                <a
                    href={props.weblink}
                    target="_blank"
                    className="see-more"
                    title="Aller sur le site"
                >
                    <span>Voir le site</span>
                </a>
            )}
            {props.githublink && (
                <a
                    href={props.githublink}
                    target="_blank"
                    className="see-more"
                    title="Répo github"
                >
                    <span>Github</span>
                </a>
            )}
            <Link
                to={`/projects/${props.id}`}
                className="see-more"
                title="Voir les détails du projet"
            >
                <span>Détails</span>
            </Link>
        </div>
    </div>
)
export default project;