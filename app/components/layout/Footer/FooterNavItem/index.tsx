import {IFooterItem} from '../types';
import {Pressable, Text} from 'react-native';
import styles from './styles';
import {FC} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TypeRootStackParamList} from '../../../../navigation/types';

interface IFooterNavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const FooterNavItem: FC<IFooterNavItem> = ({item, navigate, currentRoute}) => {
  const isActive = currentRoute === item.title;

  return (
    <Pressable style={styles.container} onPress={() => navigate(item.title)}>
      <FontAwesome5Icon
        name={item.iconName}
        style={[styles.icon, isActive && styles.iconActive]}
      />
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {item.title}
      </Text>
    </Pressable>
  );
};
export default FooterNavItem;
