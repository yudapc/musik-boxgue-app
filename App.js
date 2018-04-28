import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { PageLanding } from './app/components/page-landing';
import { PageHome } from './app/components/page-home';
import { PageHelp } from './app/components/page-help';

const RootNavigator = StackNavigator(
  {
    PageLanding: { screen: PageLanding },
    PageHome: { screen: PageHome },
    PageHelp: { screen: PageHelp }
  },
  {
    initialRouteName: 'PageLanding'
  }
);

export class App extends Component {
  render() {
    return <RootNavigator />;
  }
}

export default App;
