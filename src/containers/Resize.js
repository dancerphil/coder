import React from 'react';
import { connectWith, set } from 'redux-loadings'
import { Icon } from 'antd';
import { handleOpen } from '../interface/handlers/feature'

const handleMouseUp = () => {
  set('mouseDown', false)
}

const handleUp = () => {
  set('consoleHeight', 160);
  set('mouseDown', true)
}

const handleDown = () => {
  set('consoleHeight', 0);
  set('mouseDown', true)
}

const Trigger = ({consoleHeight}) => {
  if (consoleHeight === 0) {
    return <Icon style={{ marginRight: 4, cursor: 'pointer' }} onMouseDown={handleUp} onMouseUp={handleMouseUp} type="caret-up"/>
  }
  return <Icon style={{ marginRight: 4, cursor: 'pointer' }} onMouseDown={handleDown} onMouseUp={handleMouseUp} type="caret-down"/>
}

const TriggerConnect = connectWith('consoleHeight', Trigger);

const Resize = () => (
  <div
    id="resize"
    style={{ display: 'flex', justifyContent: 'space-between', height: '20px', cursor: 'row-resize', background: '#333333', color: '#909090' }}
  >
    <span style={{ marginLeft: 8, fontSize: 12 }}>Console</span>
    <span>
    <Icon style={{ marginRight: 4, cursor: 'pointer' }} onClick={handleOpen} type="bars"/>
    <TriggerConnect />
  </span>
  </div>
);

export default Resize
