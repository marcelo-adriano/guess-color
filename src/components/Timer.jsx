import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function Timer() {
  const { timer, isGameRunning } = useContext(ColorContext);
  return (
    <div
      hidden={ !isGameRunning }
    >
      { timer }
    </div>
  );
}
