import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'junior',
    licence: false,
  };

  nameId = uuidv4();
  surnameId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // handleNameChange = (e) => {
  //     this.setState({
  //         name: e.currentTarget.value
  //     })
  // };

  // handleSurnameChange = (e) => {
  //     this.setState({
  //         surname: e.currentTarget.value
  //     })
  // };

  handleSubmite = e => {
    e.preventDefault();
    this.setState({
      name: '',
      surname: '',
    });
  };

  handleLicenceChange = e => {
    // console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    const { name, surname, experience, licence } = this.state;
    return (
      <form onSubmit={this.handleSubmite}>
        <label htmlFor={this.nameId}>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            id={this.nameId}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.surnameId}>
          Surname
          <input
            type="text"
            name="surname"
            value={surname}
            id={this.surnameId}
            onChange={this.handleChange}
          />
        </label>
        <button type="submite">Send</button>

        <h2>You experience</h2>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={experience === 'senior'}
          />
          Senior
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={this.handleLicenceChange}
          />
          I agree with the condition
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}
export default Form;
