import React, { Component } from 'react';

class Subheader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textLeft: this.props.textLeft,
      textCenter: this.props.textCenter,
      textRight: this.props.textRight,
    };
  }

  render() {
    const { textLeft, textCenter, textRight } = this.state;

    return (
      <div className="subheader row bold">
        <div className="column align-left">
          {textLeft}
        </div>
        <div className="column align-center">
          {textCenter}
        </div>
        <div className="column align-right">
          {textRight}
        </div>
      </div>
    );
  }
}

export default Subheader;
