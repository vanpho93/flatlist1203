import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ListWord } from './components/ListWord';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <ListWord />;
  }
}
