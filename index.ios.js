import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Interface from './interface.js';

export default class NuevaListPlay extends Component {
  render() {
    return <Interface />;
  }
}

AppRegistry.registerComponent('NuevaListPlay', () => NuevaListPlay);
