import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title row">
        <div className="column align-left font-small">
          Toronto, ON<br />
          www.ccalvin.com
        </div>
        <div className="column align-center small-caps bold font-large">
          Calvin Choi
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
