import React, { Component } from 'react';
import { IdCard } from './data/components/IdCard';
import { Grettings } from './data/components/Grettings';
import { Random } from './data/components/Random';
import { Color } from './data/components/Color';
import { CreditCard } from './data/components/CreditCard';
import { Rating } from './data/components/Rating';




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
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        <h1>Greetings</h1>
        <Grettings lang="de">Hallo</Grettings>
        <Grettings lang="fr">François</Grettings>

        <h1>random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BOX color</h1>
        <Color r={255} g={0} b={0} />
        <Color r={128} g={255} b={0} />
        <h1>CREDIT CARD</h1>
        <CreditCard 
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white" />
              <CreditCard 
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222" />
              <CreditCard 
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Noemi Alonso"
                bgColor="#ddbb55"
                color="white" />

               <h1>Ratings</h1> 
                 <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
      </div>
    );
  }
}

export default App;
