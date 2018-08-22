import React, { Component } from 'react';
import './work.css';
import CollapsibleText from '../components/collapse';

export class WorkContainer extends Component {
  render() {
    const eyetrackingText = "Eye tracking is a common type of study in the field of psychology and is a growing means of \
    obtaining data. Measurements on the eye's gazes, fixations, and blinks are captured and recorded using an eye \
    tracking device, then outputted into data. This data is often large (over dozens of gigabytes, depending on the \
    study) and difficult to interpret.";

    const teamText = "Although I was on the back-end for the majority of the project, we were required to know of all \
    the functionality in both ends, as well as how they connected. Because of time restraints, I shifted over to help \
    build the UI in the last portion of the project.";

    return (
      <div>
        <a id="work"></a>
        <h1 className="offset">Work</h1>
        <h3>Duncan Lab</h3>
        <p>I worked at the <a href="http://duncanlab.org/" id="link" target="_blank">Duncan Lab</a> the summer of 2018.
          Along with a partner and graduate students in the lab, I built a Python script to read, run calculations on, and
          output dataframes from eye tracking experiments in psychology.</p>
        <CollapsibleText buttonText="Eye tracking experiments?" text={eyetrackingText} />
        <p>I also built a script to publish Qualification HIT's for Amazon's MTurk using Amazon Web Services (AWS), as well
          as a step-by-step guide to use the script. The guide was written for members of the lab with little programming
          experience.</p>
        <h3>Color Infinity!</h3>
        <p>I learned and created an iOS game from scratch. I designed the UI and all the resources with image editing software. I also hooked up
          Google's AdMob to monetize the app with banner and video Ads, and included In-App Purchases to
          enhance the game experience. You can preview and download the app <a href="https://itunes.apple.com/app/id1408051434" target="_blank" id="link">here</a> to beat my high score <small>(140, by the way)</small>.</p>
        <h3>Image Tagger</h3>
        <p>Image Tagger was an academic project that I did with three other team members, and was my first experience with
          working in a team environment. We split up members into the front-end and back-end and collaborated on the same
          project through GitHub and continuous communication.</p>
        <CollapsibleText buttonText="Were you on the front-end or back-end?" text={teamText} />
        <p><strong>View my resume at the bottom for more.</strong></p>
      </div>
    );
  }
}
