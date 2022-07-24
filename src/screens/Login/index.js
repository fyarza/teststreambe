import React from 'react';
import {connect} from 'react-redux';
import LoginLayout from './Layout';
import * as Yup from 'yup';
import {singInAction} from '@/store/actions/auth.actions';

const LoginController = ({navigation, _singInAction, user}) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email Invalido').required('Email Requerido'),
    password: Yup.string().required('Contraseña Requerida'),
  });

  const onSubmit = (values, actions) => {
    console.log(values);
    _singInAction(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <LoginLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = ({user}) => ({
  user,
});

export default connect(mapStateToProps, {
  _singInAction: singInAction,
})(LoginController);
