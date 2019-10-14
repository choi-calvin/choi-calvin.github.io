import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './Resume.css';
import Title from './Title';
import Header from './Header';
import Subheader from './Subheader';
import Bodies from '../data/bodies';

class Resume extends Component {
  render() {
    const educationRight = (
      <span className="cursor has-tooltip" data-tip="4 years in school + 1 year of internships">
        September 2016 – May 2021
      </span>
    );

    return (
      <div className="center">
        <div className="resume round">
          <Title />
          <Header text="Education" />
          <Subheader
            textLeft="Toronto, ON"
            textCenter="University of Toronto"
            textRight={educationRight}
          />
          {Bodies.educationMain}
          <Header text="Employment" />
          <Subheader
            textLeft="Machine Learning Developer"
            textCenter="Dessa"
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
        <ReactTooltip place="bottom" type="dark" effect="solid"/>
      </div>
    );
  }
}

export default Resume;
