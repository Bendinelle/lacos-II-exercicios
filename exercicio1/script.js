const jogadores = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let i = 0; i < jogadores.length; i++) {

    for (let j = 0; j < jogadores[i].length; j++) {
        console.log(`Temporada ${i+1}: Atacante ${j+1} - ${jogadores[i][j]} gols`);
    }
    console.log('\n')
}

//USANDO FOR IN

// const jogadores = [
//   [27, 4, 20, 13, 14],
//   [11, 15, 12, 8, 9],
//   [5, 5, 12, 16, 4],
//   [20, 33, 11, 12, 19],
//   [3, 3, 4, 5, 10]
// ]

// for (let i in jogadores) {

//   for (let j in jogadores[i]) {
//     console.log(`Temporada ${Number(i) + 1}: Atacante ${Number(j) + 1} - ${jogadores[i][j]} gols`)
//   }
//     console.log('\n')
// }

//USANDO FOR OF

// const jogadores = [
//   [27, 4, 20, 13, 14],
//   [11, 15, 12, 8, 9],
//   [5, 5, 12, 16, 4],
//   [20, 33, 11, 12, 19],
//   [3, 3, 4, 5, 10]
// ];

// for (let i of jogadores) {
//   for (let j of i) {
//     console.log(`Temporada ${jogadores.indexOf(i) + 1}: Atacante ${i.indexOf(j) + 1} - ${j} gols`);
//   }
//     console.log('\n')
// }

