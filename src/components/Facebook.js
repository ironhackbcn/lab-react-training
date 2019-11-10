import React, { Component } from 'react';
import berlinJSON from '../data/berlin.json';
import FacebookProfile from './FacebookProfile.js';

export default class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      berlin: berlinJSON
    }
  }

  getCountries = () => {
    let countries = [];
    for (let i = 0; i < berlinJSON.length; i++) {
      countries.push(berlinJSON[i].country);
    }
    return [...new Set(countries)];
  }

  listCountries = (country) => {
    if (country === 'All') {
      this.setState({
        berlin: berlinJSON
      })
    } else {
      const countries = berlinJSON.filter(element => {
        return element.country === country;
      })
      this.setState({
        berlin: countries
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <button className="country-button" onClick={() => this.listCountries('All')}>All</button>
          {
            this.getCountries().map((element, index) =>
              <button key={index} className="country-button" onClick={() => this.listCountries(element)}>{element}</button>
            )
          }
        </div>
        <div className="FacebookProfile">
        {
          this.state.berlin.map((element, index) =>
            <FacebookProfile
              key = {index}
              firstName = {element.firstName}
              lastName = {element.lastName}
              country = {element.country}
              img = {element.img}
              isStudent = {element.isStudent}
            />
          )
        }
      </div>
      </div>
      
    )
  }
}
