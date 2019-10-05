import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

class App extends Component {

  getGreeting(lang){
    // console.log('holaaaaaaaa: ', lang)
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

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        
        <h1> BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />    
        
        <h1>Credit Card</h1>
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99" 
          color="white" />
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>
    );
  }
}

export default App;


