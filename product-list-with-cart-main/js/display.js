import {data} from "./data.js";

const productList = document.querySelector('#productList');

window.addEventListener('dataLoaded', () => {
    displayData(data);
}, false);

function displayData(data) {
    data.map(dessert => {
        const {image:{desktop:picture}, name, category, price} = dessert;
        productList.innerHTML += `
            <section class="product-card">
            <div>
                <img src=${picture} alt=${name}>
                <button class="resting"><figure><img src="./assets/images/icon-add-to-cart.svg" alt=""></figure> Add to Cart</button>
            </div>
            <h2>${category}</h2>
            <p><b>${name}</b></p>
            <p>${price}€</p>
        </section>
        `
    })
}