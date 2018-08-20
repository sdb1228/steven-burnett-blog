import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Instructure</h3>
          <p className="info">
            Engineering Team Lead
            <span>&bull;</span>
            <em className="date">November 2014 - Present</em>
          </p>
          <p>
            Worked on several projects within the canvas-lms application as well as lead
            a team of 3 engineers through complicated frontend applications.  Maintained
            serveral products and core features including the main notification processor
            that processes over 10 million notifications daily.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Munkee Aps</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">January 2014 - November 2014</em>
          </p>
          <p>
            Built and maintend several mobile applications for both android and ios including one
            application called Push that was featured in Tech Crunch top 10 apps of the week.  Also
            helped maintain their main IOS application called Instasize.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
