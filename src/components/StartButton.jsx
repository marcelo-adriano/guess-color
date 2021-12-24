import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function StartButton() {
  const { isGameRunning, setGameStatus } = useContext(ColorContext);
  return (
    <button
      className={ isGameRunning ? "main-button cancel": "main-button start"}
      onClick={ () => setGameStatus(!isGameRunning) }
    >
      {
        isGameRunning ? "Cancelar" : "Começar"
      }
    </button>
  );
}
