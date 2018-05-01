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

export class PageChordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 0,
      chords: [],
      fetching: false,
      keyword: ''
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const keyword = params.keyword !== undefined ? params.keyword : '';
    const chords = this.fetchChords(keyword, 1);
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
  fetchChords = async (keyword, page) => {
    const baseURL = 'http://musik.boxgue.com/api/v1';
    const querySearch = keyword !== '' || keyword !== undefined ? `?q=${keyword}` : '';
    const path = `/chords${querySearch}&page=${page}&access_token=perfectSecret@j@`;
    const api = apisauce.create({
      baseURL,
      timeout: 30000
    });
    const response = await api.get(path);
    if (response.ok) {
      this.setState({ chords: this.state.chords.concat(response.data), loading: false, page });
    }
  };
  loadMore() {
    this.setState({ fetching: true }, () => {
      setTimeout(() => {
        this.fetchChords(this.state.keyword, this.state.page + 1);
        this.setState({ fetching: false });
      }, 500);
    });
  }

  onRefresh() {
    this.setState({ fetching: true, chords: [] }, () => {
      setTimeout(() => {
        this.fetchChords('', 1);
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
    const chords = this.state.chords;
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
