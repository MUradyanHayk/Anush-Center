import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CardPage.scss";
// import CardList from "../card-list/CardList";

const CardPage = ({card}) => {
  
  return (
    <div className="card-page">
      <div>name is {card.name}</div>
      <div>id is {card.id}</div>
    </div>
  );
};
export default withRouter(CardPage);
