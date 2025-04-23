import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ContactForm from "../../containers/Contact/ContactForm.jsx";
import {sendEmail} from "../../service/api.js";

const Contact = () => {

    const location = useLocation();

    useEffect(() => {
        // Check if the current path is '/contact'
        if (location.pathname === '/contact') {
            document.body.classList.add('contact-page');
        }
        // Clean up: remove the class when navigating away from '/contact'
        return () => {
            document.body.classList.remove('contact-page');
        };
    }, [location.pathname]);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (message, resetForm) => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await sendEmail(message);
            setSuccess(response.message || "Email envoyé avec succès.");
            resetForm();
            setTimeout(() => setSuccess(null), 4000);
        } catch (e) {
            setError(e.message || "Erreur lors de l'envoi de l'email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="section-container">
            <div className="section-wrapper contact-wrapper">
                <h1>On discute ?</h1>
                <ContactForm handleSubmit = {handleSubmit} loading={loading} success={success} error={error} />
            </div>
        </main>
    );
};

export default Contact;
