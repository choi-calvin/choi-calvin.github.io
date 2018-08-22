import React, { Component } from 'react';
import './about.css';
import CollapsibleText from '../components/collapse';

export class AboutContainer extends Component {
  render() {
    const cognitiveScienceText = "Cognitive Science is the interdisciplinary study of the mind and its processes from the intersection of six major fields: Philosophy, Psychology, Anthropology, Linguistics, Neuroscience, and Artificial Intelligence.";
    const websiteText = "Yup. This website was built and published with React.js, Bootstrap, CSS, and HTML. It took three weeks from self-learning the necessary languages, to designing the UI, to buying the domain.";

    return (
      <div>
        <a id="about">
          <h1 className="offset">About</h1>
        </a>
        <p>Hi, my name is Calvin (<smaller>legal:</smaller> Hyunjin). I am currently a third year student at the
          University of Toronto completing my Bachelor of Science in Computer Science and Cognitive Science.</p>
        <CollapsibleText buttonText="What is Cognitive Science?" text={cognitiveScienceText} />
        <p>I hope to further bridge the gap between Artificial Intelligence and Psychology as I believe that many useful
          applications can arise out of this endeavour. As a Cognitive Science Major and Computer Science Specialist,
            I am in the best direction headed towards my goal.</p>
        <p>When I'm not studying for school, I like to spend my time learning more programming skills and deepening
          my understanding of concepts that I already know. I'm often working on independent projects on the side. In
            fact, you're scrolling through one right now!</p>
        <CollapsibleText buttonText="Do you mean this website?" text={websiteText} />
      </div>
    );
  }
}