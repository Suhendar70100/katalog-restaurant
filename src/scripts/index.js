import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import "./component/nav-item.js";
import "./component/card-item.js";

// Fetch data json
import('../DATA.json').then(({
    default: jsonData
}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function (data) {
        dataList += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : &#11088
                    <span class="list_item_rating_value" tabindex="0">${data['rating']}</span>
                </p>
                <h1 class="list_item_title" tabindex="0">${data['name']}</h1>
                <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#tes').innerHTML = dataList;
});

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});