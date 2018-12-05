import { useEffect } from 'react';
import { connectWith } from 'redux-loadings';
import { setLocal } from '../util/local';

const AutoSave = ({files, active, output, consoleHeight}) => {
  useEffect(() => {
    setLocal({files, active, output, consoleHeight});
  })
  return null;
}

export default connectWith(['files', 'active', 'output', 'consoleHeight'], AutoSave, () => 'loading');
