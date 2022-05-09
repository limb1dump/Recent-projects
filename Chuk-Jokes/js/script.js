const displayText = document.querySelector('.display__text');
const button = document.querySelector('.button__submit');

const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random';

async function fetchChuckNorrisJoke() {
    const response = await fetch(chuckNorrisUrl);
    const data = await response.json();
    displayText.innerHTML = data.value;
};

button.addEventListener('click', fetchChuckNorrisJoke);
