import React, { Component } from 'react';
import './pane.css';
import ColoredLine from '../components/colored-line';
import { AboutContainer } from './about';
import { WorkContainer } from './work';
import { ContactContainer } from './contact';
import isMobile from './mobile';

import { Element } from 'react-scroll'

export class PaneContainer extends Component {
  constructor(props) {
    super(props);

    this.onContactButtonHover = this.onContactButtonHover.bind(this);
  }

  onContactButtonHover(terminalText) {
    this.props.onContactButtonHover(terminalText);
  }

  render() {
    var filler;
    if (isMobile()) {
      filler = <div></div>;
    } else {
      filler = <div id="filling"></div>;
    }

    return (
      <div className="col-sm-6">
        {filler}
        <Element name="about">
          <AboutContainer />
        </Element>
        <ColoredLine color="white" width="95%" height="1" />
        <Element name="work">
          <WorkContainer />
        </Element>
        <ColoredLine color="white" width="95%" height="1" />
        <Element name="contact">
          <ContactContainer handleContactHover={this.onContactButtonHover} />
        </Element>
      </div>
    );
  }
}
