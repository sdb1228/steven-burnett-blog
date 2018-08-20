import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        My skills are language agnostic.  My drive in a career is solve hard problems
        regardless of the language, however below are my languages I have used the most
        recent.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand css" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Golang</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Rails</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Ruby</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Nodejs</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
