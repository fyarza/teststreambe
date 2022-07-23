import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './RootNavigation';
import {SCREEN_LOGIN} from '@/utils/constants/navigation';
import {screenOptionsDashboard} from '@/utils/constants/screenOptionsDashboard';
import {useSelector} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import LoginScreen from '@/screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginEmail = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const user = useSelector(state => state.user);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'AppRouter'} component={LoginEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
