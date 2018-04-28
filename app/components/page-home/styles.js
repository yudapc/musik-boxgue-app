import { StyleSheet } from 'react-native';
import config from '../../config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.default.color.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWelcome: {
    fontSize: 22,
    color: config.default.color.text
  }
});

export default { styles };
