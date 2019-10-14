import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import Cogsci from '../../resources/images/cogsci.svg';
import './Tooltips.css';

class Tooltips extends Component {
  render() {
    return (
      <div className="tooltips">
        <ReactTooltip place="bottom" type="dark" effect="solid" className="react-tooltip"/>
        <ReactTooltip id="cogsci" place="bottom" type="dark" effect="solid" className="react-tooltip">
          I strongly believe that ideas from psychology and neuroscience can benefit current AI research.
          A lot of my non-technical coursework revolves around how the brain forms neural connections to learn new things.<br />
          <img src={Cogsci} className="cogsci-img" alt="A diagram showing the disciplines of cognitive science." />
        </ReactTooltip>
        <ReactTooltip id="dessa" place="bottom" type="dark" effect="solid" className="react-tooltip">
          Dessa creates products to build applications for machine learning at scale.<br />
          You may know them for RealTalk, a speech synthesis model that recreated the voice of podcast host Joe Rogan.
        </ReactTooltip>
      </div>
    );
  }
}

export default Tooltips;
