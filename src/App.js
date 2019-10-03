import React, { Component } from 'react';
// import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lab-React-Training</h1>

        <h2>IdCard</h2>
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
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Inés</Greetings>

        <h2>Random Number</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h2>Box Color</h2>
        <BoxColor r={255} g={210} b={0} />
        <BoxColor r={215} g={195} b={210} />
      </div>
    );
  }
}

export default App;
