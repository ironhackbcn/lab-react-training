import React, { Component } from 'react'

class Greetings extends Component {

  getLanguage = () => {
    const {lang} = this.props;
    if(lang === 'de'){
      return 'Hallo';
    } else if(lang === 'en'){
      return 'Hello';
    } else if(lang === 'fr'){
      return 'Bonjour';
    } else if(lang === 'es'){
      return 'Hola';
    }
  }

  render() {
    const{children} = this.props;
    return (
      <section>
        <p>{`${this.getLanguage()} ${children}`}</p>
      </section>
    )
  }
}

export default Greetings;
