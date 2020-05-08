import React, { Component } from "react";
import Stuff from "../src/components/Stuff";
import Suitcase from "../src/components/Suitcase";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    list: [
      { id: 1, item: "shirt" },
      { id: 2, item: "pants" },
      { id: 3, item: "sunscreen" }
    ],
    suitcaseList: []
  };

  move =(id) => {
    const test = this.state.list.find(item => item.id === id);
    const filter = this.state.list.filter(item => item.id !== id);
    this.setState({ suitcaseList: [...this.state.suitcaseList, test], list: filter });
  }

  render() {
    console.log(this.state.suitcaseList);
    console.log("list:", this.state.list);
    return (
      <div>
        <Stuff list={this.state.list} moveList = {this.move}/>
        <Suitcase toPack = {this.state.suitcaseList}/>
      </div>
    );
  }
}

export default App;
