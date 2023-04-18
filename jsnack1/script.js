/* snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.  */
let numbers;
let myArr = [];

for ( let i = 0; i < 6; i++ ) {
   numbers = prompt("inserisci un numero")
   
   if (numbers % 2 == 0 ) {
    console.log ('pari', numbers);
   } else if (isNaN(numbers)) {
    console.log ('not a number', numbers)
   } else {
    console.log ('dispari', numbers);
    myArr.push(numbers)
   }
}




console.log ('valore my Arr fuori',myArr)





