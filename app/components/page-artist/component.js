import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BottomNav } from '../bottom-nav';

export class PageArtistComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Page Artist</Text>
        <BottomNav navigation={this.props.navigation} />
      </View>
    );
  }
}
export default PageArtistComponent;
