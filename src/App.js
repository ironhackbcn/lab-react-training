import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Button from './components/Button';

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
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>Thor Button</h1>
        <Button type="info" size="lg">
          Info Lg
        </Button>
        <Button type="success" size="md">
          Success Md
        </Button>
        <Button type="warning" size="xs">
          Warning Xs
        </Button>
        <Button type="primary" size="lg">
          Primary Lg
        </Button>
        <Button type="danger" size="md">
          Danger Md
        </Button>
      </div>
    );
  }
}

export default App;
