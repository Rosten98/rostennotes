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
          <a href="https://github.com/rosten98" target="_blank">
            <FaGithub className="icon"/>
            <span className="desktop-display">Github</span>
          </a>
          <a href="https://twitter.com/rosten98" target="_blank">
            <FaTwitter className="icon"/>
            <span className="desktop-display">Twitter</span>
          </a>
          <a>
            <FaPatreon className="icon"/>
            <span className="desktop-display">Patreon</span>
          </a>
        </div>         
      </footer>
    );
  }
}

export default Footer;