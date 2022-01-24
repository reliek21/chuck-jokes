import { getJoke } from "./provider";
import '../css/main.css';


const body = document.querySelector('.container');
let btnGetJoke, olList;

const createHtml = () => {
    const html = `
        <button class="btn btn-outline-success">Get joke</button>
        <hr>
        <ol class="mt-2 list-group d-flex flex-column-reverse">
        </ol>
    `;

    const divJoke = document.createElement('div');
    divJoke.innerHTML = html;
    body.append(divJoke);
}

const event = () => {
    btnGetJoke = document.querySelector('button');
    olList = document.querySelector('ol');

    btnGetJoke.addEventListener('click', async () => {
        btnGetJoke.disabled = true;
        const joke = await getJoke();
        drawJoke(joke);
        btnGetJoke.disabled = false;

    });
}

const drawJoke = (joke) => {
    const olItem = document.createElement('li');
    const img = document.createElement('img');
    const divContainer = document.createElement('div');

    divContainer.classList.add('r-flex', 'mt-2');

    // create img
    img.src = joke.icon_url;
    img.width = 50;
    img.classList.add('me-2');
    divContainer.append(img);

    // select a class with a random number
    const colorArray = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const randomNumber = Math.floor(Math.random() * 8);

    // create item
    olItem.innerHTML = joke.value;
    olItem.classList.add('list-group-item', `list-group-item-${colorArray[randomNumber]}`);
    divContainer.append(olItem);

    olList.append(divContainer);
}

export const init = () => {
    createHtml();
    event();
}