import React, { useContext } from 'react';
import ColorContext from '../contextAPI/ColorContext';

export default function ColorsOptions() {
  const { colors, colorSelected, handleClickColors, isGameRunning } = useContext(ColorContext);
  return (
    <div
      className="colors-containers"
      hidden={ !isGameRunning }
    >
      {
        colors.map((color) => <button
          className={ colorSelected === color ? "ball rightOne" : "ball wrongOne" }
          disabled={ !isGameRunning }
          key={ color }
          onClick={ handleClickColors }
          style={{
            backgroundColor: color,
          }}
        ></button>)
      }
    </div>
  )
}
