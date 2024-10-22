// index.js

// Cart functionality
let cart = [];
let totalPrice = 0;

// Add item to cart
function addToCart(itemName, itemPrice) {
    const item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(item.name));
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalElement.textContent = totalPrice.toFixed(2);
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Event listeners for adding items to the cart
document.querySelectorAll('.menu_btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const itemName = e.target.closest('.menu_card').querySelector('h2').textContent;
        const itemPrice = parseFloat(e.target.closest('.menu_card').querySelector('h3').textContent.substring(1));
        addToCart(itemName, itemPrice);
    });
});

// Clear cart button event listener
document.querySelector('.clear-cart-btn').addEventListener('click', () => {
    clearCart();
});

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !address || !phone || !email) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Invalid phone number.');
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Invalid email address.');
        return false;
    }

    return true;
}

// Submit form handler
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Order placed successfully!');
        clearCart();
    }
});

// Demo items data (Can expand this part to add more items)
const items = [
    { name: 'Burgur', price: 10 },
    { name: 'Pasta', price: 15 },
    { name: 'Pizza', price: 40 },
    { name: 'Ice-cream', price: 5 },
    { name: 'Biryani', price: 40 },
    { name: 'Lasagna', price: 10 },
    { name: 'Chocolate Drink', price: 10 },
    { name: 'Hot-Dog', price: 23 }
];

// Utility functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Expanding Functionality - Adding more UI behavior
// Toggle cart visibility
document.querySelector('.cart-icon').addEventListener('click', () => {
    document.querySelector('.cart-section').classList.toggle('active');
});

// Dynamic star rating (Expand or modify per product)
function setStarRating() {
    const stars = document.querySelectorAll('.menu_icon i');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('fa-solid');
                stars[i].classList.remove('fa-regular');
            }
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].classList.remove('fa-solid');
                stars[i].classList.add('fa-regular');
            }
        });
    });
}

// Call star rating function
setStarRating();

// Dynamically updating menu items from a database can also be implemented if needed.
// Example: Add a database connection and render items dynamically here.

