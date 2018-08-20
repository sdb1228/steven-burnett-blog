import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/roundtwopicture.jpeg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a software engineer and leader who is passionate about creating software that
          changes people's lives.  I am located in Salt Lake City Utah currently working for
          a company called Instructure.  I lead a team of 3 engineers in making software that
          makes people smarter.  I am driven, hard working, and ambitous about software and
          developing new practices within the technology I am using.  I have a fast amount of
          experience in both frontend and backend technologies as well as mobile (both android and ios).
          Attached is my resume tailored towards my frontend experiences please reach out for experiences
          that are more tailored towards mobile or backend.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Steven Burnett</span>
              <br />
              <span>stevendburnett@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://docs.google.com/document/d/1ZxsXwSZbmy_c-tlBHA_rIAQEYXM5HKHhX8G5IzmIz_A/export?format=pdf" className="button" download>
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
