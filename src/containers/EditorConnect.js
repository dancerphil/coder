import React, {Suspense, lazy} from 'react';
import {connectWith} from 'redux-loadings'

const JsEditor = lazy(() => import('../components/JsEditor'));
const MarkdownEditor = lazy(() => import('../components/MarkdownEditor'));

const style = { flex: 1, width: '100%', background: '#272922' }

const getEditor = (type) => {
  if (type === 'js') {
    return JsEditor;
  }
  return MarkdownEditor
}

const EditorWrap = ({mouseDown, files, active}) => {
  if (mouseDown) {
    // TODO 由于 react-ace 没有把 editor 实例给出，无法 resize，所以只能手动 unMount
    return <div style={style} />;
  }
  const { type, code } = files[active];
  const Editor = getEditor(type)
  return (
    <Suspense fallback={<div style={style} />}>
      <Editor style={style} code={code} />
    </Suspense>
  );
};

const EditorConnect = connectWith(['consoleHeight', 'mouseDown', 'files', 'active'], EditorWrap);

export default EditorConnect;
