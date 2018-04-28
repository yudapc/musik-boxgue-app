import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class PageChordsDetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.title : null
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Page Chords Detail</Text>
      </View>
    );
  }
}
export default PageChordsDetailComponent;
