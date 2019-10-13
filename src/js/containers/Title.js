import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title row">
        <div className="column align-left">
          Toronto, ON<br />
          www.ccalvin.com
        </div>
        <div className="column align-center bold small-caps">
          CALVIN CHOI
        </div>
        <div className="column align-right">
          (647) 673-5633<br />
          calvinhyunchoi@gmail.com
        </div>
      </div>
    );
  }
}

export default Title;
