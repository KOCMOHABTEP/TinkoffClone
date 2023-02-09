import React, {useRef} from 'react';
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
      {user && <Footer navigate={ref.navigate} />}
    </>
  );
};

export default Navigation;
