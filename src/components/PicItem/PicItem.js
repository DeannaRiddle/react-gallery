import React, { Component } from "react";
import "./PicItem.css";

class PicItem extends Component {
  state = {
    picToggle: true,
  };
  toggleImage = (event) => {
    this.setState({
      picToggle: !this.state.picToggle,
    });
  };
  render() {
    const picElement = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );
    if (!this.state.picToggle) {
      picElement = <p>{this.props.item.description}</p>;
    }

    return (
      <div className="picItem-block">
        <div onClick={this.toggleImage}>{picElement}</div>
        <button onClick={this.props.likePic(this.props.item.id)}>Like</button>
        <p>{this.props.item.likes} People like this pic!</div>
      </div>
    );
  }
}

export default PicItem;
