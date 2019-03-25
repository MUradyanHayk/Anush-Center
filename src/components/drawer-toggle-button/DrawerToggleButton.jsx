import React, { Component } from "react";
import "./DrawerToggleButton.scss";

export default class DrawerToggleButton extends Component {
  render() {
    return (
      <button className='drawer-toggle-button' onClick={this.props.onSideDrawerClick}>
        <div className="toggle-line" />
        <div className="toggle-line" />
        <div className="toggle-line" />
      </button>
    );
  }
}
