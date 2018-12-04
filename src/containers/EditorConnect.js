import React, {Suspense, lazy} from 'react';
import {connectWith} from 'redux-loadings'

const Editor = lazy(() => import('../components/JsEditor'));

const EditorWrap = ({mouseDown, files, active}) => {
  const style = { flex: 1, width: '100%', background: '#272922' }
  if (mouseDown) {
    // TODO 由于 react-ace 没有把 editor 实例给出，所以只能手动 unMount
    return <div style={style} />;
  }
  const { code } = files[active];

  return (
    <Suspense fallback={<div style={style} />}>
      <Editor style={style} code={code} />
    </Suspense>
  );
};

const EditorConnect = connectWith(['consoleHeight', 'mouseDown', 'files', 'active'], EditorWrap);

export default EditorConnect;
