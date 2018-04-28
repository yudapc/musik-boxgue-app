import React, { Component } from 'react';
import { Animated, View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export class BottomNavComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Animated.timing(10, { duration: 500, toValue: 0 });
  }
  render() {
    const navigationItems = [
      {
        key: 1,
        icon: 'md-home',
        title: 'Home',
        screen: 'PageHome'
      },
      {
        key: 2,
        icon: 'ios-key',
        title: 'Chords',
        screen: 'PageChords'
      },
      {
        key: 3,
        icon: 'ios-contact',
        title: 'Artist',
        screen: 'PageArtist'
      },
      {
        key: 4,
        icon: 'ios-help-circle-outline',
        title: 'Help',
        screen: 'PageHelp'
      }
    ];
    const passProps = { navigation: this.props.navigation };
    return (
      <Animated.View style={styles.bottomNav}>
        {navigationItems.map(item => (
          <TouchableWithoutFeedback
            key={item.key}
            onPress={() => this.props.navigation.navigate(item.screen, passProps)}
          >
            <View style={[styles.bottomNavItem]}>
              <Ionicons
                name={item.icon}
                color="rgba(0, 0, 0, 0.38)"
                size={25}
                style={styles.bottomNavIcon}
              />
              <Animated.Text style={styles.bottomNavText}>{item.title}</Animated.Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Animated.View>
    );
  }
}
export default BottomNavComponent;
