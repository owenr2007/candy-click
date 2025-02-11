let candies = 0;
let cursors = 0;
let cursorCost = 10;

// Update the displayed candy count and cursor count
function updateDisplay() {
    document.getElementById("cookie-count").textContent = candies + " 🍬";
    document.getElementById("cursor-count").textContent = cursors;
}

// Click event for candy button
document.getElementById("cookie-button").addEventListener("click", function () {
    candies++; // Increment candies by 1 on click
    updateDisplay(); // Update the display with the new candy count
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

// Auto-increment candies from cursors every second
setInterval(function () {
    candies += cursors; // Add candies per second based on cursors
    updateDisplay(); // Update the display every second
}, 1000);

// Function to show emoji pop-up
function showEmojiPopUp(emoji) {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.textContent = emoji;

    // Append the emoji to the emoji container
    document.getElementById("emoji-container").appendChild(emojiDiv);

    // Remove the emoji after the animation ends (1 second)
    setTimeout(() => {
        emojiDiv.remo
