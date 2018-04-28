import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { PageLanding } from './app/components/page-landing';
import { PageHome } from './app/components/page-home';

const RootNavigator = StackNavigator(
  {
    PageLanding: { screen: PageLanding },
    Home: { screen: PageHome }
  },
  {
    initialRouteName: 'PageLanding'
  }
);

export default class App extends Component {
  render() {
    return <RootNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
