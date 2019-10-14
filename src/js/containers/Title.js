import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title row">
        <div className="column align-left font-small">
          Toronto, ON<br />
          <a href="http://www.ccalvin.com">www.ccalvin.com</a>
        </div>
        <div className="column align-center small-caps bold font-large">
          <span className="cursor" data-tip="Legal name: Hyunjin Choi">
            Calvin Choi
          </span>
        </div>
        <div className="column align-right font-small">
          <a href="tel:647-673-5633">(647) 673-5633</a><br />
          calvinhyunchoi@gmail.com
        </div>
        <ReactTooltip place="bottom" type="dark" effect="solid"/>
      </div>
    );
  }
}

export default Title;
