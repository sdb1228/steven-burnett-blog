import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/prettyrandom.png";
import Console from "../assets/images/portfolio/amazon.png";
import Judah from "../assets/images/portfolio/canvaslms.png";
import IntoTheLight from "../assets/images/portfolio/SoccerLC_v4_outlined.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://itunes.apple.com/us/app/pretty-random-random-number-generator/id1126199480?mt=8" title="">
                <img alt="" src={Coffee} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Pretty Random</h5>
                    <p>Random Number Generator</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.amazon.com/Instructure-Canvas/dp/B073YNGXMR/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1534728676&sr=1-1&keywords=canvas" title="">
                <img alt="" src={Console} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Alexa</h5>
                    <p>Alexa Skill for canvas-lms</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.canvaslms.com/" title="">
                <img alt="" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Canvas-LMS</h5>
                    <p>Discussions/Permissions/Announcements</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://github.com/sdb1228/SoccerLCMobile" title="">
                <img alt="" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>SoccerLC</h5>
                    <p>A schedule tracking app for local soccer facilities in Utah</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
