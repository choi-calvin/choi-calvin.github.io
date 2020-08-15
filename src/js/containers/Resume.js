import React, { Component } from 'react';
import './Resume.css';
import Title from './Title';
import Header from './Header';
import Subheader from './Subheader';
import Bodies from '../data/bodies';
import Tooltips from './Tooltips';
import SocialButtons from './SocialButtons';

class Resume extends Component {
  render() {
    return (
      <div className="center">
        <div className="resume round">
          <Title />
          <Header text="Education" />
          <Subheader
            textLeft="Toronto, Canada"
            textCenter="University of Toronto"
            textRight={Bodies.educationRight}
          />
          {Bodies.educationMain}
          <Header text="Employment" />
          <Subheader
            textLeft="Machine Learning Developer"
            textCenter="Square, Inc."
            textRight="Feb – Sept 2020"
          />
          {Bodies.employmentSquare}
          <Subheader
            textLeft="Machine Learning Developer"
            textCenter={Bodies.dessaCenter}
            textRight="Sept 2019 – Feb 2020"
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
            textRight="Jan – April 2019, 2020"
          />
          {Bodies.employmentTA}
          <Subheader
            textLeft="Android Developer"
            textCenter="CoCo Development Lab"
            textRight="Sept 2018 – Apr 2019"
          />
          {Bodies.employmentCoCo}
          <Subheader
            textLeft="Lab Data Scientist"
            textCenter="Duncan Lab"
            textRight="May – Aug 2018"
          />
          {Bodies.employmentDuncan}
          <Header text="Projects" />
          {Bodies.projectsMain}
          <Header text="Languages and Technologies" />
          {Bodies.languagesMain}
        </div>
        <SocialButtons />
        <Tooltips />
      </div>
    );
  }
}

export default Resume;
