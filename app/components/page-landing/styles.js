import { StyleSheet, Dimensions } from 'react-native';
import config from '../../config';

const windows = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.default.color.background
  }
});

export default { styles };
