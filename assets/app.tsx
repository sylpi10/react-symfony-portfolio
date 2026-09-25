import { createInertiaApp, router } from "@inertiajs/react";
import { resolvePage } from "./resolvePage";
import Layout from "./components/Layout";

createInertiaApp({
    resolve: resolvePage,
    layout: () => Layout,
});

// Le <title> est rendu par Twig au premier chargement ; on le met à jour
// lors des navigations Inertia, qui ne rechargent pas le <head>
router.on("navigate", (event) => {
    const seo = event.detail.page.props.seo as { title?: string } | undefined;
    if (seo?.title) {
        document.title = seo.title;
    }
});
