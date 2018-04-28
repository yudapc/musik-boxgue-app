import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Navbar } from '../navbar';

export class PageHomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>HomePage</Text>
        <Navbar />
      </View>
    );
  }
}

export default PageHomeComponent;
