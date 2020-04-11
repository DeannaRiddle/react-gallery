import React, { Component } from "react";
import "/PicItem.css;";

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
        <img src={this.props.item.path} />
        /*{buttonElement}
      </div>
    );
  }
}

export default PicItem;