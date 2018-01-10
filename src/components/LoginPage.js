import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authentication';

export const LoginPage = ({ startLogin }) => (
  <div>
    <h1>Expensify Login</h1>
    <button onClick={startLogin} >Log In</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);