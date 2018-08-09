import React from 'react';
import Logo from '../Logo';

export default () => {
  return (
    <div
      style={{
        margin: '20px auto',
        textAlign: 'center',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#3E3A39',
        maxWidth: '1200px',
        width: '100%',
      }}
    >
      <Logo isDark />
      <div
        style={{
          color: '#999',
          lineHeight: 1.5,
          fontSize: 12,
          textAlign: 'right',
        }}
      >
        质子链
        <br />
        © 2018 版权所有
      </div>
    </div>
  );
};
