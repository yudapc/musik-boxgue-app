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
      title: null //params ? params.title : null
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{params.title}</Text>
        <View style={styles.bodyContainer}>
          <Text style={styles.textBody}>{params.body}</Text>
        </View>
      </View>
    );
  }
}
export default PageChordsDetailComponent;
