// Cart -Functionality

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let hideCart = document.querySelector("#close-cart");

// Display Cart

cartIcon.onclick = () => {
  cart.classList.add("cart-active");
};

// Exit Cart

hideCart.onclick = () => {
  cart.classList.remove("cart-active");
};

// Cart Deletion

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let deleteCart = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < deleteCart.length; i++) {
    let deleteButton = deleteCart[i];
    deleteButton.addEventListener("click", deleteCartItem);
  }
}

function deleteCartItem(e) {
  let clickDeleteButton = e.target;
  clickDeleteButton.parentElement.remove();
}

