import React from 'react';

const Bodies = {
  educationMain: (
    <ul>
      <li>B.S. in Computer Science and <span className="cursor has-tooltip" data-tip data-for="cogsci">Cognitive Science</span>, expected May 2021. <b>GPA: 3.85</b></li>
      <li>Coursework: Operating Systems; Databases; Machine Learning; Artificial Intelligence; Web Development; Cognitive Neuroscience</li>
    </ul>
  ),
  employmentDessa: (
    <ul>
      <li>Developed a Python SDK to save machine learning model artifacts to redis using Flask and Docker, used by <b>hundreds of AI researchers</b>.</li>
      <li>Integrated graphing libraries into the user interface using React to visualize parameter-metric correlations from machine learning models.</li>
      <li>Managed automated builds for <b>product releases</b> via Docker, Jenkins, and Google Container Registry.</li>
    </ul>
  ),
  employmentPolicyMe: (
    <ul>
      <li>Created an end-to-end RPA pipeline using React.js, PostgreSQL, Python, Selenium, and AWS Elastic Beanstalk to automate form submissions and <b>save 20+ hours</b> of weekly manual labour.</li>
      <li>Integrated email validation using React.js, Redux, and Kickbox to prevent fraudulent information from polluting the data pipeline.</li>
    </ul>
  ),
  employmentTA: (
    <ul>
      <li>Facilitated learning of an introductory computer science course by <b>leading a class</b> of over 30 students.</li>
      <li><b>Taught</b> fundamental concepts on data structures, algorithms, and object-oriented programming.</li>
    </ul>
  ),
  employmentCoCo: (
    <ul>
      <li>Designed and developed an Android application to manage psychological experiments for use in current <b>world-leading cognitive research</b>, integrating computer vision models using TensorFlow Lite.</li>
    </ul>
  ),
  employmentDuncan: (
    <ul>
      <li>Rewrote a part of the pipeline for eye-tracking experiment data using pandas to improve speed efficiency of data flow by <b>10x</b>.</li>
      <li>Managed data collection using Amazon’s MTurk and the AWS SDK.</li>
    </ul>
  ),
  projectsMain: (
    <ul>
      <li><b>ext2:</b> Implementation of the ext2 file system from scratch, supporting file system functions such as navigation, directory creation, file linking, and corruption detection and restoral.  <i>C</i></li>
      <li><b>Color Infinity:</b> iOS game monetized with Google AdMob. Accumulated 100+ installs and a 5-star rating on the App Store.  <i>Swift, Xcode</i></li>
      <li><b>DontSkipTheDishes:</b> Online dashboard of personalized food recipes based on ingredients in your fridge. Users could create accounts to log their ingredients and rate other people’s recipes.  <i>React.js, Express.js, MongoDB</i></li>
    </ul>
  ),
  languagesMain: (
    <ul>
      <li>Python, React.js, Javascript, Java, C (proficient)</li>
      <li>Bash, Docker (knowledgeable)</li>
      <li>Swift, Xcode, Android Studio (prior experience)</li>
      <li>Git, particularly with GitHub</li>
    </ul>
  ),
};

export default Bodies;
