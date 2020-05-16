import React, { Component } from 'react';
import { FaGithub, FaTwitter, FaPatreon } from "react-icons/fa";

class Footer extends Component {
  render() {
    return(
      <footer>
        <p className="wrapper">
          Created and Designed by <a href="https://twitter.com/rosten98">@Rosten98</a>
        </p>
        <div className="icons wrapper">
          <FaGithub className="icon"/>
          <span className="desktop-display">Github</span>
          <FaTwitter className="icon"/>
          <span className="desktop-display">Twitter</span>
          <FaPatreon className="icon"/>
          <span className="desktop-display">Patreon</span>
        </div>         
      </footer>
    );
  }
}

export default Footer;