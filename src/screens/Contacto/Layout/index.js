import {View, Text, TouchableNativeFeedback, Linking} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import FA from 'react-native-vector-icons/Feather';
import FO from 'react-native-vector-icons/Fontisto';
import FAW from 'react-native-vector-icons/FontAwesome';
import tw from '@/utils/tailwind';

const LayoutContacto = ({contacto, goBack, _removeContactAction}) => {
  const array = contacto.birthDate !== '' ? contacto.birthDate.split('-') : [];
  const fecha = array.length > 0 ? `${array[2]}/${array[1]}/${array[0]}` : '';
  const genero = {
    MALE: 'Masculino',
    FEMALE: 'Femenino',
  };
  return (
    <View style={tw`justify-between flex-1 pb-10 bg-white`}>
      <View>
        <View
          style={tw`h-30 bg-[#f46366] rounded-b-[13] w-[98%] relative left-1 top-0 p-4 `}>
          <View style={tw`flex-row items-start`}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#c4c4c4', true)}
              onPress={() => requestAnimationFrame(() => goBack())}>
              <View style={tw`items-center justify-center`}>
                <FA name="arrow-left" size={25} color="#fff" />
              </View>
            </TouchableNativeFeedback>
            <Text style={tw`ml-4 text-base font-bold text-white`}>
              Contacto
            </Text>
          </View>
        </View>
        <View
          style={tw`absolute w-40 h-40 overflow-hidden bg-white border-4 border-white rounded-full shadow-lg left-30 top-10`}>
          <FastImage
            style={tw`w-full h-full`}
            source={{
              uri:
                contacto.photo === ''
                  ? 'https://fakeimg.pl/300/'
                  : contacto.photo ?? 'https://fakeimg.pl/300/',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={tw`items-center mt-20`}>
          <Text style={tw`text-xl font-bold text-black`}>
            {contacto.name} {contacto.surnames}
          </Text>
          <View style={tw`flex-row items-center justify-between mt-2 w-30`}>
            {contacto.phone !== '' && contacto.phone && (
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#fff', true)}
                onPress={() =>
                  requestAnimationFrame(() =>
                    Linking.openURL(`tel:${contacto.phone}`),
                  )
                }>
                <View
                  style={tw`items-center justify-center bg-[#f46366] rounded-full w-8 h-8`}>
                  <FA name="phone" size={20} color="#fff" />
                </View>
              </TouchableNativeFeedback>
            )}
            {contacto.email !== '' && contacto.email && (
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#fff', true)}
                onPress={() =>
                  requestAnimationFrame(() =>
                    Linking.openURL(`mailto:${contacto.email}`),
                  )
                }>
                <View
                  style={tw`items-center justify-center bg-[#f46366] rounded-full w-8 h-8`}>
                  <FO name="email" size={20} color="#fff" />
                </View>
              </TouchableNativeFeedback>
            )}
            {contacto.phone !== '' && contacto.phone && (
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#fff', true)}
                onPress={() =>
                  requestAnimationFrame(() =>
                    Linking.openURL(
                      `whatsapp://send?text=hello&phone=${contacto.phone}`,
                    ),
                  )
                }>
                <View
                  style={tw`items-center justify-center bg-[#f46366] rounded-full w-8 h-8`}>
                  <FO name="whatsapp" size={20} color="#fff" />
                </View>
              </TouchableNativeFeedback>
            )}
          </View>
        </View>
        <View style={tw`mt-6`}>
          <View style={tw`w-full h-0.5 bg-gray-200`} />
          <View style={tw`flex-row items-center justify-between p-4`}>
            <View style={tw`flex-row items-center`}>
              <FA name="calendar" size={25} color="#000" />
              <Text style={tw`ml-2 text-sm font-bold text-black`}>
                Fecha de nacimiento
              </Text>
            </View>
            <Text style={tw`text-sm text-gray-500`}>{fecha}</Text>
          </View>
          <View style={tw`w-full h-0.5 bg-gray-200`} />
          <View style={tw`flex-row items-center justify-between p-4`}>
            <View style={tw`flex-row items-center`}>
              <FO name="transgender" size={25} color="#000" />
              <Text style={tw`ml-2 text-sm font-bold text-black`}>Género</Text>
            </View>
            <Text style={tw`text-sm text-gray-500`}>
              {genero[contacto.gender]}
            </Text>
          </View>
          <View style={tw`w-full h-0.5 bg-gray-200`} />
          <View style={tw`flex-row items-center justify-between p-4`}>
            <View style={tw`flex-row items-center`}>
              <FAW name="briefcase" size={25} color="#000" />
              <Text style={tw`ml-2 text-sm font-bold text-black`}>
                Profesión
              </Text>
            </View>
            <Text style={tw`text-sm text-gray-500`}>{contacto.profesion}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={() =>
            requestAnimationFrame(() => _removeContactAction(contacto))
          }>
          <View
            style={tw`bg-[#f46366] items-center justify-center rounded-full mx-4 py-3 shadow-lg`}>
            <Text style={tw`text-base font-bold text-white`}>
              Eliminar de mi lista
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default LayoutContacto;
