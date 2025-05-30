function addProduct() {
  // Prende il valore dell'input
  const input = document.querySelector('input');
  const taskText = input.value.trim();

  // Se l'input è vuoto, non fa nulla
  if (taskText === "") return;

  // Crea un nuovo elemento <li>
  const li = document.createElement('li');

  // Crea la checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Crea lo span per il testo del task
  const span = document.createElement('span');
  span.textContent = taskText;

  // Aggiunge la checkbox e il testo al <li>
  li.appendChild(checkbox);
  li.appendChild(span);

  // Aggiunge il <li> alla lista
  document.querySelector('ul').appendChild(li);

  // Svuota l'input dopo l'aggiunta
  input.value = '';
}
