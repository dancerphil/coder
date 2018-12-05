import {Modal} from 'antd'
import {getFileType} from './util'

export const getLocal = () => {
  const state = localStorage.dancerphil_coder;
  if(!state) {
    return null;
  }
  try {
    const local = JSON.parse(state);
    // 迁移 file type
    local.files.forEach(file => {
      const {name} = file;
      file.type = getFileType(name);
    })
    return local
  } catch (e) {
    Modal.confirm({
      title: 'localStorage 不兼容',
      content: 'localStorage 会被清空，请复制以下有用信息：\n' + state
    })
    return null;
  }
};

export const setLocal = (state) => {
  localStorage.dancerphil_coder = JSON.stringify(state);
};
