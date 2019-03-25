import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  render() {
    const { img, name, onCardSelected } = this.props;
    return (
      <div className="container">
        <div className="card" onClick={onCardSelected}>
          <div className="img-container">
            <img src={img} alt="img" />
          </div>
          <div className="info">{name}</div>
        </div>
      </div>
    );
  }
}
