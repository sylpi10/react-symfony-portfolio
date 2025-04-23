// const BASE_URL = "http://127.0.0.1:8000";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProjects = async () => {
    const response = await fetch(`${BASE_URL}/api/projects`)
  return await response.json()
}

export const getProjectDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/api/projects/${id}`)
    // const response = await fetch(`http://127.0.0.1:8000/api/projects/${id}`)
    return  await response.json()
    // return data;
}


export const sendEmail = async (message) => {
    const response = await fetch(`http://127.0.0.1:8000/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    const result = await response.json(); // ← toujours lire le body

    if (!response.ok) {
        throw result; // ← contient `errors`
    }

    return result;
};

