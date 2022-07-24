import React, {useState} from 'react';
import {Formik} from 'formik';
import {Text, View, TextInput, TouchableNativeFeedback} from 'react-native';
import tw from '@/utils/tailwind';
import FA from 'react-native-vector-icons/Feather';

const LoginLayout = ({initialValues, validationSchema, onSubmit}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={tw`flex-1 px-4 py-8`}>
      <Text style={tw`text-4xl text-black `}>Log in</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {formik => (
          <View style={tw`mt-4`}>
            <View style={tw`mb-4`}>
              <View style={tw`px-2 border-2 border-black`}>
                <TextInput
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={tw`text-base text-black`}
                  placeholder="Email"
                  onChangeText={formik.handleChange('email')}
                  value={formik.values.email}
                />
              </View>
              {'email' in formik.errors && (
                <Text style={tw`mt-1 text-red-500`}>
                  * {formik.errors.email}
                </Text>
              )}
            </View>
            <View>
              <View
                style={tw`flex-row items-center justify-between px-2 border-2 border-black`}>
                <TextInput
                  style={tw`text-base text-black`}
                  secureTextEntry={!show}
                  placeholder="Password"
                  onChangeText={formik.handleChange('password')}
                  value={formik.values.password}
                  onSubmitEditing={event => formik.handleSubmit()}
                  returnKeyType="send"
                />
                <TouchableNativeFeedback
                  onPress={() =>
                    requestAnimationFrame(() => {
                      setShow(!show);
                    })
                  }
                  background={TouchableNativeFeedback.Ripple('#c4c4c4', true)}>
                  <View>
                    <FA
                      name={show ? 'eye-off' : 'eye'}
                      size={25}
                      color="#000"
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
              {'password' in formik.errors && (
                <Text style={tw`mt-1 text-red-500`}>
                  * {formik.errors.password}
                </Text>
              )}
            </View>
            <TouchableNativeFeedback
              onPress={() => {
                requestAnimationFrame(() => {
                  formik.handleSubmit();
                });
              }}
              background={TouchableNativeFeedback.Ripple('#fff', false)}>
              <View
                style={tw`items-center justify-center p-4 mt-4 bg-black border`}>
                <Text style={tw`text-base text-white`}>LOG IN</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginLayout;
