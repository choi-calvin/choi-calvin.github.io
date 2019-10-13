import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div className="header bold small-caps">
        {text}
      </div>
    );
  }
}

export default Header;
