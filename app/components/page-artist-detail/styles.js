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
  textTitle: {
    fontSize: 22,
    color: config.default.color.text,
    fontWeight: 'bold'
  },
  bodyContainer: {
    paddingVertical: 50
  },
  textBody: {
    fontSize: 16,
    color: config.default.color.text
  }
});

export default { styles };
