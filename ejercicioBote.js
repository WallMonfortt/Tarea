//Este codigo es el de las pildoras, no es parte de la tarea pero estaba en la misma carpeta, sorry :'(


function fundBote(pildoras, botes, weight) {
  let totalSpectedWeight = 0;
  let pildoraLigera = 0.1;
  for (let i = 1; i <= botes ; i++){
    let element = i;
    totalSpectedWeight += pildoras - element;
  }

  let result = weight - totalSpectedWeight;
  let bote = result / pildoraLigera;
  return Math.round(bote);
}

console.log(fundBote(100, 20, 1799.6));