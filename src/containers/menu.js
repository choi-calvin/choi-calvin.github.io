import React, { Component } from 'react';
import './menu.css';
import isMobile from './mobile';

import { Link } from 'react-scroll'

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.onMenuButtonHover = this.onMenuButtonHover.bind(this);
  }

  onMenuButtonHover(terminalText) {
    this.props.onMenuButtonHover(terminalText);
  }

  render() {
    var smallName;
    if (!isMobile()) {
      smallName = <small>(hyunjin)</small>
    }
    return (
      <div className="col-sm-6 transparent offset-top width-full">
        <div className="centered-left-align fixed">
          <h1 className="name">Calvin{smallName}</h1>
          <h1 className="name" id="last-name">Choi</h1>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={300}>
            <HoverMenuButton text="About Me" url="#about" handleHover={this.onMenuButtonHover} />
          </Link>
          <br />
          <Link activeClass="active" to="work" spy={true} smooth={true} duration={300}>
            <HoverMenuButton text="Recent Work" url="#work" handleHover={this.onMenuButtonHover} />
          </Link>
          <br />
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={300}>
            <HoverMenuButton text="Contact Me" url="#contact" handleHover={this.onMenuButtonHover} />
          </Link>
        </div>
      </div>
    );
  }
}

class HoverMenuButton extends Component {
  constructor(props) {
    super(props);

    this.state = { mouseHovering: false };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({ mouseHovering: !this.state.mouseHovering });

    if (!this.state.mouseHovering) {
      const terminalText = this.props.text.toLowerCase().replace(" ", "-");
      this.props.handleHover(terminalText);
    } else {
      this.props.handleHover("");
    }
  }

  render() {
    let color;
    if (this.state.mouseHovering) {
      color = "white";
    } else {
      color = "rgb(150, 150, 150)";
    }

    return (
      <h2
        id="link"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
        style={{ color: color }}>
        {this.props.text}
      </h2>
    );
  }
}
