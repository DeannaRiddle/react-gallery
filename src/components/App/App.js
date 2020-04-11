import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PicList from "../PicList/PicList";
//import PicItem from "../PicItem/PicItem";

class App extends Component {
  state = {
    picList: [],
  };
  componentDidMount() {
    this.getPic();
  }
  getPic() {
    axios
      .get("/gallery ")
      .then((response) => {
        console.log(response.data);
        this.setState({
          picList: response.data,
        });
      })
      .catch((err) => console.warn(err));
  }
  updatePic = (id) => (event) => {
    console.log(id);
    axios
      .put(`/gallery/complete/${id}`)
      .then((response) => {
        this.getPic();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>My Life Gallery</p>
        <PicList picList={this.state.picList} />
      </div>
    );
  }
}

export default App;
