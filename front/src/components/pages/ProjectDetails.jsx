import React, { useState, useEffect } from 'react';
import {getProjectDetails} from "../../service/api.js";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadProject = async () => {
            try {
                const loadedProject = await getProjectDetails(id);
                setProject(loadedProject); // Set fetched data to state
            } catch (e) {
                setError("Failed to load project"); // Set error if fetching fails
            } finally {
                setLoading(false); // Turn off loading state
            }
        };
        loadProject();
    }, []);

    // Handle loading state
    if (loading) {
        return <div>Loading projects...</div>;
    }

    // Handle error state
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className="section-container projects-container">
            <div className="content">
                <h1>{project.name}</h1>

                <div className="project-container">
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div className="infos">
                        <p>Développé avec : <b>{project.technos}</b></p>
                        <p>
                            {project.weblink && (
                                <a
                                    href={project.weblink}
                                    target="_blank"
                                    title="Aller sur le site"
                                    className="see-more link"
                                >
                                    Voir le site
                                </a>
                            )}
                            {project.githublink && (
                                <a
                                    href={project.githublink}
                                    target="_blank"
                                    title="Répo Github"
                                    className="see-more link"
                                >
                                    Voir le github
                                </a>
                            )}
                        </p>
                    </div>
                </div>
                <img
                    src= {`/assets/images/${project.detailPic}`}
                    className="project-image"
                    alt="image du site"
                    width="800"
                />
            </div>
        </main>
    );
};

export default ProjectDetails;
