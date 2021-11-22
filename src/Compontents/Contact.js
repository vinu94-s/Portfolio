import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
      <p>
          Phone : <span>+91 7760599460</span>
        </p>
      <p>
          Email : <span>vinurajsv@gmail.com</span>
        </p>
        
        
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/vinu-raj-387039176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/vinu94-s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
         
        </div>
      </div>
    </Element>
  );
};

export default Contact;