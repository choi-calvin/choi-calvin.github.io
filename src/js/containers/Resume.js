import React, { Component } from 'react';
import './Resume.css';
import Title from './Title';
import Header from './Header';
import Subheader from './Subheader';
import Bodies from '../data/bodies';
import Tooltips from './Tooltips';

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
            textRight={Bodies.educationRight}
          />
          {Bodies.educationMain}
          <Header text="Employment" />
          <Subheader
            textLeft="Machine Learning Developer"
            textCenter={Bodies.dessaCenter}
            textRight="September 2019 – Present"
          />
          {Bodies.employmentDessa}
          <Subheader
            textLeft="Junior Software Developer"
            textCenter="PolicyMe"
            textRight="May – July 2019"
          />
          {Bodies.employmentPolicyMe}
          <Subheader
            textLeft="Teaching Assistant"
            textCenter="University of Toronto"
            textRight="January – April 2019"
          />
          {Bodies.employmentTA}
          <Subheader
            textLeft="Android Developer"
            textCenter="CoCo Development Lab"
            textRight="September 2018 – April 2019"
          />
          {Bodies.employmentCoCo}
          <Subheader
            textLeft="Lab Data Scientist"
            textCenter="Duncan Lab"
            textRight="May – August 2018"
          />
          {Bodies.employmentDuncan}
          <Header text="Projects" />
          {Bodies.projectsMain}
          <Header text="Languages and Technologies" />
          {Bodies.languagesMain}
        </div>
        <Tooltips />
      </div>
    );
  }
}

export default Resume;
