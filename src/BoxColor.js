import React, { Component } from 'react';

class BoxColor extends Component {

  render() {
      const {r, g, b} = this.props;
      const divStyle = {
        backgroundColor: 'rgb('+ r + ','+  g + ',' +  b +')',
      }
    return (
        <div style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    );
  }
}

export default BoxColor;