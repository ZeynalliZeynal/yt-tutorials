'use strict';

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

// cart
let cart = [];

// buttons
let buttonsDOM = [];

// getting products
class Products {
  async getProduct() {
    try {
      const result = await fetch('products.json');
      const data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products
class UI {
  displayProducts(param) {
    let result = '';
    param.forEach((product) => {
      const { id, image, price, title } = product;
      result += `
        <article class="product">
          <div class="img-container">
            <img
              src="${image}"
              alt="${title}"
              class="product-img"
            />
            <button class="bag-btn" data-id="${id}">
              <i class="fa-solid fa-cart-shopping"></i>
              add to bag
            </button>
          </div>
          <h3>${title}</h3>
          <h4>$${price}</h4>
        </article>
      `;
    });
    productsDOM.insertAdjacentHTML('afterbegin', result);
  }
  getBagBtns() {
    const bagBtns = [...document.querySelectorAll('.bag-btn')];
    buttonsDOM = bagBtns;
    bagBtns.forEach((bagBtn) => {
      let id = bagBtn.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        bagBtn.innerText = 'In Cart';
        bagBtn.disabled = true;
      }
      bagBtn.addEventListener('click', (e) => {
        e.target.textContent = 'In Cart';
        e.target.disabled = true;

        // get product from products
        let cartItem = { ...Storage.getProduct(id), amount: 1 };

        // add product to the cart
        cart = [...cart, cartItem];

        // save cart
        Storage.saveCart(cart);

        // set cart values
        this.setCartValues(cart);

        // add cart to ui
        this.addCartItem(cartItem);

        // show the cart
        this.showCart();
      });
    });
  }
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;

    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });

    cartTotal.textContent = parseFloat(tempTotal.toFixed(2));
    cartItems.textContent = itemsTotal;
    console.log(cartTotal, cartItems);
  }
  addCartItem(item) {
    cartContent.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <h4>${item.title}</h4>
          <h5>$${item.price}</h5>
          <span class="remove-item" data-id="${item.id}">remove</span>
        </div>
        <div>
          <i class="fa-solid fa-chevron-up" data-id="${item.id}"></i>
          <p class="item-amount">${item.amount}</p>
          <i class="fa-solid fa-chevron-down" data-id="${item.id}"></i>
        </div>
      </div>
    `
    );
    console.log(cartContent);
  }
  toggleCart() {
    cartOverlay.classList.toggle('transparentBcg');
    cartDOM.classList.toggle('showCart');
  }
  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populate(cart);

    cartBtn.addEventListener('click', this.showCart);
    closeCartBtn.addEventListener('click', this.hideCart);
  }
  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  hideCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
  }
}

// local storage
class Storage {
  static saveProduct(param) {
    localStorage.setItem('products', JSON.stringify(param));
  }
  static saveCart(param) {
    localStorage.setItem('carts', JSON.stringify(param));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find((product) => product.id === id);
  }
  static getCart() {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();

  // setup app
  ui.setupAPP();

  // get all products
  products
    .getProduct()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProduct(products);
    })
    .then(() => {
      ui.getBagBtns();
    });
});
