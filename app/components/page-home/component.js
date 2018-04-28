import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class PageHomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = () => {
    return {
      title: 'Home',
      headerLeft: null
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Home Page</Text>
      </View>
    );
  }
}

export default PageHomeComponent;
