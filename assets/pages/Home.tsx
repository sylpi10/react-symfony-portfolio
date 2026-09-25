import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Parcours from "../components/sections/Parcours";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { ProjectProps } from "../types/projects";

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
