import React, { Component } from 'react';
import { View, Image } from 'react-native';
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
        <Image source={require('./assets/logo-boxgue-big.png')} />
      </View>
    );
  }
}

export default PageHomeComponent;
