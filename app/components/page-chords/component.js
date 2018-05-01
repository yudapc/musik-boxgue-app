import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import apisauce from 'apisauce';
import config from '../../config';

export class PageChordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      chords: []
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const keyword = params.keyword !== undefined ? params.keyword : '';
    const chords = this.fetchChords(keyword);
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
  fetchChords = async keyword => {
    const baseURL = 'https://private-cf0fb-yudacogati.apiary-mock.com';
    const querySearch = keyword !== '' || keyword !== undefined ? `?q=${keyword}` : '';
    const path = `/chords${querySearch}`;
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
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

PageChordsComponent.defaultProps = {
  state: {}
};

PageChordsComponent.propTypes = {
  state: PropTypes.object
};

export default PageChordsComponent;
