
// Store card image file names in an array
let cards = Array.from({ length: 20 }, (_, i) => `images/card${i + 1}.gif`);
let deck = [...cards]; // Copy of the full deck

// Card descriptions (example descriptions, modify as needed)
let cardDescriptions = [
    "The card of new beginnings.",
    "A sign of good fortune ahead.",
    "Challenges may come, but you will persevere.",
    "A time for self-reflection and wisdom.",
    "Something unexpected is about to unfold.",
    "A moment of clarity awaits you.",
    "You must make an important choice.",
    "Your patience will be rewarded.",
    "A reminder to trust your instincts.",
    "Adventure and excitement are in your future.",
    "A past lesson will come in handy.",
    "Collaboration will bring success.",
    "Take a risk; it will pay off.",
    "Beware of distractions on your path.",
    "Now is the time to focus on your goals.",
    "A message from an old friend may surprise you.",
    "You are more capable than you realize.",
    "Luck is on your side today.",
    "Balance is the key to success.",
    "A mystery will soon be solved."
];

// Function to shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to draw a card and navigate to card.html
function drawCard() {
    if (deck.length === 0) {
        alert("Deck is empty! Shuffling...");
        deck = [...cards];
        shuffleDeck();
    }
    let drawnCard = deck.pop();
    let cardIndex = cards.indexOf(drawnCard);
    
    // Store the drawn card info in sessionStorage
    sessionStorage.setItem("drawnCard", drawnCard);
    sessionStorage.setItem("cardDescription", cardDescriptions[cardIndex]);

    // Navigate to the new page
    window.location.href = "card.html";
}

// Initial shuffle when the page loads
shuffleDeck();

// Attach event listeners
document.getElementById("shuffleBtn").addEventListener("click", () => {
    shuffleDeck();
    document.getElementById("cardImage").src = "images/default.png"; // Reset to back of card
    // Add the spin-card class to trigger the animation
    const cardImage = document.getElementById('cardImage');
    cardImage.classList.add('spin-card');
    
    // After the animation completes, remove the class to reset for the next shuffle
    setTimeout(() => {
        cardImage.classList.remove('spin-card');
    }, 1000); // 1000ms matches the duration of the animation
});

document.getElementById("drawBtn").addEventListener("click", drawCard);

// Function to draw a card and navigate to card.html
function drawCard() {
    if (deck.length === 0) {
        alert("Deck is empty! Shuffling...");
        deck = [...cards];
        shuffleDeck();
    }
    let drawnCard = deck.pop();
    let cardIndex = cards.indexOf(drawnCard);
    
    // Store the drawn card info in sessionStorage
    sessionStorage.setItem("drawnCard", drawnCard);
    sessionStorage.setItem("cardDescription", cardDescriptions[cardIndex]);

    // Navigate to the new page
    window.location.href = "card.html";
}

// Attach event listener to the default card image
document.getElementById("cardImage").addEventListener("click", drawCard);