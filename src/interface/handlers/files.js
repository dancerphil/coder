import { set, getResults } from 'redux-loadings';
import { getFileType } from "../../util/util";

export const handleTextChange = (value) => {
  const [files, active] = getResults(['files', 'active']);
  files[active].code = value;
  set('files', files.slice());
};

export const handleFileNew = (name) => {
  const files = getResults('files');
  const type = getFileType(name);
  files.push({
    type,
    name,
    code: '',
  });
  set('files', files.slice());
  set('active', files.length - 1);
};

export const handleFileSelect = index => () => {
  set('active', index);
};

export const handleFileDelete = (index) => {
  const files = getResults('files');
  if (files.length > 1) {
    files.splice(index, 1);
    set('files', files.slice());
    set('active', 0);
  }
};
