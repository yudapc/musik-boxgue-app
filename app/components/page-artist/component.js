import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { styles } from './styles';
import apisauce from 'apisauce';
import config from '../../config';

export class PageArtistComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 0,
      artists: [],
      fetching: false,
      keyword: ''
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const keyword = params.keyword !== undefined ? params.keyword : '';
    this.fetchArtists(keyword, 1);
  };
  static navigationOptions = () => {
    return {
      title: 'Artist',
      headerLeft: null
    };
  };
  renderItem = artist => {
    return (
      <TouchableWithoutFeedback
        key={artist.id}
        // onPress={() =>
        //   this.props.navigation.navigate('PageArtistDetail', {
        //     id: artist.id,
        //     title: artist.name,
        //     body: artist.content_body
        //   })
        // }
      >
        <View style={styles.item}>
          <Text numberOfLines={2} style={styles.itemText}>
            {artist.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  fetchArtists = async (keyword, page) => {
    const baseURL = 'http://musik.boxgue.com/api/v1';
    const querySearch = keyword !== '' || keyword !== undefined ? `?q=${keyword}` : '';
    const path = `/artists${querySearch}&page=${page}&access_token=perfectSecret@j@`;
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
    if (response.ok) {
      this.setState({ artists: this.state.artists.concat(response.data), loading: false, page });
    }
  };
  loadMore() {
    this.setState({ fetching: true }, () => {
      setTimeout(() => {
        this.fetchArtists(this.state.keyword, this.state.page + 1);
        this.setState({ fetching: false });
      }, 500);
    });
  }

  onRefresh() {
    this.setState({ fetching: true, artists: [] }, () => {
      setTimeout(() => {
        this.fetchArtists('', 1);
        this.setState({ fetching: false });
      }, 500);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="small" color={config.default.color.primary} />
        </View>
      );
    }
    const artists = this.state.artists;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.loading}
            onRefresh={() => this.onRefresh()}
            colors={[config.default.color.primary]}
          />
        }
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
        <View style={styles.container}>
          {artists.length > 0 && artists.map(artist => this.renderItem(artist))}
        </View>
      </ScrollView>
    );
  }
}

PageArtistComponent.defaultProps = {
  state: {}
};

PageArtistComponent.propTypes = {
  state: PropTypes.object
};

export default PageArtistComponent;
