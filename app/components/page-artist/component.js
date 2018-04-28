import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class PageArtistComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = () => {
    return {
      title: 'Artist',
      headerLeft: null
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Page Artist</Text>
      </View>
    );
  }
}
export default PageArtistComponent;
