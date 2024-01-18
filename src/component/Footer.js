import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer" // style={{marginTop: "340px"}}
    >
      <div className="socialMedia">
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <InstagramIcon /> </a> 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /> </a> 
           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /> </a> 
           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /> </a>
      </div>
      <p> &copy; 2024 Anton Almishev</p>
    </div>
  );
}

export default Footer;
