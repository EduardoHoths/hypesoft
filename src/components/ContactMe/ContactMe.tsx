// React
import { useState } from "react";

// React Icons
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import {  CiMail } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";

// Styles
import { ContactForm, ContactMeStyled, Contacts } from "./Styles";

// React Scroll
import { Element } from "react-scroll";

export function ContactMe() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Element name="contact" data-testid="contact-me">
      <ContactMeStyled>
        <ContactForm>
          <h4>Let me know here.</h4>

          <form>
            <div>
              <input
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Subjects"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="btn purple">
              SEND MESSAGE <FiSend size={24} />
            </button>
          </form>
        </ContactForm>

        <Contacts>
          <img src="/Dot-horizontal.svg" className="dots" />

          <h4>Get in Touch</h4>

          <div>
            <div>
              <SlLocationPin size={32} />
            </div>

            <span>Itaquaquecetuba - SP, Brazil</span>
          </div>
          <div>
            <div>
              <CiMail size={32} />
            </div>
            <span>eduardo.hoths@gmail.com</span>
          </div>
          <div>
            <div>
              <BsTelephone size={28} />
            </div>
            <span>+55 (11) 96013-3029</span>
          </div>

          <footer>
            <a href="https://www.linkedin.com/in/eduardohoths/" data-testid="linkedin">
              <BsLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/eduardo.hoths/" data-testid="instagram">
              <AiFillInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/eduardohoths/" data-testid="facebook">
              <ImFacebook size={20} />
            </a>
            <a href="https://github.com/eduardohoths/" data-testid="github">
              <BsGithub size={20} />
            </a>
          </footer>
        </Contacts>
      </ContactMeStyled>
    </Element>
  );
}
