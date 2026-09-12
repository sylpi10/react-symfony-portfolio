const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProjects = async () => {
    const response = await fetch(`${BASE_URL}/api/projects`)
  return await response.json()
}

export const getProjectDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/api/projects/${id}`)
    return  await response.json()
}

export const sendEmail = async (message) => {
    const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
    });

    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();

    // Si ce n'est pas du JSON (HTML d'erreur, redirect, proxy...), on évite le crash JSON.parse
    if (!contentType.includes("application/json")) {
        throw new Error(
            `Réponse non-JSON (HTTP ${response.status}) : ${text.slice(0, 200)}`
        );
    }

    let result;
    try {
        result = JSON.parse(text);
    } catch {
        throw new Error(
            `JSON invalide (HTTP ${response.status}) : ${text.slice(0, 200)}`
        );
    }

    // Cas où Symfony renvoie 200 mais success:false (ou 400/500)
    if (!response.ok || result.success === false) {
        // debug / test
        if (result?.error) console.error("Mailer error:", result.error);

        throw new Error(result?.message || `Erreur HTTP ${response.status}`);
    }

    return result;
};


