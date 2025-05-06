// src/components/MyForm.jsx
import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = (props) => {
    // Validation avec Yup
    const validationSchema = Yup.object({
        name: Yup.string().min(3, '3 caractères min').required('Nom requis'),
        email: Yup.string().email('Email invalide').required('Email requis'),
        message: Yup.string().min(12, '12 caractères min').required('Message Requis'),
        website: Yup.string(), // Honeypot (pas de validation nécessaire)
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            website: '',
        },
        validationSchema,
        onSubmit: (values, formikHelpers) => {
            props.handleSubmit(values, formikHelpers.resetForm);
        },
    });

    return (
            <div className="contact-form">

                <div className="status-wrapper">
                    {props.loading && <div className="alert loading">Envoie du Message...</div>}
                    {props.error &&   <div className="alert alert-error">{props.error}</div> }
                    {props.success && <div className="alert alert-success">{props.success}</div>}
                </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={"input-wrapper"}>
                            <input
                                type="text"
                                name="name"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <label htmlFor="name">Votre Nom</label>

                            {formik.touched.name && formik.errors.name && (
                                <div className="form-error">{formik.errors.name}</div>
                            )}
                        </div>

                        <div className={"input-wrapper"}>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <label htmlFor="email">Votre Email</label>
                            {formik.touched.email && formik.errors.email && (
                                <div className="form-error">{formik.errors.email}</div>
                            )}
                        </div>

                        <div className={"input-wrapper"}>
                            <textarea
                                name="message"
                                placeholder=""
                                rows={4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            <label htmlFor="message">Votre Message</label>
                            {formik.touched.message && formik.errors.message && (
                                <div className="form-error">{formik.errors.message}</div>
                            )}
                        </div>
                        {/*honeypot*/}
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                        />
                        <button className={"button-link email-button"} type="submit">
                            <span className={"see-more sent-mail"}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-send-icon lucide-send"><path
                                   d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path
                                   d="m21.854 2.147-10.94 10.939"/></svg>
                                Envoyer
                            </span>
                        </button>
                    </form>
                </div>
    );
};


export default ContactForm;
