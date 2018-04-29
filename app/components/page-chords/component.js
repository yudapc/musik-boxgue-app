import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import apisauce from 'apisauce';
import config from '../../config';

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
    this.state = {
      loading: true,
      chords: []
    };
  }
  componentDidMount = () => {
    const chords = this.fetchChords();
  };
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
            title: chord.title,
            body: chord.body
          })
        }
      >
        <View style={styles.item}>
          <Text numberOfLines={2} style={styles.itemText}>
            {chord.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  fetchChords = async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const path = '/posts';
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
    console.log('response: ', response.data[0].title);
    if (response.ok) {
      this.setState({ chords: response.data, loading: false });
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="small" color={config.default.color.primary} />
        </View>
      );
    }
    const chords = this.state.chords;
    return (
      <ScrollView>
        <View style={styles.container}>
          {chords.length > 0 && chords.map(chord => this.renderItem(chord))}
        </View>
      </ScrollView>
    );
  }
}

export default PageChordsComponent;
