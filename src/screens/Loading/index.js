import React from 'react';
import {View, Text} from 'react-native';
import tw from '@/utils/tailwind';

const Loading = () => {
  return (
    <View style={tw`flex-1`}>
      <Text>Cargando</Text>
    </View>
  );
};

export default Loading;
