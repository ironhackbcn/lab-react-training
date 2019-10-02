import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

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
        }],
      dataRandom: [
        {
        max: 1,
        min: 6
        },
        {
        max: 1,
        min: 100
        }],
      dataBoxColor: [
        {
        r: 255,
        g: 0,
        b: 0
        },
        {
        r: 128,
        g: 255,
        b: 0
      }],
      dataCreditCard: [
        {
        ype: "Visa",
        number: "0123456789018845",
        expirationMonth: 3,
        expirationYear: 2021,
        bank: "BNP",
        owner: "Maxence Bouret",
        bgColor: "#11aa99",
        color: "white"
        },
        {
          ype: "Master Card",
          number: "0123456789010995",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "N26",
          owner: "Maxence Bouret",
          bgColor: "#eeeeee",
          color: "222222"
          },
          {
          ype: "Visa",
          number: "0123456789016984",
          expirationMonth: 12,
          expirationYear: 2019,
          bank: "Name of the Bank",
          owner: "Firstname Lastname",
          bgColor: "#ddbb55",
          color: "white"
          },
        ],
        dataRating: [0, 1.49, 1.5, 3, 4, 5]
    };
  }

  render() {
    const {dataIdCard, dataGreetings, dataRandom, dataBoxColor, dataCreditCard, dataRating} = this.state;
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard people={dataIdCard} />
        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        <Greetings gree={dataGreetings} />
        {/* TODO: Use the Greetings component */}

        <h1>Random</h1>
        <Random randomarray={dataRandom} />
        {/* TODO: Use the Random component */}

        <h1>BoxColor</h1>
        <BoxColor boxcolorarray={dataBoxColor} />
        {/* TODO: Use the BoxColor component */}
       
        <h1>CreditCard</h1>
        <CreditCard creditCardrarray={dataCreditCard} />
        {/* TODO: Use the CreditCard component */}
        
        <h1>Rating</h1>
        <Rating Ratingarray={dataRating} />
        {/* TODO: Use the Rating component */}
      </div>
    );
  }
}

export default App;
