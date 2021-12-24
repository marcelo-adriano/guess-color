import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function Score() {
  const { score, isGameRunning } = useContext(ColorContext);
  return (
    <div
      hidden={ !isGameRunning }
      id="Score"
    >
      { score }
    </div>
  )
}
