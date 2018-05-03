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
import { union } from 'lodash';
import generateUniqKey from '../../helpers/generate-uniq-key';

export class PageChordsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const { keyword } = this.props;
    this.props.getData(keyword, 1);
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
        key={generateUniqKey(chord.id)}
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
  loadMore() {
    const { keyword, page } = this.props;
    this.props.getData(keyword, page);
  }
  onRefresh() {
    const { keyword } = this.props;
    this.props.refreshPage();
  }
  render() {
    const { isLoading, chords } = this.props;
    if (isLoading) {
      return (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator size="small" color={config.default.color.primary} />
        </View>
      );
    }
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => this.onRefresh()}
            colors={[config.default.color.primary]}
          />
        }
        scrollEventThrottle={1000}
        onScroll={event => {
          const offset = event.nativeEvent.contentOffset.y;
          const height =
            event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height;
          if (offset >= height) {
            if (isLoading === false) {
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
  state: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  chords: PropTypes.array.isRequired
};

export default PageChordsComponent;
