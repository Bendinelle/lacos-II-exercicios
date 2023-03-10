
// console.log(`Bem vindo ao TABUTECH, sua tabuada inteligente !`)
//   console.log('\n')

// let numRecebido = Number(prompt("A partir de qual número quer iniciar sua tabuada?"))

// for (let j = numRecebido; j <= 10; j++) {
//     console.log(`Tabuada de ${j}:`)

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${j} x ${i} = ${j * i}`)
//   }

//   console.log('\n')

// }

// console.log(`Espero ter ajudado, VOLTE SEMPRE !`)



// let numRecebido = Number(prompt("A partir de qual número quer iniciar sua tabuada?"));

// for (let j in [...Array(11).keys()].slice(numRecebido)) {
//   console.log(`Tabuada de ${Number(j) + numRecebido}:`);

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${Number(j) + numRecebido} x ${i} = ${(Number(j) + numRecebido) * i}`);
//   }

//   console.log('\n');
// }

// console.log(`Espero ter ajudado, VOLTE SEMPRE !`)


let numero = Number(prompt("Digite um número:"));

for (let i in [...Array(10).keys()]) {
  console.log(`${numero} x ${Number(i) + 1} = ${numero * (Number(i) + 1)}`);
}
