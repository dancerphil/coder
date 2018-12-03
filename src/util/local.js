export const getLocal = () => {
  const state = localStorage.dancerphil_coder;
  if(!state) {
    return null;
  }
  try {
    return JSON.parse(state);
  } catch (e) {
    return null;
  }
};

export const setLocal = (state) => {
  localStorage.dancerphil_coder = JSON.stringify(state);
};
