import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
// todo try move
import 'brace/ext/searchbox';

const Editor = ({style, onChange, code}) => (
  <AceEditor
    style={style}
    mode="javascript"
    theme="monokai"
    name="coder"
    onChange={onChange}
    value={code}
    fontSize={14}
    showPrintMargin
    showGutter
    highlightActiveLine
    setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true, showLineNumbers: true, tabSize: 2 }}
  />
)

export default Editor;
