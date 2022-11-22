import React from "react";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import DrawerToToggle from "../SideDrawer/DrawerToToggle/DrawerToToggle";

import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    // <Aux>
    //   <Backdrop show>
    <header className="toolbar">
      <DrawerToToggle clicked={props.toggleClicked} />

      <Logo height="80%" />
      <div className="desktopOnly">
        <NavigationItems />
      </div>
    </header>
    //   </Backdrop>
    // </Aux>
  );
};

export default Toolbar;
