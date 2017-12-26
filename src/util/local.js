import defaultState from './defaultState';

export const getLocal = () => {
  let localStorageState = defaultState;
  const state = localStorage.dancerphil_coder;
  if (state) {
    try {
      localStorageState = JSON.parse(state);
    } catch (e) {
      localStorageState = defaultState;
    }
  }
  return localStorageState;
};

export const setLocal = (state) => {
  localStorage.dancerphil_coder = JSON.stringify(state);
};
