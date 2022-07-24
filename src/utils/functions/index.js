const setStore = (ACTION, data) => {
  return {type: ACTION, payload: data};
};

const dlog = (message, ...optionalParams) => {
  if (__DEV__) {
    console.log(message, ...optionalParams);
  }
};

export {setStore, dlog};
