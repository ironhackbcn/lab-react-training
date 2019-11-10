import React, { Component } from 'react'

export default class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      nationality: ''
    }
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
    
    this.setState({
      email: "",
      password: "",
      nationality: ""
    })
  };

  render() {
    return (
      <form className="SignupPage" onSubmit={this.handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={this.state.email}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          value={this.state.password}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={this.state.nationality}
          onChange={(e) => this.handleChange(e)}
        />
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}
