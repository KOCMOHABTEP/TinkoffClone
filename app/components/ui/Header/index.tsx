import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Avatar from '../Avatar';
import {useNavigation} from '@react-navigation/native';

const Header: FC = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.root}>
      <Avatar name={'Dima'} />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={styles.pressable}>
        <Text>Dima</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
