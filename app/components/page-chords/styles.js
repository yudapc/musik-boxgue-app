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
    paddingVertical: 10,
    height: 70,
    borderBottomWidth: 0.5,
    borderColor: config.default.color.border,
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 16
  }
});

export default { styles };
