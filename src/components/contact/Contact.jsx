import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* Email Option */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>waheed47623@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=waheed47623@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>

          </article>


          {/* WhatsApp Option */}
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" style={{ color: "#25D366" }} />
            <h4>WhatsApp</h4>
            <h5>+92 3443634794</h5>
            <a
              href="https://wa.me/923443634794"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Optional Form */}
        <form action="https://formsubmit.co/waheed47623@gmail.com" method="POST">
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>

    </section>
  );
};

export default Contact;
