import React from 'react';
import Menu from './menu';

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" 
      alt="Logo"
      style={{
        width: 'auto', 
        height: '150px', 
        display: 'block',
        margin: '0 auto', 
      }} />
      <Menu/>
    </header>
  );
};

export default Header;
