import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import config from '../../config';

export class PageLandingComponent extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.goToHomePage();
  }
  goToHomePage = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={config.default.color.primary} />
      </View>
    );
  }
}

export default PageLandingComponent;
