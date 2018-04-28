import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class PageHelpComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = () => {
    return {
      title: 'Help',
      headerLeft: null
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Page Help</Text>
      </View>
    );
  }
}
export default PageHelpComponent;
