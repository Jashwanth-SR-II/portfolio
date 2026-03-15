import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Links from "./Links";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ggtdc8i",
      "template_i3vhou1",
      form.current,
      "klDRo0CZrb2siiCrV"
    ).then(
      () => alert("Message sent successfully!"),
      () => alert("Failed to send message")
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section portfolio-section reveal">

      <div className="container">

        <div className="text-center mb-4">
          <h2 className="section-title brand-gradient">Contact Me</h2>
          <p className="section-subtitle">
            Send a message or connect with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">

          <div className="col-lg-6">

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="portfolio-input mb-3"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className=" portfolio-input mb-3"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="portfolio-textarea mb-3"
                required
              ></textarea>

              <button className="btn-submit w-100">
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Links Section */}
        <div className="mt-5">
          <Links />
        </div>

      </div>

    </section>
  );
}

export default Contact;