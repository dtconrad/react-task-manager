import React, { useState } from 'react';
// import './Contact.css'; // Optional: Add your CSS styles here

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us!');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
        });
    };

    const labelAndHeaderColor = '#333'; // Replace with the color from home.js

    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ color: labelAndHeaderColor }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                        <label
                            htmlFor="firstName"
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                color: labelAndHeaderColor,
                                marginBottom: '0.5rem',
                            }}
                        >
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.5rem',
                            }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label
                            htmlFor="lastName"
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                color: labelAndHeaderColor,
                                marginBottom: '0.5rem',
                            }}
                        >
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.5rem',
                            }}
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor="email"
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            color: labelAndHeaderColor,
                            marginBottom: '0.5rem',
                        }}
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.5rem',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label
                        htmlFor="comments"
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            color: labelAndHeaderColor,
                            marginBottom: '0.5rem',
                        }}
                    >
                        Comments:
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: '0.5rem',
                            height: '100px',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;