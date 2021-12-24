export function randomNumberRGB() {
  return Math.round(Math.random() * 255);
}

export function randomNumberIndex() {
  return Math.round(Math.random() * 5);
}

export function randomColor() {
  let corResposta = 'rgb(';
  corResposta += randomNumberRGB();
  corResposta += ', ';
  corResposta += randomNumberRGB();
  corResposta += ', ';
  corResposta += randomNumberRGB();
  corResposta += ')';
  return corResposta;
}

export function escolherBola(colors) {
  const numero = randomNumberIndex();
  const cor = colors[numero];
  return cor;
}

export function atribuirCor() {
  const arrayLength = 6;
  const colorArray = [];
  for (let index = 0; index < arrayLength; index += 1) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

export function checarResposta(ChosenColor, rightColor) {
  return ChosenColor === rightColor;
}