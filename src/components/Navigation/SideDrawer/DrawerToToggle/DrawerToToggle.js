import React from "react";
import "./DrawerToToggle.css";

const DrawerToToggle = (props) => {
  return (
    <div className="drawerToggle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToToggle;
