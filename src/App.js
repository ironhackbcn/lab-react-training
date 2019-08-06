import React, { Component } from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings'
import Random from './Components/Random.js';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';

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
       birth={new Date("1992-07-14")}
       picture="https://randomuser.me/api/portraits/men/44.jpg"
       />
        <IdCard 
       lastName='Perez'
       firstName='Paquita'
       gender='female'
       height={128}
       birth={new Date("1900-07-14")}
       picture="https://randomuser.me/api/portraits/men/44.jpg"
       />
       
        <h1>Greetings</h1>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <div>
          <h1>Random</h1>
          <Random min={1} max={6}></Random>
          <Random min={1} max={100}></Random>
        </div>

        <div>
          <h1>Boxcolor</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
        <div>
          <h1>CreditCard</h1>
          <CreditCard 
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={21}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
            <CreditCard 
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={21}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
            <CreditCard 
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={19}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />

        </div>

        <div>
          <h1>Rating</h1>
            <Rating>0</Rating>
            <Rating>1.49</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
        </div>

      </div>
    );
  }
}

export default App;
