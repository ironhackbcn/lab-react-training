import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard 
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">John</Greetings>
        <Greetings lang="es">María</Greetings>

      </div>
    );
  }
}

export default App;
