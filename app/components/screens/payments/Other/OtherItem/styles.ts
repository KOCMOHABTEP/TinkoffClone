import {StyleSheet} from 'react-native';
import {UI_BLUE_500} from '../../../../../styles';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    borderRadius: 12,
    padding: 8,
    width: 96,
    height: 96,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 6,
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    backgroundColor: UI_BLUE_500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    marginTop: 6,
  },
});
