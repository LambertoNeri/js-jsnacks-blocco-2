/* snack 2.2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.  */

const names = [
    'Giorgio',
    'Luigi',
    'Mario',
    'Francesco',
    'Ludovico',
    'Franco',
    'Pino',
    'Gino',
    'Coriandolo',
    'Kenpa',
    'PelaGiorge'
]

const surnames = [
    'Neri',
    'Rossi',
    'Bianchi',
    'Chenneso',
    'Daje Roma Daje',
    'Alè',
    'Vito',
    'Ivaninsky',
    'Mirkoidolo',
    'Roma olimpia',
    'Colosseo',
]

let myArrNames = []
let myArrSurnames = []
let myRandomList = []


for ( let i = 0; i <= 20; i++) {
    let number = Math.floor(Math.random() * 11) + 1;
    let numberTwo = Math.floor(Math.random() * 11) + 1;
    myRandomList.push(names[(number - 1)] + surnames[(numberTwo - 1)])
    console.log ('questo è il numero 1', number)
    console.log ('questo è il numero 2', numberTwo)

}

console.log (myRandomList)

/*
for ( let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 6) + 1;
    myArrNames.push(names[(number - 1)])
}

for ( let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 6) + 1;
    myArrSurnames.push(surnames[(number - 1)])
}

console.log (myArrNames)
console.log (myArrSurnames)

for ( let i = 0; i <= myArrNames.length; i++) {
    let number = Math.floor(Math.random() * 10) + 1;
    let numberTwo = Math.floor(Math.random() * 10) + 1;
    myRandomList.push(myArrNames[(number - 1)] + myArrSurnames[(numberTwo - 1)])
}

console.log (myRandomList)
  */


