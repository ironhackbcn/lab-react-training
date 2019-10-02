import React, { Component } from 'react';

class Greetings extends Component {

  render() {
    const { lang, children } = this.props;
    return (
      <div className="Greetings">
          <p lang={lang}>{children}</p>
      </div>
    );
  }
}

export default Greetings;
