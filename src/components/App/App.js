import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PicList from "../PicList/PicList";

class App extends Component {
state = {


}
  componentDidMount() {

  }
  this.getPic(){
    axios
    .get('/pics ')
    .then (response) => {
      console.log(response.data);
    })
    .catch((err) => console.warn(err));
  }
  updatePic = (id) => (event) => {


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
