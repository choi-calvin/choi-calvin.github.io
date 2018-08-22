import React, { Component } from 'react';
import './terminal.css';
import BlinkingText from '../components/blinking-text';

export class TerminalContainer extends Component {
  render() {
    const text = this.props.text;
    return (
      <div className="fixed-top terminal">
        &nbsp;> {text} <BlinkingText text="_" />
      </div>
    );
  }
}
