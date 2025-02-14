// Store card image file names in an array
let cards = Array.from({ length: 20 }, (_, i) => `images/card${i + 1}.gif`);
let deck = [...cards]; // Copy of the full deck

// Card descriptions (specific to each card)
let cardDescriptions = [
    "The card of new beginnings.",  // Card 1
    "A sign of good fortune ahead.", // Card 2
    "Challenges may come, but you will persevere.", // Card 3
    "A time for self-reflection and wisdom.", // Card 4
    "Something unexpected is about to unfold.", // Card 5
    "A moment of clarity awaits you.", // Card 6
    "You must make an important choice.", // Card 7
    "Your patience will be rewarded.", // Card 8
    "A reminder to trust your instincts.", // Card 9
    "Adventure and excitement are in your future.", // Card 10
    "A past lesson will come in handy.", // Card 11
    "Collaboration will bring success.", // Card 12
    "Take a risk; it will pay off.", // Card 13
    "Beware of distractions on your path.", // Card 14
    "Now is the time to focus on your goals.", // Card 15
    "A message from an old friend may surprise you.", // Card 16
    "You are more capable than you realize.", // Card 17
    "Luck is on your side today.", // Card 18
    "Balance is the key to success.", // Card 19
    "A mystery will soon be solved." // Card 20
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

    // Extract card index from filename (e.g., "images/card5.gif" -> 5)
    let cardNumber = parseInt(drawnCard.match(/\d+/)[0], 10) - 1;

    // Store the drawn card info in sessionStorage
    sessionStorage.setItem("drawnCard", drawnCard);
    sessionStorage.setItem("cardDescription", cardDescriptions[cardNumber]);

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

// Attach event listener to the default card image
document.getElementById("cardImage").addEventListener("click", drawCard);