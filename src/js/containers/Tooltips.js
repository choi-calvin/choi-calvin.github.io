import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class Tooltips extends Component {
  render() {
    return (
      <div className="tooltips">
        <ReactTooltip place="bottom" type="dark" effect="solid"/>
      </div>
    );
  }
}

export default Tooltips;
