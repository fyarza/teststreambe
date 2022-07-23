import React from 'react';
import FA from 'react-native-vector-icons/Feather';

const screenOptionsDashboard = (route, focused, color, size) => {
  let iconName;
  switch (route.name) {
    case 'Pedidos':
      iconName = focused ? 'file-text' : 'file';
      break;
    case 'Productos':
      iconName = focused ? 'shopping-bag' : 'list';
      break;
    case 'Clientes':
      iconName = focused ? 'users' : 'users';
      break;
    case 'Perfil':
      iconName = focused ? 'user' : 'user';
      break;
    case 'Carrito':
      iconName = focused ? 'shopping-cart' : 'shopping-cart';
      break;
    default:
      break;
  }
  return <FA name={iconName} size={size} color={color} />;
};

export {screenOptionsDashboard};
