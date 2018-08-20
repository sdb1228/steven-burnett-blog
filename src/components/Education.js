import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Utah</h3>
          <p className="info">
            Bachelors in Computer Science
            <span>&bull;</span>
            <em className="date">May 2015</em>
          </p>

          <p>
            Graduated from the University of Utah in Computer Science.  Course load included
            Database systems, Operating systems, Web development, Mobile development, complex algorithms
            and data structures, Networks, Network Security, and Scientific Computing.  Completed a capstone
            with 3 other engineers and presented it to a panel of industry leading judges.  Code for the project
            can be found at https://github.com/TheLoons.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
