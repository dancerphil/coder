import React from 'react';
import { connectWith } from 'redux-loadings'

const Console = ({ consoleHeight, output }) => (
    <div style={{ height: `${consoleHeight}px`, overflow: 'auto', padding: '0 16px', background: '#272922' }} >
      <pre style={{ margin: 0 }}>{output}</pre>
    </div>
);

export default connectWith(['consoleHeight', 'output'], Console);
