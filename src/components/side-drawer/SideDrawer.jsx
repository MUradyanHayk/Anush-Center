import React, { Component } from "react";
import "./SideDrawer.scss";
import Items from "../items/Items";

export default class SideDrawer extends Component {
  render() {
    let className = "side-drawer";
    if (this.props.show) {
      className += " open";
    }
    return (
      <div className={className}>
        <Items
          onBackDropClick={this.props.onBackDropClick}
          changeUnderLine={this.props.changeUnderLine}
          goHome={this.props.goHome}
          underLine={this.props.underLine}
        />
      </div>
    );
  }
}
