const DEVICON = (name: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const DEVICON_PLAIN = (name: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`;
const DEVICON_WORD = (name: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain-wordmark.svg`; // plus compatible

const DEFAULT_ITEMS: Array<{ label: string; src: string }> = [
    { label: "Symfony", src: DEVICON("symfony") },
    { label: "React", src: DEVICON("react") },
    { label: "Vite", src: DEVICON("vite") }, // <- corrigé
    { label: "Php", src: DEVICON("php") },
    { label: "NextJs", src: DEVICON("nextjs") },
    { label: "Javascript", src: DEVICON("javascript") },
    { label: "Html", src: DEVICON("html5") },
    { label: "CSS", src: DEVICON("css3") },
    // { label: "Scss", src: DEVICON("sass") },
    { label: "Sass", src: DEVICON("sass") },
    { label: "Doctrine", src: DEVICON_PLAIN("doctrine") },
    { label: "Composer", src: DEVICON("composer") },
    // { label: "Less", src: DEVICON_WORD("less") },
    // { label: "Sql", src: DEVICON_WORD("Sql") }, // pas d'icône 'sql' générique
    { label: "MySql", src: DEVICON("mysql") },
    // { label: "npm", src: DEVICON_WORD("npm") },
    { label: "Magento", src: DEVICON("magento") },
    { label: "PhpStorm", src: DEVICON("phpstorm") },
    { label: "Photoshop", src: DEVICON_PLAIN("photoshop") },
    { label: "Git", src: DEVICON("git") },
];

export default function TechLogoSlider({ items = DEFAULT_ITEMS }) {
    // on split en 2
    const half: number = Math.ceil(items.length / 2);
    const rowA: typeof items = items.slice(0, half);
    const rowB: typeof items = items.slice(half);

    // pour un défilement infini, on duplique chaque ligne
    const trackA: typeof items = [...rowA, ...rowA];
    const trackB: typeof items = [...rowB, ...rowB];

    return (
        <div className="tls2">
            {/* Ligne 1 → gauche */}
            <div className="tls2__row">
                <div
                    className="tls2__track tls2__track--left"
                    aria-label="Technologies row A"
                >
                    {trackA.map((item, i) => (
                        <div
                            className="tls-item"
                            key={`A-${item.label}-${i}`}
                            title={item.label}
                        >
                            {item.src ? (
                                <img
                                    className="tls-logo"
                                    src={item.src}
                                    alt={item.label}
                                    height="54"
                                    loading="lazy"
                                    onError={(e) => {
                                        const el = e.currentTarget;
                                        const p = el.parentElement;
                                        if (!p) return;
                                        p.innerHTML = `<span class='tls-badge'>${item.label}</span>`;
                                    }}
                                />
                            ) : (
                                <span className="tls-badge">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Ligne 2 → droite */}
            <div className="tls2__row">
                <div
                    className="tls2__track tls2__track--right"
                    aria-label="Technologies row B"
                >
                    {trackB.map((item, i) => (
                        <div
                            className="tls-item"
                            key={`B-${item.label}-${i}`}
                            title={item.label}
                        >
                            {item.src ? (
                                <img
                                    className="tls-logo"
                                    src={item.src}
                                    alt={item.label}
                                    height="54"
                                    loading="lazy"
                                    onError={(e) => {
                                        const el = e.currentTarget;
                                        const p = el.parentElement;
                                        if (!p) return;
                                        p.innerHTML = `<span class='tls-badge'>${item.label}</span>`;
                                    }}
                                />
                            ) : (
                                <span className="tls-badge">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
