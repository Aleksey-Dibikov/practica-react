import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    surname: '',
  };

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

  render() {
    const { name, surname } = this.state;
    return (
      <form onSubmit={this.handleSubmite}>
        <lable>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </lable>
        <lable>
          Surname
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
          />
        </lable>
        <button type="submite">Send</button>
      </form>
    );
  }
}
export default Form;
