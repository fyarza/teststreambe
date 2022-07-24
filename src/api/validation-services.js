import {ToastAndroid} from 'react-native';

export default (message, ex) => {
  const status404 = String(message).includes('404');
  const status403 = String(message).includes('403');
  const status401 = String(message).includes('401');
  const status422 = String(message).includes('422');
  const isNetwork = String(message).includes('Network');
  if (!status404 && !status401 && !status422 && !status403) {
    ToastAndroid.showWithGravity(
      isNetwork
        ? 'Verifica tu conexión a internet'
        : 'No se pudo completar la solicitud. Vuelve a intentarlo más tarde.',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  }
};
