import { useEffect } from 'react';
import { connectWith } from 'redux-loadings';
import { setLocal } from '../util/local';

const AutoSave = ({files, active, output, consoleHeight, mouseDown}) => {
  useEffect(() => {
    setLocal({files, active, output, consoleHeight, mouseDown});
  })
  return null;
}

export default connectWith(['files', 'active', 'output', 'consoleHeight', 'mouseDown'], AutoSave, () => 'loading');
