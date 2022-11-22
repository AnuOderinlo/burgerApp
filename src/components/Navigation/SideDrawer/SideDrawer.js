import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "open"];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}>
        <div className={attachedClasses.join(" ")}>
          <Logo height="11%" />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Backdrop>
    </Aux>
  );
};

export default SideDrawer;
