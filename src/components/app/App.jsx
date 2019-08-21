import React, { Component } from "react";
import "./App.scss";
import Header from "../header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import CardList from "../card-list/CardList";
import { service } from "../../service/service";
import CardPage from "../card-page/CardPage";
import HomePage from "../home-page/HomePage";
import SideDrawer from "../side-drawer/SideDrawer";
import BackDrop from "../back-drop/BackDrop";

class App extends Component {
  minId = 100;
  state = {
    cards: service(),
    sideDrawerOpen: false,
    underLine: null,
    goHome: true
  };
  clearUnderLine = () => {
    this.setState({
      goHome: true
    });
  };
  changeUnderLine = index => {
    this.setState({
      underLine: index,
      goHome: false
    });
  };

  onBackDropClick = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  onSideDrawerClick = () => {
    this.setState(state => {
      return {
        sideDrawerOpen: !state.sideDrawerOpen
      };
    });
  };

  render() {
    let backDrawer;
    if (this.state.sideDrawerOpen) {
      backDrawer = <BackDrop onBackDropClick={this.onBackDropClick} />;
    }
    return (
      <div className="app">
        <BrowserRouter>
          <Header
            clearUnderLine={this.clearUnderLine}
            onSideDrawerClick={this.onSideDrawerClick}
            onBackDropClick={this.onBackDropClick}
            changeUnderLine={this.changeUnderLine}
            goHome={this.state.goHome}
            underLine={this.state.underLine}
          />
          {backDrawer}
          <SideDrawer
            show={this.state.sideDrawerOpen}
            onSideDrawerClick={this.onSideDrawerClick}
            onBackDropClick={this.onBackDropClick}
            changeUnderLine={this.changeUnderLine}
            goHome={this.state.goHome}
            underLine={this.state.underLine}
          />
          {/* <CardContainer cards={this.state.cards} /> */}
          <main className="main">
            <Route path="/" exact component={HomePage} />

            <Route
              path="/lessons"
              exact
              render={() => <CardList cards={this.state.cards} />}
            />
            <Route path="/about" render={() => <div>Մեր մասին</div>} />
            <Route path="/contact" render={() => <div>հետադարձ կապ</div>} />
            <Route
              path="/lessons/:id"
              render={({ match, history }) => {
                const { id } = match.params;
                return <CardPage card={this.state.cards[id]} />;
              }}
            />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

