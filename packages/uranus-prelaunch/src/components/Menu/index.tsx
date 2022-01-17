import React from 'react';
import { PlainMenu as UikitMenu } from 'uranus-uikit';

const Menu = (props) => {
  const isDark = true

  return <UikitMenu isDark={isDark} {...props} />
}

export default Menu