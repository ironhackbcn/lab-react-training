import React, { Component } from 'react'

class Greetings extends Component {
  render() {
    const { lang, children } = this.props
    return (
      <>
        <div lang={lang}>{children}</div>
      </>
    )
  }
}

export default Greetings
