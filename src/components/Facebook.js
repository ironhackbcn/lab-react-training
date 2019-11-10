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

  render() {
    return (
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
    )
  }
}
