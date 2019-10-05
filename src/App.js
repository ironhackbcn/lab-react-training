import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

class App extends Component {

  getGreeting(lang){
    // console.log('holaaaaaaaa: ', lang)
    const allLang = ["de","en","es","fr"];
    const allGreetings = ["Hallo", "Hello", "Hola", "Bonjour"];
    console.log("the posittion: " + allGreetings[allLang.indexOf(lang)]);
    switch(lang){
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      default : 
        return 'noe xx`x'
    }
};

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard 
          firstName="John" 
          lastName="Doe" 
          gender="male" 
          height="178" 
          birth="Tue Jul 14 1992" 
          picture="https://randomuser.me/api/portraits/men/44.jpg" />

        <IdCard 
          firstName="Dolores" 
          lastName="Obrien" 
          gender="female" 
          height="172" 
          birth="Tue May 11 1993" 
          picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        
          <Greetings 
            lang="es" greeting = {this.getGreeting} children="Ludwig"> 
          </Greetings>

          <Greetings 
            lang="en" greeting = {this.getGreeting} children="François">
          </Greetings>
      </div>
    );
  }
}

export default App;


