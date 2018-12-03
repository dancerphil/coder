import React from 'react';
import {connectWith} from 'redux-loadings'
import Editor from './Editor';
import { handleTextChange } from '../interface/handlers/files';

const EditorWrap = ({mouseDown, files, active}) => {
  const editorStyle = { flex: 1, width: '100%', background: '#272922' };
  if (mouseDown) {
    return <div style={editorStyle} />;
  }
  const { code } = files[active];

  return (
    <Editor
      style={editorStyle}
      onChange={handleTextChange}
      code={code}
    />
  );
};

const EditorConnect = connectWith(['consoleHeight', 'mouseDown', 'files', 'active'], EditorWrap);

export default EditorConnect;
