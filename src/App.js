import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IDCARD</h1>

        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14').toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11').toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>GREETING</h1>

        <Greeting lang="de">
          Ludwig
        </Greeting>
        <Greeting lang="es">
          José
        </Greeting>
        <Greeting lang="fr">
          Francoise
        </Greeting>
        <Greeting lang="en">
          John
        </Greeting>
        <Greeting lang="">
          Hirashi
        </Greeting>
      </div>
    );
}
}

export default App;
