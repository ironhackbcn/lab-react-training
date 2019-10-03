import React, { Component } from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdCard firstName="John" lastName="Doe" gender="male" height="178" birth="Tue Jul 14 1992" picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard firstName="Dolores" lastName="Obrien" gender="female" height="172" birth="Tue May 11 1993" picture="https://randomuser.me/api/portraits/women/44.jpg" />
        <Greetings lang={"de"}>Ludvig</Greetings>
        <Greetings lang={"fr"}>François</Greetings>
        <Random min={1} max={100} />
        <BoxColor r={100} g={209} b={43} />
        <BoxColor r={87} g={80} b={17} />
      </div>
    );
  }
}

export default App;
