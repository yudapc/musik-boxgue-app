import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { PageChords } from '../page-chords';
import { PageArtist } from '../page-artist';
import { PageHelp } from '../page-help';
import config from '../../config';

export const PageNavigation = TabNavigator(
  {
    TabChords: { screen: PageChords },
    TabArtist: { screen: PageArtist },
    TabHelp: { screen: PageHelp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'TabChords') {
          iconName = `ios-key${focused ? '' : '-outline'}`;
        }
        if (routeName === 'TabArtist') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }
        if (routeName === 'TabHelp') {
          iconName = `ios-help-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: config.default.color.light,
      inactiveTintColor: config.default.color.background,
      style: {
        backgroundColor: config.default.color.primary
      }
    },
    animationEnabled: true,
    swipeEnabled: false
  }
);

export default PageNavigation;
