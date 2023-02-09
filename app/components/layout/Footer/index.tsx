import Padding from '../../ui/Padding';
import {menu} from './menu';
import FooterNavItem from './FooterNavItem';
import styles from './styles';
import {TypeRootStackParamList} from '../../../navigation/types';
import {FC} from 'react';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
  return (
    <Padding style={styles.container}>
      {menu.map(item => (
        <FooterNavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  );
};

export default Footer;
