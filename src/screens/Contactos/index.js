import {listContactsAction} from '@/store/actions/contact.actions';
import {SCREEN_CONTACTO} from '@/utils/constants/navigation';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import LayoutContactos from './Layout';

const ContactosController = ({navigation, _listContactsAction, contacts}) => {
  useEffect(() => {
    _listContactsAction();
  }, [_listContactsAction]);

  const navigateScreenContacto = item => {
    navigation.navigate({
      name: SCREEN_CONTACTO,
      params: {
        contacto: item,
      },
    });
  };
  return (
    <LayoutContactos
      navigateScreenContacto={navigateScreenContacto}
      contacts={contacts}
    />
  );
};

const mapStateToProps = ({contacts}) => ({
  contacts,
});

export default connect(mapStateToProps, {
  _listContactsAction: listContactsAction,
})(ContactosController);
