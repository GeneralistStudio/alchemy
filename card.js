// Retrieve the drawn card from sessionStorage
let drawnCard = sessionStorage.getItem("drawnCard") || "images/default.png";
let cardDescription = sessionStorage.getItem("cardDescription") || "No description available.";

// Update the card display
document.getElementById("drawnCardImage").src = drawnCard;
document.getElementById("cardDescription").innerText = cardDescription;

// Redraw button logic
document.getElementById("redrawBtn").addEventListener("click", () => {
    window.location.href = "index.html"; // Go back to main page for a new draw
});