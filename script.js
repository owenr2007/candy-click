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
    updateDisplay();
});

// Buy a cursor (auto-clicker)
document.getElementById("buy-cursor").addEventListener("click", function () {
    if (candies >= cursorCost) {
        candies -= cursorCost; // Deduct the cursor cost
        cursors++; // Increase the number of cursors
        cursorCost = Math.floor(cursorCost * 1.2); // Increase the cursor cost
        updateDisplay();
    }
});

// Auto-increment candies from cursors every second
setInterval(function () {
    candies += cursors; // Add candies per second based on cursors
    updateDisplay();
}, 1000);
