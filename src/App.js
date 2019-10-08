import React, { Component } from 'react';

const IdCard = props => {
  console.log(props);
  const date = props.birth;

  console.log(date);

  return (
    <div className="id-card">
      <div className="id-picture">
        <img src={props.idPicture} alt={props.firstName} />
      </div>
      <div className="id-text">
        <p>
          <b>First Name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {props.birth.toString()}
        </p>
      </div>
    </div>
  );
};

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
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />{' '}
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
