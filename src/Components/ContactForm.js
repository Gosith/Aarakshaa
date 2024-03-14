import "./ContactFormStyles.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            Swal.fire({
                // icon: 'error',
                // title: 'Oops...', 
                text: 'Please fill in all fields before submitting!',
            });
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "Queries"), {
                name: name,
                email: email,
                subject: subject,
                message: message,
            });

            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message is received!. We will get back to you soon.',
                showConfirmButton: false,
                timer: 5000
            });
            // alert("Thank you for contacting us! We will get back to you soon.");
        } catch (error) {
            console.error("Please try again ", error);
            alert(error.message);
        }

        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };


    return (
        <div className="contact-info">
            <div className="contact-container">
                
                
            </div>
            <div className="form-container">
            <h2 className="contact-heading">CONTACT US!</h2>
            <h1>Hi! We would love to hear from you</h1>
            <form onSubmit={handleSubmit}>

                <label className="left-align">Enter your Name :</label>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className="left-align">Enter your Email :</label>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* 
                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                /> */}
                <label className="left-align">Please select your field of interest :</label>
                <select value={subject} name="cars" id="cars" onChange={(e) => setSubject(e.target.value)}>
                    <option value="Personal Insurance">Personal Insurance</option>
                    <option value="Kiwi Saver">Kiwi Saver</option>
                    <option value="mortgage">Mortgage</option>

                </select>
                <label className="left-align">Please enter your message :</label>
                <textarea
                    placeholder="Message"
                    rows="10"
                    onResize={false}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button>Send Message</button>
            </form>
        </div>
        </div>
    );
}

export default ContactForm;