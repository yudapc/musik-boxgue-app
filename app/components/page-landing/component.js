import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import config from '../../config';
import { isOffline } from '../../helpers/check-connection';

export class PageLandingComponent extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.goToHomePage();
  }
  componentWillMount() {
    if (!config.isLocal) isOffline(this.props);
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.isConnected !== this.props.isConnected && !config.isLocal) {
      return true;
    }
  }
  componentDidUpdate() {
    if (!config.isLocal) isOffline(this.props);
  }
  goToHomePage = () => {
    const { navigation } = this.props;
    const passProps = { navigation };
    navigation.navigate('PageNavigation', passProps);
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={config.default.color.primary} />
      </View>
    );
  }
}

PageLandingComponent.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PageLandingComponent;
