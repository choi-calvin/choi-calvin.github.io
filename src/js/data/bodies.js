import React from 'react';

const Bodies = {
  educationMain: (
    <ul>
      <li>B.S. in Computer Science and <span className="cursor has-tooltip" data-tip data-for="cogsci">Cognitive Science</span>, expected May 2021. <b>GPA: 3.85</b></li>
      <li>Dean’s List Scholar 2017, 2018, 2019</li>
      <li>Coursework: Algorithms and Complexity; Operating Systems; Databases; Machine Learning; Artificial Intelligence; Web Development; Cognitive Neuroscience</li>
    </ul>
  ),
  employmentSquare: (
    <ul>
      <li>Deployed a deep learning model to production using Google’s AI Platform, <b>increasing automation</b> of customer service by ~4%.</li>
    </ul>
  ),
  employmentDessa: (
    <ul>
      <li>Developed a Python SDK to save machine learning model artifacts to redis using Flask and Docker, used by <b>hundreds of AI researchers</b>.</li>
      <li>Integrated graphing libraries into the user interface using React to visualize parameter-metric correlations from machine learning models.</li>
    </ul>
  ),
  employmentPolicyMe: (
    <ul>
      <li>Created an end-to-end RPA pipeline using React.js, PostgreSQL, Python, Selenium, and AWS Elastic Beanstalk to automate form submissions and <b>save 20+ hours</b> of <span className="cursor has-tooltip" data-tip="This was a task that also had to be performed on the weekends, so automating it was a high priority.">weekly manual labour.</span></li>
      <li>Integrated email validation using React.js, Redux, and Kickbox to prevent fraudulent information from polluting the data pipeline.</li>
    </ul>
  ),
  employmentTA: (
    <ul>
      <li>Facilitated learning of an introductory computer science course by <span className="cursor has-tooltip" data-tip="These weekly labs were three hours in length and consisted of a lesson, assignment, and quiz."><b>leading a class</b></span> of over 30 students.</li>
      <li><b>Taught</b> fundamental concepts on data structures, algorithms, and object-oriented programming.</li>
    </ul>
  ),
  employmentCoCo: (
    <ul>
      <li>Designed and developed an Android application to manage psychological experiments for use in current <b>world-leading cognitive research</b>, <span className="cursor has-tooltip" data-tip data-for="blicket">integrating computer vision models</span> using TensorFlow Lite.</li>
    </ul>
  ),
  employmentDuncan: (
    <ul>
      <li>Rewrote a part of the pipeline for eye-tracking experiment data using pandas to improve speed efficiency of data flow by <b>10x</b>.</li>
    </ul>
  ),
  projectsMain: (
    <ul>
      <li><b>ext2:</b> Implementation of the ext2 file system from scratch, supporting file system functions such as navigation, directory creation, file linking, and corruption detection and restoral.  <i>C</i></li>
      <li><b>Color Infinity:</b> iOS game monetized with Google AdMob. Accumulated 100+ installs and a <span className="cursor has-tooltip" data-tip="Thanks mom!">5-star rating</span> on the App Store.  <i>Swift, Xcode</i></li>
      <li><span className="cursor has-tooltip" data-tip="A parody on the food delivery service SkipTheDishes, for all the non-Canadians."><b>DontSkipTheDishes:</b></span> Online dashboard of personalized food recipes based on ingredients in your fridge. Users could create accounts to log their ingredients and rate other people’s recipes.  <i>React.js, Express.js, MongoDB</i></li>
    </ul>
  ),
  languagesMain: (
    <ul>
      <li><i>Proficient:</i> Python, React.js, Javascript</li>
      <li><i>Familiar:</i> Java, C, Git, Bash, Docker</li>
      <li><i>Prior experience:</i> Kotlin, Swift, Xcode, Android Studio</li>
    </ul>
  ),
  educationRight: (
    <span className="cursor has-tooltip" data-tip="4 years in school + 1 year of internships">
      Sept 2016 – May 2021
    </span>
  ),
  dessaCenter: (
    <span className="cursor has-tooltip" data-tip data-for="dessa">
      Dessa
    </span>
  ),
};

export default Bodies;
