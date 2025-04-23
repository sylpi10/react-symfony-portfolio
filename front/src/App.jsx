import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import Parcours from "./components/pages/Parcours.jsx";
import NavBar from "./components/NarBar";
import Footer from "./components/Footer.jsx";
import ProjectDetails from "./components/pages/ProjectDetails.jsx";

function App() {

  return (
      <>
      <NavBar/>
        <main className={"main-content"}>
          <Routes>
            <Route path={"/"} element={<Home/>}>Home</Route>
            <Route path={"/projets"} element={<Projects/>}>Projets</Route>
            <Route path="/projects/:id" element={<ProjectDetails/>} />
            <Route path={"/parcours"} element={<Parcours/>}>Parcours</Route>
            <Route path={"/a-propos"} element={<About/>}>A propos</Route>
            <Route path={"/contact"} element={<Contact className="contact-page"/>}>Contact</Route>
          </Routes>
          <Footer/>
        </main>
      </>
  )
}

export default App
