import React, { Component } from "react";
import "./CardList.scss";
import Card from "../card/Card";
import english from "../../img/svgs/united-kingdom.svg";
import drum from "../../img/svgs/drum.svg";
import france from "../../img/svgs/france.svg";
import italy from "../../img/svgs/italy.svg";
import karaoke from "../../img/svgs/karaoke.svg";
import maths from "../../img/svgs/maths.svg";
import russia from "../../img/svgs/russia.svg";
import violin from "../../img/svgs/violin.svg";
import flute from "../../img/svgs/flute.svg";
import engineer from "../../img/svgs/engineer.svg";
import creativity from "../../img/svgs/creativity.svg";
import think from "../../img/svgs/think.svg";
import model from "../../img/svgs/model.svg";
import piano from "../../img/svgs/piano.svg";

export default class CardList extends Component {
  getImg = imgName => {
    // const pattern = /img\/svgs\/drum.svg$/;
    switch (true) {
      case /img\/svgs\/united-kingdom.svg$/.test(imgName):
        return english;
      case /img\/svgs\/drum.svg$/.test(imgName):
        return drum;
      case /img\/svgs\/france.svg$/.test(imgName):
        return france;
      case /img\/svgs\/italy.svg$/.test(imgName):
        return italy;
      case /img\/svgs\/karaoke.svg$/.test(imgName):
        return karaoke;
      case /img\/svgs\/maths.svg$/.test(imgName):
        return maths;
      case /img\/svgs\/russia.svg$/.test(imgName):
        return russia;
      case /img\/svgs\/flute.svg$/.test(imgName):
        return flute;
      case /img\/svgs\/engineer.svg$/.test(imgName):
        return engineer;
      case /img\/svgs\/creativity.svg$/.test(imgName):
        return creativity;
      case /img\/svgs\/think.svg$/.test(imgName):
        return think;
      case /img\/svgs\/violin.svg$/.test(imgName):
        return violin;
      case /img\/svgs\/model.svg$/.test(imgName):
        return model;
      case /img\/svgs\/piano.svg$/.test(imgName):
        return piano;
      default:
        return null;
    }
  };
  renderCard = (cards, onCardSelected) => {
    const arr = cards.map(item => {
      return (
        <Card
          img={this.getImg(item.img)}
          name={item.name}
          onCardSelected={() => onCardSelected(item.id)}
          key={item.id}
        />
      );
    });
    return arr;
  };
  render() {
    const { cards, onCardSelected } = this.props;
    return (
      <div className="card-container">
        {this.renderCard(cards, onCardSelected)}
      </div>
    );
  }
}
