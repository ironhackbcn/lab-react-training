import React, { Component } from "react";

class Rating extends Component {
  render() {
    const { children } = this.props;

    const numberChildren = Math.round(children);

    const text = "★★★★★☆☆☆☆☆";
    const stars = text.slice(5 - numberChildren).slice(1, -numberChildren);

    return (
      <div>
        <div style={{ fontSize: "40px" }}>
          {numberChildren}
          {stars}
        </div>
      </div>
    );
  }
}

export default Rating;
