import React from "react";
import {
  FaGithub,
  FaTwitter
} from "react-icons/lib/fa";

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/sdb1228">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/sdb1228">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
