import {removeContactAction} from '@/store/actions/contact.actions';
import React from 'react';
import {connect} from 'react-redux';
import LayoutContacto from './Layout';

const ContactosController = ({navigation, route, _removeContactAction}) => {
  console.log(route);
  const {contacto} = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  return <LayoutContacto contacto={contacto} goBack={goBack} />;
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps, {
  _removeContactAction: removeContactAction,
})(ContactosController);
