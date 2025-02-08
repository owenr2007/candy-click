// Game variables
let cookies = 0;
let cursors = 0;
let cursorCost = 10;

// Update the displayed cookie count
function updateDisplay() {
    document.getElementById("cookieCount").textContent = cookies;
    document.getElementById("cursorCount").textContent = cursors;
}

// Click event for cookie button
document.getElementById("cookieButton").addEventListener("click", function () {
    cookies++; // Increment cookies by 1 on click
    updateDisplay();
});

// Buy a cursor (auto-clicker)
document.getElementById("buyCursor").addEventListener("click", function () {
    if (cookies >= cursorCost) {
        cookies -= cursorCost; // Deduct the cursor cost
        cursors++; // Increase the number of cursors
        cursorCost = Math.floor(cursorCost * 1.2); // Increase the cursor cost
        updateDisplay();
    }
});

// Auto-increment cookies from cursors every second
setInterval(function () {
    cookies += cursors; // Add cookies per second based on cursors
    updateDisplay();
}, 1000);
