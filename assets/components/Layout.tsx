import { Link, usePage } from "@inertiajs/react";
import logo from "../images/logo.webp";
import { useState, useRef, ReactNode } from "react";

const links = [
    // { href: "/", label: "Home" },
    { href: "/#projects", label: "Projets" },
    { href: "/#a-propos", label: "À propos" },
    { href: "/#parcours", label: "Parcours" },
    { href: "/#contact", label: "Contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
    const { url } = usePage();
    // url d'Inertia plutôt que window.location, indisponible côté SSR (Node)
    const isHomePage = url.split(/[?#]/)[0] === "/";
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const headerRef = useRef(null);

    // Ferme le menu mobile quand un lien est cliqué
    const handleLinkClick = () => {
        setIsMobileOpen(false);
    };

    return (
        <>
            <header className="header" ref={headerRef}>
                <nav
                    className={`navbar ${isHomePage ? "default-menu-class" : ""} ${isMobileOpen ? "mobile-nav" : ""}`}
                >
                    <span className="brand">
                        <Link href="/" onClick={handleLinkClick}>
                            <img
                                src={logo}
                                className="logo"
                                alt="Logo Sylvain Pillet"
                                width="39"
                                height="60"
                            />
                        </Link>
                    </span>
                    <ul className="navlist">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={
                                    url === link.href ? "active" : undefined
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>

                    <span
                        className={`burger ${isMobileOpen ? "open" : ""}`}
                        onClick={() => setIsMobileOpen((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
