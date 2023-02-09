import {StyleSheet} from 'react-native';
import {UI_BLUE_500, UI_GREY_500} from '../../../../styles';

export default StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: UI_GREY_500,
    marginBottom: 4,
  },
  iconActive: {
    color: UI_BLUE_500,
  },
  label: {
    fontSize: 10,
    color: UI_GREY_500,
  },
  labelActive: {
    color: UI_BLUE_500,
  },
});
