let candies = 0;
let cursors = 0;
let cursorCost = 10;
let factories = 0;
let factoryCost = 1000;

// Update the displayed candy count, cursor count, and factory count
function updateDisplay() {
    document.getElementById("cookie-count").textContent = candies + " 🍬";
    document.getElementById("cursor-count").textContent = cursors;
    document.getElementById("factory-count").textContent = factories;
}

// Click event for candy button
document.getElementById("cookie-button").addEventListener("click", function () {
    candies++; // Increment candies by 1 on click
    updateDisplay(); // Update the display with the new candy count

    // Show pop-up emoji when clicking
    showEmojiPopUp("🍬");
});

// Buy a cursor (auto-clicker)
document.getElementById("buy-cursor").addEventListener("click", function () {
    if (candies >= cursorCost) {
        candies -= cursorCost; // Deduct the cursor cost
        cursors++; // Increase the number of cursors
        cursorCost = Math.floor(cursorCost * 1.2); // Increase the cursor cost
        updateDisplay(); // Update the display after purchasing a cursor

        // Show pop-up emoji when buying a cursor
        showEmojiPopUp("🍬");
    }
});

// Buy a candy factory (automates candy production)
document.getElementById("buy-factory").addEventListener("click", function () {
    if (candies >= factoryCost) {
        candies -= factoryCost; // Deduct the factory cost
        factories++; // Increase the number of candy factories
        factoryCost = Math.floor(factoryCost * 1.5); // Increase the factory cost
        updateDisplay(); // Update the display after purchasing a factory

        // Show pop-up emoji when buying a candy factory
        showEmojiPopUp("🏭");
    }
});

// Auto-increment candies from cursors every second
setInterval(function () {
    candies += cursors; // Add candies per second based on cursors
    updateDisplay(); // Update the display every second
}, 1000);

// Auto-increment candies from factories every 5 seconds
setInterval(function () {
    candies += factories * 10; // Add candies per 5 seconds based on factories (10 candies per factory)
    updateDisplay(); // Update the display every 5 seconds
}, 5000);

// Function to show emoji pop-up
function showEmojiPopUp(emoji) {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.textContent = emoji;

    // Append the emoji to the emoji container
    document.getElementById("emoji-container").appendChild(emojiDiv);

    // Remove the emoji after the animation ends (1 second)
    setTimeout(() => {
        emojiDiv.remove();
    }, 1000);
}

