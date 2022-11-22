import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState((preState) => {
      return { showSideDraw: !preState.showSideDraw };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDraw} closed={this.SideDrawerClosedHandler} />
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
