import React from 'react';
import { handleClick, handleMouseDown, handleMouseMove, handleMouseUp } from '../interface/handlers/global';

const Global = ({children}) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', overflow: 'hidden', color: '#f8f8f2' }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
}

export default Global;
