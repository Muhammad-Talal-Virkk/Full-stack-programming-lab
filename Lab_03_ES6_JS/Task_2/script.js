// Cart Array
let cart = [];

// Function using Rest Operator
function addToCart(...items) {
    cart.push(...items);
}

// Function to load and display cart
function loadCart() {

    // Adding products using Rest operator
    addToCart("Laptop", "Mobile", "Headphones", "Keyboard");

    // Using Spread operator to clone cart
    const clonedCart = [...cart];

    // Using Array Destructuring
    const [firstItem, ...remainingItems] = clonedCart;

    // Display Output
    let output = `
        <div class="card">
            <h3>Total Items: ${clonedCart.length}</h3>
        </div>

        <div class="card">
            <h3>First Item:</h3>
            <p>${firstItem}</p>
        </div>

        <div class="card">
            <h3>Remaining Items:</h3>
            <p>${remainingItems.join(", ")}</p>
        </div>

        <div class="card">
            <h3>Updated Cart:</h3>
            <p>${clonedCart.join(", ")}</p>
        </div>
    `;

    document.getElementById("output").innerHTML = output;
}