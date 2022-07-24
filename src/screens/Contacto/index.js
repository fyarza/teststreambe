import {removeContactAction} from '@/store/actions/contact.actions';
import React from 'react';
import {connect} from 'react-redux';
import LayoutContacto from './Layout';

const ContactosController = ({navigation, route, _removeContactAction}) => {
  const {contacto} = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const removeContact = contact => {
    _removeContactAction(contact);
    goBack();
  };
  return (
    <LayoutContacto
      contacto={contacto}
      goBack={goBack}
      _removeContactAction={removeContact}
    />
  );
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps, {
  _removeContactAction: removeContactAction,
})(ContactosController);
