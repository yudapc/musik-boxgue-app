import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './app/store/store';
import config from './app/config';
import { registerConnectionChange } from './app/helpers/check-connection';
import { PageLanding } from './app/components/page-landing';
import { PageNavigation } from './app/components/page-navigation';
import { PageHome } from './app/components/page-home';
import { PageChords } from './app/components/page-chords';
import { PageArtist } from './app/components/page-artist';
import { PageHelp } from './app/components/page-help';
import { PageChordsDetail } from './app/components/page-chords-detail';
import { PageOffline } from './app/components/page-offline';

const RootNavigator = StackNavigator(
  {
    PageLanding: { screen: PageLanding },
    PageNavigation: { screen: PageNavigation },
    PageOffline: { screen: PageOffline },
    PageHome: { screen: PageHome },
    PageChords: { screen: PageChords },
    PageArtist: { screen: PageArtist },
    PageHelp: { screen: PageHelp },
    PageChordsDetail: { screen: PageChordsDetail }
  },
  {
    initialRouteName: 'PageLanding',
    navigationOptions: {
      headerTintColor: config.default.color.background,
      headerStyle: {
        backgroundColor: config.default.color.primary
      }
    }
  }
);

registerConnectionChange();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
