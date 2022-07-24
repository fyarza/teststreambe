import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './RootNavigation';
import {
  SCREEN_LOGIN,
  SCREEN_HOME,
  SCREEN_CONTACTOS,
  SCREEN_CONTACTO,
  SCREEN_MUESTRAS,
  SCREEN_VADEMECUM,
  STACK_LOGIN,
  STACK_DASHBOARD,
} from '@/utils/constants/navigation';
import {screenOptionsDashboard} from '@/utils/constants/screenOptionsDashboard';
import {useSelector} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FA from 'react-native-vector-icons/Feather';
import FO from 'react-native-vector-icons/FontAwesome5';
import tw from '@/utils/tailwind';

import LoginScreen from '@/screens/Login';
import ContactosScreen from '@/screens/Contactos';
import ContactoScreen from '@/screens/Contacto';
import MuestrasScreen from '@/screens/Muestras';
import VademecumScreen from '@/screens/Vademecum';

import {View, Text} from 'react-native';

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

const ContactosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN_CONTACTOS} component={ContactosScreen} />
      <Stack.Screen name={SCREEN_CONTACTO} component={ContactoScreen} />
    </Stack.Navigator>
  );
};

const Dashboard = ({routeName}) => {
  console.log(routeName);
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_HOME}
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          display: routeName === SCREEN_CONTACTO ? 'none' : 'flex',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopColor: 'red',
          backgroundColor: '#f46366',
          elevation: 0,
          height: 93,
        },
      })}>
      <Tab.Screen
        name={SCREEN_MUESTRAS}
        component={MuestrasScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={tw`items-center justify-center rounded-full w-18 h-18 ${
                focused ? 'bg-[#f38d8e]' : 'bg-[#f46366]'
              }`}>
              <FO name="briefcase-medical" size={20} color="#fff" />
              <Text style={tw`mt-1 text-xs text-white`}>Muestras</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_HOME}
        component={ContactosStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={tw`items-center justify-center p-2  rounded-full w-18 h-18 ${
                focused ? 'bg-[#f38d8e]' : 'bg-[#f46366]'
              }`}>
              <FA name="home" size={20} color="#fff" />
              <Text style={tw`mt-1 text-xs text-white`}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_VADEMECUM}
        component={VademecumScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={tw`items-center justify-center rounded-full w-18 h-18 ${
                focused ? 'bg-[#f38d8e]' : 'bg-[#f46366]'
              }`}>
              <FA name="book-open" size={20} color="#fff" />
              <Text style={tw`mt-1 text-xs text-white`}>Vademecum</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  const user = useSelector(state => state.user);
  const [routeName, setRouteName] = useState();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setRouteName(navigationRef.getCurrentRoute().name);
      }}
      onStateChange={async () => {
        const previousRouteName = routeName;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user === false ? (
          <Stack.Screen name={STACK_LOGIN} component={LoginEmail} />
        ) : (
          <Stack.Screen name={STACK_DASHBOARD}>
            {props => <Dashboard {...props} routeName={routeName} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
