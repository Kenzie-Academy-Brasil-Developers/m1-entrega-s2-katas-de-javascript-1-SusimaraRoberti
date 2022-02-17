//1
function oneThroughTwenty() {
  let i = 1;
  while (i < 21) {
    console.log(i);
    i++;
  }
  return "";
}
console.log(oneThroughTwenty());

//2
function evensToTwenty() {
  let pares = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      pares.push(i);
    }
  }
  return pares;
}
console.log(evensToTwenty());

//3
function oddsToTwenty() {
  let impares = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      impares.push(i);
    }
  }
  return impares;
}
console.log(oddsToTwenty());

//4
function multiplesOfFive() {
  let multiplos = [];
  for (let i = 5; i <= 100; i++) {
    if (i % 5 == 0) {
      multiplos.push(i);
    }
  }
  return multiplos;
}
console.log(multiplesOfFive());

//5
function squareNumbers() {
  let perfeitos = [];
  let resultado = 0;
  let contador = 1;
  do {
    resultado = contador * contador;
    perfeitos.push(resultado);
    contador++;
  } while (resultado < 100);
  return perfeitos;
}
console.log(squareNumbers());

//6
function countingBackwards() {
  let i = 20;
  while (i > 0) {
    console.log(i);
    i--;
  }
  return "";
}
console.log(countingBackwards());

//7
function evenNumbersBackwards() {
  let reversoPares = [];
  for (let i = 20; i >= 1; i--) {
    if (i % 2 == 0) {
      reversoPares.push(i);
    }
  }
  return reversoPares;
}
console.log(evenNumbersBackwards());

//8
function oddNumbersBackwards() {
  let contarReverso = [];
  for (let i = 20; i >= 1; i--) {
    if (i % 2 != 0) {
      contarReverso.push(i);
    }
  }
  return contarReverso;
}
console.log(oddNumbersBackwards());

//9
function multiplesOfFiveBackwards() {
  let reversoMultiplos = [];
  for (let i = 100; i >= 5; i--) {
    if (i % 5 == 0) {
      reversoMultiplos.push(i);
    }
  }
  return reversoMultiplos;
}
console.log(multiplesOfFiveBackwards());

//10
function squareNumbersBackwards() {
  let reversoPerfeitos = [];
  let resultado = 0;
  let contador = 100;
  do {
    resultado = contador * contador;
    if (resultado <= 100) {
      reversoPerfeitos.push(resultado);
    }
    contador--;
  } while (resultado > 1);
  return reversoPerfeitos;
}
console.log(squareNumbersBackwards());
