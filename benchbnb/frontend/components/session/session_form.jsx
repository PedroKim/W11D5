import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(fieldType) {
    return (e) => {
      this.setState({
        [fieldType]: e.target.value
      });
    };
  }

  render() {
    const formName = this.props.formType === 'signup' ? 'Sign up' : 'Log in';
    const otherName = this.props.formType === 'signup' ? 'Log in' : 'Sign up';
    const otherNameRoute = this.props.formType === 'signup' ? 'login' : 'signup';
    const errorLis = this.props.errors.map((error, index) => {
      return <li key={index}>{error}</li>
    });

    return (
      <>
        <h1>{formName}</h1>
        <ul>{errorLis}</ul>

        <form>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}/>
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>

          <button onClick={this.handleSubmit}>{formName}</button>
        </form>

        <Link to={`/${otherNameRoute}`}>{otherName}</Link>
      </>
    );
  }
}