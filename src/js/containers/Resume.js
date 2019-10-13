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
          <Header text="Employment" />
          <Subheader
            textLeft="Machine Learning Developer"
            textCenter="Dessa"
            textRight="September 2019 – Present"
          />
          <Subheader
            textLeft="Junior Software Developer"
            textCenter="PolicyMe"
            textRight="May – July 2019"
          />
          <Subheader
            textLeft="Teaching Assistant"
            textCenter="University of Toronto"
            textRight="January – April 2019"
          />
          <Subheader
            textLeft="Android Developer"
            textCenter="Computational Cognitive Development Lab"
            textRight="September 2018 – April 2019"
          />
          <Subheader
            textLeft="Lab Data Scientist"
            textCenter="Duncan Lab"
            textRight="May – August 2018"
          />
          <Header text="Projects" />
          <Header text="Languages and Technologies" />
        </div>
      </div>
    );
  }
}

export default Resume;
