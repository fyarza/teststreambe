import {listContactsAction} from '@/store/actions/contact.actions';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import LayoutContactos from './Layout';

const ContactosController = ({navigation, _listContactsAction, contacts}) => {
  useEffect(() => {
    _listContactsAction();
  }, [_listContactsAction]);
  return <LayoutContactos />;
};

const mapStateToProps = ({contacts}, store) => ({
  contacts,
});

export default connect(mapStateToProps, {
  _listContactsAction: listContactsAction,
})(ContactosController);
