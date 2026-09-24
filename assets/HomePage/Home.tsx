import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Parcours from "../components/Parcours";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ProjectProps } from "../types/projects.js";

type HomeProps = {
    projects: ProjectProps[];
};

// les id servent d'ancres pour la nav et de racine aux styles (#home, #a-propos...)
export default function Home({ projects }: HomeProps) {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="projects">
                <Projects projects={projects} />
            </section>
            <section id="a-propos">
                <About />
                <section id="parcours">
                    <Parcours />
                </section>
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}
