import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="challenge">
          <h2>IdCard</h2>
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg" />
        </section>

        <section className="challenge">
          <h2>Greetings</h2>
          <Greetings lang='de'>
            <p className="boxed-text">Hallo Ludwig</p>
          </Greetings>
        </section>

        <section className="challenge">
          <h2>Random</h2>
          <p className="boxed-text"><Random min={1} max={6} /></p>
          <p className="boxed-text"><Random min={1} max={100} /></p>
        </section>

        <section className="challenge">
          <h2>Box Color</h2>
          <div className="boxes-container">
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
          </div>
        </section>

        <section className="challenge">
          <h2>Credit Card</h2>
          <div className="credit-cards">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </div>
        </section>
        <section className="challenge">
          <h2>Rating</h2>
          <Rating children='0' />
          <Rating children='1.49' />
          <Rating children='1.5' />
          <Rating children='3' />
          <Rating children='4' />
          <Rating children='5' />
        </section>
      </div>
    );
  }
}


export default App;


