import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function FeedBack() {
  const { score, isGameRunning } = useContext(ColorContext);
  const biggerScore = localStorage.getItem('ranking');
  return (
    <div
      hidden={ isGameRunning }
      className={ !isGameRunning ? "feedback-container" : ""}
    >
      <div
        className="last-score"
        hidden={ score === 0 ? true : false}
      >
        <h3>Última Pontuação:</h3>
        <p>{ score }</p>
      </div>
      <div
        className="bigger-score"
        hidden={ !biggerScore }
      >
      <h3>Maior Pontuação:</h3>
      <p>{ biggerScore }</p>
      </div>
    </div>
  )
}
