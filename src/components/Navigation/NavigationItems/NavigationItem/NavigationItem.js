import React from "react";

import "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <li className="navigationItem">
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default NavigationItem;
