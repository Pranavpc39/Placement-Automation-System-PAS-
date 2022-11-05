import React, { Component } from 'react'

import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2> <Link to='student-signup'>Signup</Link> </h2>
        <h2> <Link to='student-login'>Login</Link> </h2>

      </div>
    )
  }
}
