//Ciclo i numeri da 1 a 100
for (let i = 1; i <= 100; i ++) {
    //Controllo che il numero sia multimo sia di 3 che di 5
    //Devo verificare che dividendno per 3 e per 5 in resto sia 0, (controllo che entrmbi i test siano veri con &&)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    //Controllo se è multiplo di 3
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    //Controllo i multipli di 5
    else if (i % 5 === 0) {
        console.log("Buzz")
    }

}