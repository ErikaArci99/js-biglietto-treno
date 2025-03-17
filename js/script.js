// variabili

let priceKm = 0.21;
let km = prompt('inserisci i km da percorrere');
let price = priceKm * km;
let firstDiscout = price * 0.2;
let secondDiscount = price * 0.4;
let age = prompt('inserisci la tua età');


// condizioni

if(age < 18){
    finalPrice = (price - firstDiscout);
}

else if( age > 64){
    finalPrice = (price - secondDiscount);
}

else{
    finalPrice = price;
}


// prezzo da pagare

finalPrice = finalPrice.toFixed(2)
console.log(finalPrice);