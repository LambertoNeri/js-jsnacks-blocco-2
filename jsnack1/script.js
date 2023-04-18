/* snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.  */
let numbers;
let verifier = false
let myArr = [];

for ( let i = 0; i < 6; i++ ) {
   numbers = parseInt(prompt("inserisci un numero"))
   
   if (numbers % 2 == 0 ) {
    console.log ('pari', numbers);
   } else {
    verifier = true
    console.log ('dispari', numbers);
    if (verifier == true) {
        parseInt(myArr.push(numbers))
    }
   }
}


for ( let i = 0; numbers.length; i++){
    element => typeof element === 'number'
    console.log ('dentro secondo', i)
}

console.log ('valore my Arr fuori',myArr)





