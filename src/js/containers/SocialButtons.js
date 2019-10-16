import React, { Component } from 'react';
import GitHub from '../../resources/images/github-icon.png';
import LinkedIn from '../../resources/images/linkedin-icon.png';
import './SocialButtons.css';

class SocialButtons extends Component {
  render() {
    return (
      <div className="social-buttons round">
        <a href="https://github.com/hyun20005">
          <img src={GitHub} className="github-icon" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/calvin-choi/">
          <img src={LinkedIn} className="linkedin-icon" alt="LinkedIn logo" />
        </a>
      </div>
    );
  }
}

export default SocialButtons;
