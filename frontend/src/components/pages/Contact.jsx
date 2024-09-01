// src/components/Contact.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../layout/Navbar";
import Footer from "../Footer";
import "../../assets/styles/contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-down">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We would love to hear from you! Fill out the form below to reach us.
          </p>
        </div>

        <div className="contact-form" data-aos="fade-up">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="contact-button" data-aos="zoom-in">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
