import React, { useState, useEffect } from "react";
import ColorContext from "./ColorContext";
import { atribuirCor, escolherBola, checarResposta } from "../hooks"

function ColorProvider({ children }) {
  const [colors, setColors] = useState(['red', 'green', 'blue', 'black', 'gray', 'white']);
  const [colorSelected, setColorSelected] = useState('');
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameRunning, setGameStatus] = useState(false);

  function handleClickColors({ target: { style: { backgroundColor } } }) {
    if (checarResposta(backgroundColor, colorSelected)) {
      const hitPoint = 3;
      setScore(score + hitPoint);
    }
    setColors(atribuirCor());
  }

  function storeScoreToLocalStorage() {
    if (!localStorage.getItem('ranking')) {
      localStorage.setItem('ranking', '0');
    }
    const oldRanking = JSON.parse(localStorage.getItem('ranking'));
    const newRanking = oldRanking < score ? score : oldRanking;
    localStorage.setItem('ranking', JSON.stringify(newRanking));
  }

  useEffect(() => {
    if (isGameRunning) {
      const gameTimer = 30;
      setColors(atribuirCor());
      setTimer(gameTimer);
      setScore(0);
    }
  }, [isGameRunning])

  useEffect(() => {
    setColorSelected(escolherBola(colors));
  }, [colors])

  useEffect(() => {
    const interval = 1000;
    setTimeout(() => {
      if (isGameRunning) {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setGameStatus(false);
          storeScoreToLocalStorage();
        }
      }
    }, interval)
  }, [timer])

  return (
    <div  className="main-container">
      <ColorContext.Provider value={ {
        colors,
        colorSelected,
        timer,
        setTimer,
        score,
        handleClickColors,
        isGameRunning,
        setGameStatus,
      } }>
        { children }
      </ColorContext.Provider>
    </div>
  );
}

export default ColorProvider;