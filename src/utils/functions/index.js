const setStore = (ACTION, data) => {
  return {type: ACTION, payload: data};
};

export {setStore};
