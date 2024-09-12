// Esercizio 1 
function contaCifre(){
   let numeroCasuale =  prompt('inserisci un numero da 1 a 9999');
    if(numeroCasuale > 9999){
        prompt('numero non valido, inserisci un altro numero');
    }
    else{
       let quanteCifre = numeroCasuale.length;
       alert(`ecco quante cifre ha ${quanteCifre}`);
    }
}
contaCifre();


// Esercizio 2 
let numbers = [5, 7, 8, 20, 67];
function somma(){
  let sommaFinale =  numbers.reduce((acc, number) => acc + number, 0);
 console.log(sommaFinale);

}
somma();


// Esercizi 3

function generaArray(){
    let numero = prompt('inserisci un numero');
    let arr = [];
    for( let i = 0; i < numero; i++){
        let numeroCasuale = Math.random() * (10 - 1) + 1;
        let numeroArrotondato = Math.round(numeroCasuale);
        arr.push(numeroArrotondato);
    }
    console.log(arr);
}
generaArray();



// esercizio 4


function ordinaNumeri(){
    let numbers = [ 2, 6, 5, 23, 90, 45, 7, 67, 34, 55];
    let numeriOrdinati =  numbers.sort((a, b) => a - b);
    console.log(numeriOrdinati);
}

ordinaNumeri();