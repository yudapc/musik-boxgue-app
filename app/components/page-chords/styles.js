import { StyleSheet } from 'react-native';
import config from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.default.color.background
  },
  item: {
    padding: 10,
    height: 44
  }
});

export default { styles };
