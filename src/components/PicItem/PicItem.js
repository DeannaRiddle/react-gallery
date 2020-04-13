import React, { Component } from "react";
import "./PicItem.css";

class PicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    countLoves = () => {
      if (this.state.count < 1) {
        return this.state.description;
      }
    };
  }
  render() {
    let btnLove = <div className="btnLove"></div>;
    let btnInfo = <div className="btnInfo"></div>;

    if (!this.props.item.count) {
      btnLove = <button onClick={this.props}>Love It!</button>;
      btnInfo = <button onClick={this.countLoves}>Pic Info</button>;
    }

    //console.log(this.props.item);
    return (
      <div className="PicItem-pic">
        <img src={this.props.item.path} alt=" " />
        {btnLove}
      </div>
    );
  }
}

export default PicItem;
