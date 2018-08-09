import React, { Component } from 'react';

const logo = require('./images/logo.png');

export default class Logo extends Component {
  render() {
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="129" height="35" alt="logo" />
        </a>
      </div>
    );
  }
}
