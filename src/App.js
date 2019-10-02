import React, { Component } from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import RandomNumber from './RandomNumber';
import BoxColor from './BoxColor';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div className="name-card">
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div className="name-card">
        <IdCard 
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>

        <h1>Greetings</h1>
        <Greetings lang="de">
          <p>Alemán</p>
        </Greetings>
        <Greetings lang="fr">
          <p>Francés</p>
        </Greetings>

        <h1>RandomNumber</h1>
        <div className="random">
          <div className="boxed-text"><RandomNumber min={1} max={6} /></div>
          <div className="boxed-text"><RandomNumber min={1} max={100} /></div>
        </div>
        <h1>BoxColor</h1>
        <div className="color">
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>

    );
  }
}

export default App;
