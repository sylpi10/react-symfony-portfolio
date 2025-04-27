import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import Parcours from "./components/pages/Parcours.jsx";
import NavBar from "./components/NarBar";
import Footer from "./components/Footer.jsx";
import ProjectDetails from "./components/pages/ProjectDetails.jsx";
import {useEffect, useState} from "react";

function App() {

    const location = useLocation();

    const [checkPage, setCheckPage] = useState(() => {
        return location.pathname.includes('/projects/') ? 'projectDetails' : 'basic';
    });

    useEffect(() => {
        // Check if the current path is '/contact'
        if (location.pathname.includes('/projects/')) {
            setCheckPage('projectDetails');
        }else{
            setCheckPage('basic');
        }
    }, [location.pathname]);

  return (
      <>
        {checkPage === "basic" ?
            <>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home"><Home /></section>
                <section id="projets"><Projects /></section>
                <section id="a-propos"><About /></section>
                <section id="parcours"><Parcours /></section>
                <section id="contact"><Contact /></section>
              </>
            } />
          </Routes>
        </main>
            </>:
            <>
            <NavBar mode={'projectDetailsPage'}/>
              <main className="main-content">
                <Routes>
                    <Route path={"/"} element={<Home/>}>Home</Route>
                    <Route path={"/projets"} element={<Projects/>}>Projets</Route>
                    <Route path="/projects/:id" element={<ProjectDetails/>} />
                    <Route path={"/parcours"} element={<Parcours/>}>Parcours</Route>
                    <Route path={"/a-propos"} element={<About/>}>A propos</Route>
                    <Route path={"/contact"} element={<Contact className="contact-page"/>}>Contact</Route>
                </Routes>
            </main>
            </>
        }
        <Footer/>
      </>

  )
}

export default App;
