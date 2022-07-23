import React from 'react';
import {Formik} from 'formik';
import {Text, View} from 'react-native';
import tw from '@/utils/tailwind';

const LoginLayout = ({initialValues, validationSchema, onSubmit}) => {
  return (
    <View style={tw`flex-1`}>
      <Text>Login</Text>
    </View>
  );
};

export default LoginLayout;
