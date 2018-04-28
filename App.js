import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { PageLanding } from './app/components/page-landing';
import { PageNavigation } from './app/components/page-navigation';
import { PageHome } from './app/components/page-home';
import { PageChords } from './app/components/page-chords';
import { PageArtist } from './app/components/page-artist';
import { PageHelp } from './app/components/page-help';
import { PageChordsDetail } from './app/components/page-chords-detail';

const RootNavigator = StackNavigator(
  {
    PageLanding: { screen: PageLanding },
    PageNavigation: { screen: PageNavigation },
    PageHome: { screen: PageHome },
    PageChords: { screen: PageChords },
    PageArtist: { screen: PageArtist },
    PageHelp: { screen: PageHelp },
    PageChordsDetail: { screen: PageChordsDetail }
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
