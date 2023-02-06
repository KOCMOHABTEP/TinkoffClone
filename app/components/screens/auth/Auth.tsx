import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {styleCenter} from '../../layout/Layout';
import styles from './styles';

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <Text style={styles.title}>{isReg ? 'Sign Up' : 'Sign In'}</Text>
    </View>
  );
};

export default Auth;
