import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const bottomNavHeight = 56;

export const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: bottomNavHeight,
    elevation: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.3
  },
  bottomNavItem: {
    alignItems: 'center',
    width: width / 4
  },
  bottomNavIcon: {
    marginTop: 9,
    marginBottom: 2,
    width: 24,
    height: 24
  },
  bottomNavText: {
    fontSize: 12,
    color: '#000',
    alignSelf: 'center'
  }
});
export default styles;
