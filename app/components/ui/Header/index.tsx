import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Avatar from '../Avatar';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useProfile} from '../../../hooks/useProfile';
import Loader from '../Loader';
import Padding from '../Padding';

const Header: FC = () => {
  const {isLoading, name} = useProfile();
  const {navigate} = useNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={styles.root}>
      <Avatar name={'Dima'} />

      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={styles.pressable}>
        <Text style={styles.label}>Dima</Text>
        <FontAwesome5Icon
          style={styles.icon}
          name="chevron-right"
          size={20}
          light
        />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
