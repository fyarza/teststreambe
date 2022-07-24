import {FlatList, Text, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import tw from '@/utils/tailwind';
import FA from 'react-native-vector-icons/Feather';
import FO from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';

const LayoutContactos = ({navigateScreenContacto, contacts}) => {
  const renderItem = ({item}) => {
    const {photo, name, surnames} = item;

    console.log('TEL', contacts.length);

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#c4c4c4', false)}
        onPress={() =>
          requestAnimationFrame(() => navigateScreenContacto(item))
        }>
        <View style={tw`flex-row items-center justify-between my-2`}>
          <View
            style={tw`overflow-hidden bg-white border border-gray-100 rounded-full w-18 h-18 `}>
            <FastImage
              style={tw`w-full h-full`}
              source={{
                uri:
                  photo === ''
                    ? 'https://fakeimg.pl/300/'
                    : photo ?? 'https://fakeimg.pl/300/',
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={tw`flex-1 ml-4 text-base font-bold text-black`}>
            {name} {surnames}
          </Text>
          <FO name="angle-right" size={25} color="#f46366" />
        </View>
      </TouchableNativeFeedback>
    );
  };

  const keyExtractor = item => item.contactId;
  return (
    <View style={tw`flex-1 bg-white`}>
      <View
        style={tw`flex-row items-center justify-between px-6 py-2 bg-[#f46366] h-16`}>
        <View style={tw`flex-row items-center justify-center`}>
          <FA name="home" size={25} color="#fff" />
          <Text style={tw`ml-3 text-sm font-bold text-white`}>
            Tu lista de contactos
          </Text>
        </View>
        <View
          style={tw`relative items-center justify-center w-6 h-6 bg-white rounded-full`}>
          <FA name="bell" size={18} color="#f46366" />
          <View
            style={tw`absolute items-center justify-center w-4 h-4 bg-blue-500 rounded-full top--1 left-4.5`}>
            <Text style={tw`text-xs text-white`}>5</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={tw`px-6 py-8`}
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => (
          <View style={tw`w-full h-0.5 bg-gray-200`} />
        )}
      />
    </View>
  );
};

export default LayoutContactos;
