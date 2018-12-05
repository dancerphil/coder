import { set, getResults } from 'redux-loadings';


export const handleClick = () => {
  set('output', '');
  const [files, active] = getResults(['files', 'active']);
  const { type, code } = files[active];
  if(type === 'js') {
    try {
      eval(code); // eslint-disable-line no-eval
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('no log for '+type);
  }
};

let preY = null;

// optimize
let mouseDownCopy = false;
const setMouseDown = (value) => {
  set('mouseDown', value);
  mouseDownCopy = value;
}

export const handleMouseDown = (e) => {
  if (e.target.id === 'resize') {
    preY = e.clientY;
    setMouseDown(true);
  }
};

export const handleMouseMove = (e) => {
  if (mouseDownCopy) {
    const consoleHeight = getResults('consoleHeight');
    const dy = preY - e.clientY;
    preY = e.clientY;
    const heightAfter = consoleHeight + dy;
    if (heightAfter < 0) {
      set('consoleHeight', 0);
      setMouseDown(false);
    } else {
      set('consoleHeight', consoleHeight + dy);
    }
  }
};

export const handleMouseUp = () => {
  setMouseDown(false);
};
