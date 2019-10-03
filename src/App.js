import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lab-React-Training</h1>

        <h2>IdCard</h2>
        {/* TODO: Use the IdCard component */}
        <div>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>

        <h2>Greetings</h2>
        {/* TODO: Use the Greetings component */}

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Inés</Greetings>

        <h2>Random Number</h2>
        {/* <Greetings lang="es">Inés</Greetings> */}

        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    );
  }
}

export default App;
