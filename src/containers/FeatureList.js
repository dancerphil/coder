import React from 'react';
import {connectWith} from 'redux-loadings'
import {Modal,Checkbox} from 'antd';
import {handleClose} from '../interface/handlers/feature'

const FeatureList =({featureListOpen}) =>(
  <Modal
    title="功能列表"
    visible={featureListOpen}
    onOk={handleClose}
    onCancel={handleClose}
  >
    <Checkbox checked>JavaScript 语法高亮与自动提示</Checkbox><br />
    <Checkbox checked>JavaScript 运行结果</Checkbox><br />
    <Checkbox checked>本地代码保存</Checkbox><br />
    <Checkbox checked>多文件</Checkbox><br />
    <Checkbox checked={false}>支持文本</Checkbox><br />
    <Checkbox checked={false} disabled>CodePen & JsFiddle</Checkbox><br />
    <Checkbox checked={false} disabled>下载离线版本</Checkbox><br />
    <Checkbox checked={false} disabled>Python 支持</Checkbox><br />
    <Checkbox checked={false} disabled>Chrome 多设备代码同步</Checkbox><br />
  </Modal>
);

export default connectWith('featureListOpen', FeatureList);
