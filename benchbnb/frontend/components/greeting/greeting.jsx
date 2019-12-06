import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </>
  );

  return display;
};

export default Greeting;