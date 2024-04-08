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

                <h2>
                  REACH OUT TO US!
                </h2>
                <div className="map-section">
                    <iframe className="map" title="Google Map" width="400%" height="300" frameBorder="0" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.8767815837027!2d172.4914737120393!3d-43.62992347098268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3219004b2c88a5%3A0x43f204f68099dd2b!2sAarakshaa%20Insurance%20and%20Mortgages!5e0!3m2!1sen!2slk!4v1711559273473!5m2!1sen!2slk"></iframe>
                </div>
                <br></br>
                <div>
                  
                    <p className="address">+94774768114, <br /> Level 2, 137 Kilmore Street, Christchurch 8011</p>
                </div>

               

            </div>
            <div className="form-container">
                <h2 className="contact-heading">CONTACT US!</h2>
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
                        <option value="Pick one">Pick the category</option>
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