import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

emailjs.init("nqcmzWT3nhxf6gZEw");
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const message = `Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nSubject: ${e.target.subject.value}\nMessage: ${e.target.message.value}`;

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual service and template IDs.
    emailjs
      .send("service_9eehda8", "template_bhc77nt", {
        message: message,
      })
      .then((response) => {
        console.log("Email sent:", response);
        // Clear the form fields
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <div className="contact-section">

      <div className="contact">
        <div className="contactHeading ">
          <h1>Contact Us</h1>
        </div>

        <div className="contact_content">
          <div className="left">
            <div class="card contact_content_texts">
              <h2 className="">Get In Touch</h2>
              <div>
                Let's talk about everything!
              </div>
              <i class="fa fa-paper-plane"></i>
            </div>
          </div>

          <div className="contact_content_forms">
            <form onSubmit={sendEmail} className="input-icons">
              <div className="input_element">
                <i className="fa fa-user icon"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="input_element">
                <i className="fa fa-envelope icon"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="input_element">
                <i className="fa fa-comment" aria-hidden="true"></i>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="input_element">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="message"
                ></textarea>
              </div>

              <button type="submit" className="contact_btn input_element send-button">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>


            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Contact;
