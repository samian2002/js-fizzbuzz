// Seleziona l'elemento ul dove verranno inseriti i risultati
const outputList = document.getElementById('output');

// Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
  //Stringa vuota per memorizzare output
  let output = '';

  // Controlli
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // Output vuoto
  if (output === '') {
    output = i;
  }

  // Crea un elemento li
  const listItem = document.createElement('li');
  listItem.textContent = output;
  outputList.appendChild(listItem);
}

