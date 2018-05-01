import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { styles } from './styles';
import config from '../../config';

export class PageHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
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
        <View style={{ paddingBottom: 10 }}>
          <Image source={require('./assets/logo-boxgue-big.png')} />
        </View>
        <View
          style={{
            backgroundColor: config.default.color.gray,
            width: Dimensions.get('window').width - 32,
            height: 50,
            borderRadius: 5
          }}
        >
          <TextInput
            placeholder="Search..."
            onChangeText={keyword => this.setState({ keyword })}
            style={{ height: 50, padding: 10 }}
            value={this.state.keyword}
          />
        </View>
        <View style={{ paddingTop: 8 }} />
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate('PageChords', { keyword: this.state.keyword })
          }
        >
          <View
            style={{
              width: Dimensions.get('window').width - 32,
              backgroundColor: config.default.color.light,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }}
          >
            <Text style={{ color: config.default.color.text, fontSize: 16 }}>Search</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default PageHomeComponent;
