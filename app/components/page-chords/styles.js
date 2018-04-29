import { StyleSheet } from 'react-native';
import config from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.default.color.background,
    padding: 16
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: 10,
    height: 44,
    borderBottomWidth: 1,
    borderColor: config.default.color.border
  }
});

export default { styles };
