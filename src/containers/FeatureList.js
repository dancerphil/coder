import React from 'react';
import {connectWith} from 'redux-loadings'
import {Modal,Checkbox, Tabs} from 'antd';
import {handleClose} from '../interface/handlers/feature'

const {TabPane} = Tabs

const FeatureList =({featureListOpen}) =>(
  <Modal
    title="功能列表"
    visible={featureListOpen}
    onOk={handleClose}
    onCancel={handleClose}
  >
    <Tabs>
      <TabPane key="0" tab="功能列表">
        <Checkbox checked>本地代码实时保存，识别文件后缀</Checkbox><br />
        <Checkbox checked>支持 .js 文件(highlight, snippet, console.log)</Checkbox><br />
        <Checkbox checked>支持 .md 文件(highlight)</Checkbox><br />
        <Checkbox checked={false}>快捷连接 CodePen & JsFiddle & CodeSandbox</Checkbox><br />
        <Checkbox checked={false}>支持 Python</Checkbox><br />
      </TabPane>
      <TabPane key="1" tab="不准备支持">
        <Checkbox checked={false} disabled>离线版本</Checkbox><br />
        <Checkbox checked={false} disabled>服务器代码运行</Checkbox><br />
        <Checkbox checked={false} disabled>Chrome 代码同步</Checkbox><br />
      </TabPane>
      <TabPane key="2" tab="帮助">
        <Checkbox checked>snippet 选择 cl 输入 console.log</Checkbox><br />
        <Checkbox checked>注入了 lodash，通过 _ 调用</Checkbox><br />
      </TabPane>
    </Tabs>
  </Modal>
);

export default connectWith('featureListOpen', FeatureList);
