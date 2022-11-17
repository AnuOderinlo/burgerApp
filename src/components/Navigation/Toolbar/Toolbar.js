import React from "react";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <div>MENU</div>
      <Logo />
      <NavigationItems/>
    </header>
  );
};

export default Toolbar;
