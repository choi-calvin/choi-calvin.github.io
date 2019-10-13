import React, { Component } from 'react';
import './Resume.css';
import Title from './Title';
import Header from './Header';
import Subheader from './Subheader';

class Resume extends Component {
  render() {
    return (
      <div className="center">
        <div className="resume round">
          <Title />
          <Header text="Education" />
          <Subheader
            textLeft="Toronto, ON"
            textCenter="University of Toronto"
            textRight="September 2016 – May 2021"
          />
        </div>
      </div>
    );
  }
}

export default Resume;
