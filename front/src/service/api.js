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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

