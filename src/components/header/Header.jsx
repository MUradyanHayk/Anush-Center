import React, { Component } from "react";
import "./Header.scss";
import img from "../../img/hat.png";
import { Link } from "react-router-dom";
import DrawerToggleButton from "../drawer-toggle-button/DrawerToggleButton";
import Items from "../items/Items";
class Header extends Component {
  
  render() {
    return (
      <header className="header">
        <div className="toggle">
          <DrawerToggleButton
            onSideDrawerClick={this.props.onSideDrawerClick}
          />
        </div>
        <div className="logo" onClick={this.props.clearUnderLine}>
          <Link to="/">
            <img src={img} alt="logo" />
            <h1>ԱՆՈՒՇ</h1>
          </Link>
        </div>
        <div className="spacer" />
        <Items
          changeUnderLine={this.props.changeUnderLine}
          goHome={this.props.goHome}
          underLine={this.props.underLine}
          onBackDropClick={this.props.onBackDropClick}
        />
      </header>
    );
  }
}

export default Header;
