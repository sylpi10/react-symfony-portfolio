import React, { useState, useEffect } from 'react';
import {getProjects} from "../../service/api.js";
import Project from "../../containers/Projects/Project.jsx";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const loadedProjects = await getProjects();
                setProjects(loadedProjects); // Set fetched data to state
            } catch (e) {
                console.log("erreur: ", e);
                setError("Failed to load projects"); // Set error if fetching fails
            } finally {
                setLoading(false); // Turn off loading state
            }
        };
        loadProjects();
    }, []);

    // Handle loading state
    // if (loading) {
    //     return (
    //
    // }

    // Handle error state
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className="section-container projects-container">
            <div className="content">
                <h2 className={"section-title"}>Projets réalisés</h2>
                {
                    loading ?
                        <div className={"spinner-container"}>
                            <span className={"spinner-title"}>Chargement des projets...</span>
                            <span className={"spinner"}> </span>
                        </div>:
                    <>
                        {
                            projects.length > 1 ?
                            <div className="projects-list-container">
                                <ul className="projects-list">
                                    {projects.map((project) => {
                                        return (
                                            <li key={project.id} className="project-item">
                                                <Project {...project} />
                                            </li>
                                        );
                                    })
                                    }
                                </ul>

                            </div> :
                            <div className={"loading-error"}>
                                <p>Une erreur est survenue lors du chargement...</p>
                            </div>
                        }
                    </>
                }

            </div>
        </main>
    );

};

export default Projects;
