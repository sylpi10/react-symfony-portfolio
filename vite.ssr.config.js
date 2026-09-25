import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // must match the client build (vite-plugin-symfony serves from /build/)
    base: "/build/",
    publicDir: false,
    ssr: {
        // bundle autonome : aucun node_modules nécessaire sur le serveur
        noExternal: true,
    },
    build: {
        outDir: "bootstrap/ssr",
    },
});
