import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import RandomNumber from "./components/RandomNumber";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14").toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="es">Antonio</Greetings>
        <Greetings lang="fr">Francoise</Greetings>
        <Greetings lang="en">George</Greetings>
        <Greetings lang="">Hirashi</Greetings>

        <h1>Random</h1>
        <RandomNumber min={1} max={6}></RandomNumber>
        <RandomNumber min={1} max={100}></RandomNumber>

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>Credit card</h1>
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
    );
  }
}

export default App;
