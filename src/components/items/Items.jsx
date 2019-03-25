import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

class Items extends Component {
  render() {
    let className1 = "li";
    let className2 = "li";
    let className3 = "li";
    if (!this.props.goHome) {
      switch (this.props.underLine) {
        case 0:
          className1 += " underline";
          break;
        case 1:
          className2 += " underline";
          break;
        case 2:
          className3 += " underline";
          break;
        default:
          className1 = className2 = className3 = "li";
      }
    }
    return (
      <div className="items">
        <ul>
          <li
            className={className1}
            onClick={() => {
              this.props.onBackDropClick();
              this.props.changeUnderLine(0);
            }}
          >
            <Link to="/lessons">Դասընթացներ</Link>
          </li>
          <li
            className={className2}
            onClick={() => {
              this.props.changeUnderLine(1);
              this.props.onBackDropClick();
            }}
          >
            <Link to="/about">Մեր մասին</Link>
          </li>
          <li
            className={className3}
            onClick={() => {
              this.props.onBackDropClick();
              this.props.changeUnderLine(2);
            }}
          >
            <Link to="/contact">Հետադարձ Կապ</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Items;
