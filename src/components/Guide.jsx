import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function Guide() {
  const { isGameRunning } = useContext(ColorContext);
  return (
    <div>
      {
        isGameRunning ? "Escolha uma cor!" : "Aperte o botão 'Começar'"
      }
    </div>
  );
}
