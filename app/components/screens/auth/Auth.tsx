import React, {FC, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useAuth} from '../../../hooks/useAuth';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import {Button} from '../../ui/Button';

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const {isLoading, login, register} = useAuth();

  const [data, setData] = useState({} as IData);
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const {email, password} = data;
    console.log(data);

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    setData({} as IData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{isReg ? 'Sign Up' : 'Sign In'}</Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Field
              val={data.email}
              placeholder={'Enter email'}
              onChange={val => setData({...data, email: val})}
            />

            <Field
              val={data.password}
              placeholder={'Enter password'}
              onChange={val => setData({...data, password: val})}
              isSecure={true}
            />

            <Button onPress={authHandler} title={"Let's go"} />

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text style={styles.pressableButton}>
                {isReg ? 'Login' : 'Register'}
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;
