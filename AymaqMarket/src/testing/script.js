// Simulated cart data - agar bo‘sh bo‘lsa, [] qil
const cartItems = [

];

// const cartItems = []; // <-- Agar bo‘sh holatni test qilmoqchi bo‘lsang, faqat shuni yoz

const cartItemsContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total-container');
const checkoutBtn = document.getElementById('checkout-btn');
const emptyMsg = document.getElementById('empty-msg');

function loadCart() {
  if (cartItems.length === 0) {
    emptyMsg.textContent = "Your cart is empty 🛒";
    return;
  }

  emptyMsg.style.display = "none";
  totalContainer.style.display = "flex";
  checkoutBtn.style.display = "block";

  let total = 0;

  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="item-info">
        <img src="${item.image}" alt="${item.name}" />
        <div class="item-details">
          <span>${item.name}</span>
          <span class="item-price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
      <span>${item.quantity}x</span>
    `;

    cartItemsContainer.appendChild(div);
  });

  document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

loadCart();
