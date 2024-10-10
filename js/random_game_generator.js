window.onload = function() {
    let games = ["Counter-Strike 2", "Hollow Knight", "Wizard101", "Sea of Thieves", "Rocket League"];
    const images = [
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/799960/header.jpg?t=1712863797",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1723208099",
        "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/header.jpg?t=1726865715"
    ];

    // Function to generate a random game
    function getRandomGame() {
        const rnd = Math.floor(Math.random() * games.length);
        return {
            name: games[rnd],
            image: images[rnd]
        };
    }

    // Function to display the random game
    function displayRandomGame() {
        const randomGame = getRandomGame();
        document.getElementById("gameName").innerText = randomGame.name;
        const gameImage = document.getElementById("gameImage");
        gameImage.src = randomGame.image;
        gameImage.style.display = "block"; // Show the image when a game is selected
    }

    // Event listener for button click
    const generateButton = document.getElementById("generateBtn");
    
    // Check if the button exists before adding an event listener
    if (generateButton) {
        generateButton.addEventListener("click", displayRandomGame);
    } else {
        console.error("Button with id 'generateBtn' not found.");
    }
};

