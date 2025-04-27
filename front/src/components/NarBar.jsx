import "../assets/css/nav.scss";
import logo from "../../public/assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const headerRef = useRef(null);

    // Scroll sticky
    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            if (window.scrollY > 60) {
                headerRef.current.classList.add('sticky');
            } else {
                headerRef.current.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Ferme le menu mobile quand un lien est cliqué
    const handleLinkClick = () => {
        setIsMobileOpen(false);
    };

    return (
        <header className="header" ref={headerRef}>
            <nav className={`navbar ${isHomePage ? "default-menu-class" : ""} ${isMobileOpen ? "mobile-nav" : ""}`}>
                <span className="brand">
                    <Link to="/" onClick={handleLinkClick}>
                        <img src={logo} className="logo" alt="logo" width="39" />
                    </Link>
                </span>

                <ul className="navlist">
                    {[
                        { path: "/", label: "Accueil" },
                        { path: "/projets", label: "Projets" },
                        { path: "/parcours", label: "Parcours" },
                        { path: "/a-propos", label: "À propos" },
                        { path: "/contact", label: "Contact" }
                    ].map((link) => (
                        <li key={link.path}>
                            <Link to={link.path} onClick={handleLinkClick}>
                                {link.label}
                                <svg viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>

                <span className={`burger ${isMobileOpen ? "open" : ""}`} onClick={() => setIsMobileOpen(prev => !prev)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

            </nav>
        </header>
    );
}

export default NavBar;
