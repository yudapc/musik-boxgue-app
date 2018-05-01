import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';
import HTMLView from 'react-native-htmlview';

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
      <ScrollView style={styles.container}>
        <Text style={styles.textTitle}>{params.title}</Text>
        <View style={styles.bodyContainer}>
          <HTMLView value={params.body} />
        </View>
      </ScrollView>
    );
  }
}

PageChordsDetailComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PageChordsDetailComponent;
