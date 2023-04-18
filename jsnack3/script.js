/* snack 2.3
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari  */

const myArr = [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
];

let addiction = (0);

/*let addiction = myArr[0] + myArr[2] + myArr[4] + myArr[6] + myArr[8]
console.log (addiction) */

for (let i = 0; i < myArr.length; i ++ ){
    if (i % 2 !== 0) {
        addiction += myArr[i];
    }   
}
console.log (addiction)