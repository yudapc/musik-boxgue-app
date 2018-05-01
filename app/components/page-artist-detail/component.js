import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';
import HTMLView from 'react-native-htmlview';
import apisauce from 'apisauce';
import config from '../../config';

export class PageArtistDetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: null,
      chords: [],
      loading: true
    };
  };
  componentDidMount() {
    this.fetchChords(this.props.navigation.state.id);
  }
  fetchChords = async id => {
    const baseURL = 'http://musik.boxgue.com/api/v1';
    const path = `/artists/${id}?access_token=perfectSecret@j@`;
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
    console.log('response: ', response.data[0]);
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
  render() {
    const { params } = this.props.navigation.state;
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="small" color={config.default.color.primary} />
        </View>
      );
    }
    return (
      <ScrollView
        style={styles.container}
        scrollEventThrottle={1000}
        onScroll={event => {
          if (this.state.loading) {
            return;
          }

          const offset = event.nativeEvent.contentOffset.y;
          const height =
            event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height;

          if (offset >= height) {
            if (this.state.fetching === false) {
              this.loadMore();
            }
          }
        }}
      >
        <Text style={styles.textTitle}>{params.title}</Text>
        <View style={styles.bodyContainer}>
          <HTMLView value={params.body} />
        </View>
      </ScrollView>
    );
  }
}

PageArtistDetailComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PageArtistDetailComponent;
