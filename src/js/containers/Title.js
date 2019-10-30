import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title row">
        <div className="column align-left font-small">
          Toronto, ON<br />
          <span className="cursor has-tooltip" data-tip="Click for recursion.">
            <a href="http://www.ccalvin.com">www.ccalvin.com</a>
          </span>
        </div>
        <div className="column align-center small-caps bold font-large">
          <span className="cursor has-tooltip" data-tip="Legal name: Hyunjin Choi">
            Calvin Choi
          </span>
        </div>
        <div className="column align-right font-small">
          (647) 673-5633<br />
          calvinhyunchoi@gmail.com
        </div>
      </div>
    );
  }
}

export default Title;
