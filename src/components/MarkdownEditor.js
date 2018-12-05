import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import { handleTextChange } from "../interface/handlers/files";

const MarkdownEditor = ({style, code}) => (
  <AceEditor
    style={style}
    mode="markdown"
    theme="monokai"
    name="coder"
    onChange={handleTextChange}
    value={code}
    fontSize={14}
    showPrintMargin
    showGutter
    highlightActiveLine
    setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true, showLineNumbers: true, tabSize: 2 }}
  />
)

export default MarkdownEditor;
