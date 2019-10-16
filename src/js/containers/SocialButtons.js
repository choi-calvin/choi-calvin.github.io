import React, { Component } from 'react';
import GitHub from '../../resources/images/github-icon.png';
import LinkedIn from '../../resources/images/linkedin-icon.png';
import ResumeIcon from '../../resources/images/resume-icon.png';
import Resume from '../../resources/calvin_choi_resume.pdf';
import './SocialButtons.css';

class SocialButtons extends Component {
  render() {
    return (
      <div className="social-buttons round">
        <a href="https://github.com/hyun20005" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} className="github-icon" alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/calvin-choi/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} className="linkedin-icon" alt="LinkedIn logo" />
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <img src={ResumeIcon} className="resume-icon" alt="Resume logo" />
        </a>
      </div>
    );
  }
}

export default SocialButtons;
