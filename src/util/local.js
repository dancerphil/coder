import defaultState from './defaultState';

export const getLocal = () => {
  let localStorageState = defaultState;
  const state = localStorage.dancerphil_coder;
  if (state) {
    try {
      localStorageState = JSON.parse(state);
      // migrate code => files[{name: '', code}]
      if (localStorageState.code) {
        const { code } = localStorageState;
        delete localStorageState.code;
        localStorageState.files = [{ name: 'index.js', code }];
        localStorageState.active = 0;
      }
    } catch (e) {
      localStorageState = defaultState;
    }
  }
  return localStorageState;
};

export const setLocal = (state) => {
  localStorage.dancerphil_coder = JSON.stringify(state);
};
