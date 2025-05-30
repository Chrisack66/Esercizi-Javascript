async function mostraCarta() {
  try {
    const response = await fetch('https://ringsdb.com/api/public/card/01001'); //Aragorn
    const card = await response.json();

    const cardDiv = document.createElement('div'); // Creazione del div con il testo allineato al centro
    cardDiv.style.textAlign = 'center';

    const title = document.createElement('h2'); // Creazione del titolo con il nome della carta
    title.textContent = card.name;

    const image = document.createElement('img'); // Creazione dell'immagine della carta
    image.src = `https://ringsdb.com/bundles/cards/${card.code}.png`;
    
    // Aggiungiamo al DIV il titolo e l'immagine
    cardDiv.appendChild(title); 
    cardDiv.appendChild(image);

    // Aggiungiamo la struttura del div al body
    document.body.appendChild(cardDiv);
  } catch (error) {
    console.error('Errore nel recupero della carta:', error);
  }
}

mostraCarta();
