import {StyleSheet} from 'react-native';
import {UI_BLUE_500, UI_GREY_300} from '../../../../styles';

export default StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: UI_GREY_300,
    marginTop: 1,
  },
  iconActive: {
    color: UI_BLUE_500,
  },
  label: {
    fontSize: 12,
  },
});
