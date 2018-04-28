import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const chordsData = [
  {
    id: 1,
    title: 'Chord ke-1'
  },
  {
    id: 2,
    title: 'Chord ke-2'
  },
  {
    id: 3,
    title: 'Chord ke-3'
  }
];

export class PageChordsComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = () => {
    return {
      title: 'Chords',
      headerLeft: null
    };
  };
  renderItem = chord => {
    return (
      <TouchableWithoutFeedback
        key={chord.id}
        onPress={() =>
          this.props.navigation.navigate('PageChordsDetail', {
            title: chord.title
          })
        }
      >
        <View style={styles.item}>
          <Text>{chord.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {chordsData.length > 0 && chordsData.map(chord => this.renderItem(chord))}
        </View>
      </ScrollView>
    );
  }
}

export default PageChordsComponent;
