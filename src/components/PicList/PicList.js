import React, { Component } from "react";
import PicItem from "../PicItem/PicItem";

class PicList extends Component {
  render() {
    const picArray = this.props.picList.map((item, index) => {
      return (
        <PicItem key={index} item={item} updatePic={this.props.updatePic} />
      );
    });
    return <div>{picArray}</div>;
  }
}

export default PicList;
