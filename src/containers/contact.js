import React, { Component } from 'react';
import './contact.css';
import resumeLink from '../resume-long.pdf';
import gitHubIcon from '../images/github-icon.png';
import resumeIcon from '../images/resume-icon.png';
import linkedInIcon from '../images/linkedin-icon.png';
import gitHubIconDeselected from '../images/github-icon-de.png';
import resumeIconDeselected from '../images/resume-icon-de.png';
import linkedInIconDeselected from '../images/linkedin-icon-de.png';

export class ContactContainer extends Component {
  render() {
    return (
      <div>
        <a id="contact"></a>
        <h1 className="offset">Contact</h1>
        <p>I am currently open to a software developer or research internship. Contact me and we can talk about potential work together. You can reach me at <a href="mailto:hyun20005@hotmail.com" target="_top" id="link">hyun20005@hotmail.com</a>, or through one of the links below.</p>
        <div id="image-center">
          <HoverImageButton
            url="https://github.com/hyun20005/"
            selectedImage={gitHubIcon}
            deselectedImage={gitHubIconDeselected}
            alt="github"
            handleHover={this.props.handleContactHover} />
          <HoverImageButton
            url={resumeLink}
            selectedImage={resumeIcon}
            deselectedImage={resumeIconDeselected}
            alt="resume"
            handleHover={this.props.handleContactHover} />
          <HoverImageButton
            url="https://www.linkedin.com/in/hyunjin-choi-083b32161/"
            selectedImage={linkedInIcon}
            deselectedImage={linkedInIconDeselected}
            alt="linkedin"
            handleHover={this.props.handleContactHover} />
        </div>
      </div>
    );
  }
}

class HoverImageButton extends Component {
  constructor(props) {
    super(props);

    this.state = { mouseHovering: false };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    const newHoveringState = !this.state.mouseHovering;
    this.setState({ mouseHovering: newHoveringState });

    if (newHoveringState) {
      const terminalText = this.props.alt;
      this.props.handleHover(terminalText);
    } else {
      this.props.handleHover("");
    }
  }

  render() {
    let image;
    if (this.state.mouseHovering) {
      image = this.props.selectedImage;
    } else {
      image = this.props.deselectedImage;
    }

    return <a href={this.props.url} target="_blank" style={{ textDecoration: "none" }}>
      <img onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
        src={image}
        className="center"
        alt={this.props.alt} />
    </a>;
  }
}
