//Ul dove verranno inseriti i risultati
const outputList = document.getElementById('output');
//Ciclo da 1 a 100
for (let n = 1; n <= 100; n**) {
    // Stringa per memorizzare output
    let output = " ";
    // Controlli
    if (n % 3 === 0) {
        output += "Fizz";
    }
    if (n % 5 === 0) {
        output += "Buzz";
    }
    // Output vuoto
    if (output === " ") {
        output = n;
    }
    
}