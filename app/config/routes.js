import { StackNavigator } from 'react-navigation';
import config from './index';
import { PageLanding } from '../components/page-landing';
import { PageNavigation } from '../components/page-navigation';
import { PageHome } from '../components/page-home';
import { PageChords } from '../components/page-chords';
import { PageArtist } from '../components/page-artist';
import { PageHelp } from '../components/page-help';
import { PageChordsDetail } from '../components/page-chords-detail';
import { PageArtistDetail } from '../components/page-artist-detail';
import { PageOffline } from '../components/page-offline';

export const RootNavigator = StackNavigator(
  {
    PageLanding: { screen: PageLanding },
    PageNavigation: { screen: PageNavigation },
    PageOffline: { screen: PageOffline },
    PageHome: { screen: PageHome },
    PageChords: { screen: PageChords },
    PageArtist: { screen: PageArtist },
    PageHelp: { screen: PageHelp },
    PageChordsDetail: { screen: PageChordsDetail },
    PageArtistDetail: { screen: PageArtistDetail }
  },
  {
    initialRouteName: 'PageLanding',
    navigationOptions: {
      headerTintColor: config.default.color.background,
      headerStyle: {
        backgroundColor: config.default.color.primary
      },
      gesturesEnabled: false
    }
  }
);

export default RootNavigator;
