import React, { Component } from "react";

class PicItem extends Component {
  render() {
    let buttonElement = <div></div>;

    if (!this.props.item.complete) {
      buttonElement = (
        <button onClick={this.props.updatePic(this.props.item.id)}>
          Complete!
        </button>
      );
    }
    return (
      <div className="PicItem-pic">
        <p>{this.props.item.pic}</p>
        {buttonElement}
      </div>
    );
  }
}

export default PicItem;
