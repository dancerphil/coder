import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import { handleTextChange } from "../interface/handlers/files";

const JsEditor = ({style, code}) => (
  <AceEditor
    style={style}
    mode="javascript"
    theme="monokai"
    name="coder"
    onChange={handleTextChange}
    value={code}
    fontSize={14}
    showPrintMargin
    showGutter
    highlightActiveLine
    setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true, showLineNumbers: true, tabSize: 2 }}
  />
)

export default JsEditor;
