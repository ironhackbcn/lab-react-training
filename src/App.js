import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataIdCard: [
        {
        lastName: 'Doe',
        firstName: 'John',
        gender: 'male',
        height: 178,
        birth: `${new Date("1992-07-14").toString().slice(0, 16)}`,
        picture: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
        lastName: 'Delores ',
        firstName: 'Obrien',
        gender: 'female',
        height: 172,
        birth: `${new Date("1988-05-11").toString().slice(0, 16)}`,
        picture: "https://randomuser.me/api/portraits/women/44.jpg"
      }],
      dataGreetings: [
        {
        lang: "de",
        name: "Ludwig"
        },
        {
        lang: "fr",
        name: "François"
        }]
    };
  }

  render() {
    const {dataIdCard, dataGreetings} = this.state;
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard people={dataIdCard} />
        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        <Greetings gree={dataGreetings} />
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
