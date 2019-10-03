import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './Greetings';
// import RandomNumber from './RandomNumber';
// import BoxColor from './BoxColor';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={(new Date('1992-07-14')).toDateString()}
          picture='https://randomuser.me/api/portraits/men/44.jpg'
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">children="Ludwig"</Greetings> 
      </div>
    );
  }
}

export default App;
