import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useAuth} from '../hooks/useAuth';
import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/Profile';
import Payments from '../components/screens/payments/Payments';
import Services from '../components/screens/services/Services';
import Support from '../components/screens/support/Support';
import More from '../components/screens/more/More';
import Footer from '../components/layout/Footer';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

const Navigation = () => {
  const {user} = useAuth();
  const ref = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setName(ref.getCurrentRoute()?.name),
      100,
    );

    return () => clearTimeout(timeoutId);
  });

  useEffect(() => {
    const listener = ref.addListener('state', () =>
      setName(ref.getCurrentRoute()?.name),
    );

    return () => {
      ref.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref} theme={navigationTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <>
              <Stack.Screen name={'Home'} component={Home} />
              <Stack.Screen name={'Profile'} component={Profile} />
              <Stack.Screen name={'Payments'} component={Payments} />
              <Stack.Screen name={'Services'} component={Services} />
              <Stack.Screen name={'Support'} component={Support} />
              <Stack.Screen name={'More'} component={More} />
            </>
          ) : (
            <Stack.Screen name={'Auth'} component={Auth} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
    </>
  );
};

export default Navigation;
