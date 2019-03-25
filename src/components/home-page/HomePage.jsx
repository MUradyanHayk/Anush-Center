import React, { Component } from "react";
import "./HomePage.scss";
import idea from "../../img//svgs/innovation.svg";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>ԱՆՈՒՇ ՈՒսումնական կենտրոն</h1>
        <div className="front">
          <div className="text">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium quae laboriosam quidem impedit dignissimos, reiciendis
              sapiente veniam odit dolor tenetur maiores incidunt, iure optio
              cum veritatis ullam vitae eos similique!Voluptatibus esse dolorum
              suscipit officiis facilis cumque ex! Quo vero voluptatem beatae
              facere quae earum assumenda iusto, repudiandae tenetur recusandae
              ea! Rerum optio iste, modi quibusdam laudantium cupiditate eos
              molestiae.
            </p>
          </div>
          <img src={idea} alt="img" />
        </div>
      </div>
    );
  }
}
