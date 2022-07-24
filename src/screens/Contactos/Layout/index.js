import {Text, View} from 'react-native';
import React from 'react';
import tw from '@/utils/tailwind';
const LayoutContactos = () => {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-2xl font-bold text-black`}>Contactos</Text>
    </View>
  );
};

export default LayoutContactos;
