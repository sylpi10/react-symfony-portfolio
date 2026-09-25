import type { ComponentType } from "react";

type PageModule = { default: ComponentType<any> };

const pages = import.meta.glob<PageModule>("../pages/*.tsx");

export function resolvePage(name: string) {
    const page = pages[`../pages/${name}.tsx`];
    if (!page)
        throw new Error(
            `Page Inertia introuvable : ${name} (attendu : assets/pages/${name}.tsx)`,
        );
    return page().then((module) => module.default);
}
