import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { BottomNav } from '../bottom-nav';

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
        <BottomNav navigation={this.props.navigation} />
      </View>
    );
  }
}

export default PageHomeComponent;
