import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import HTMLView from 'react-native-htmlview';
import apisauce from 'apisauce';
import config from '../../config';

export class PageArtistDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      chords: [],
      loading: true,
      fetching: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params.id;
    console.log('id: ', id);
    this.fetchChords(id);
  }
  fetchChords = async id => {
    const baseURL = 'http://musik.boxgue.com/api/v1';
    const path = `/artists/${id}?access_token=perfectSecret@j@`;
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
    console.log('response: ', response);

    if (response.ok) {
      this.setState({ chords: this.state.chords.concat(response.data), loading: false });
    }
  };
  loadMore() {
    this.setState({ fetching: true }, () => {
      setTimeout(() => {
        this.fetchChords(this.props.navigation.state.id);
        this.setState({ fetching: false });
      }, 500);
    });
  }
  renderItem = chord => {
    return (
      <TouchableWithoutFeedback
        key={chord.id}
        onPress={() =>
          this.props.navigation.navigate('PageChordsDetail', {
            title: chord.title,
            body: chord.content_body
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
  render() {
    console.log('state loading: ', this.state.loading);
    const { params } = this.props.navigation.state;
    const chords = this.state.chords;

    return (
      <ScrollView style={styles.container} scrollEventThrottle={1000}>
        <Text style={styles.textTitle}>{params.title}</Text>
        <View style={styles.bodyContainer}>
          <HTMLView value={params.body} />
        </View>
        {chords.length > 0 && chords.map(chord => this.renderItem(chord))}
      </ScrollView>
    );
  }
}

PageArtistDetailComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PageArtistDetailComponent;
