import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function ColorSelected() {
  const { colorSelected, isGameRunning } = useContext(ColorContext);
  return (
    <div
      hidden={ !isGameRunning }
      id="rgb-color"
    >
      { colorSelected }
    </div>
  )
}
