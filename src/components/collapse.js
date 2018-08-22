import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

class CollapsibleText extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false, mouseHovering: false };

    this.clickButton = this.clickButton.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  clickButton() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  handleHover() {
    this.setState({ mouseHovering: !this.state.mouseHovering });
  }

  render() {
    var color;
    if (this.state.isOpened || this.state.mouseHovering) {
      color = "white";
    } else {
      color = "gray";
    }

    var bold;
    if (this.state.isOpened) {
      bold = "bold";
    }

    return (
      <div id="collapse">
        <div
          className={color + " infobutton " + bold}
          onClick={this.clickButton}
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
          style={{ display: "inline-block" }}>
          {this.props.buttonText}
        </div>
        <Collapse isOpened={this.state.isOpened}>
          {this.props.text}
        </Collapse>
      </div>
    );
  }
}

export default CollapsibleText;