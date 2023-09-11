const url = "https://api.noroff.dev/api/v1/gamehub";

const productContainerRecommended = document.querySelector(".game-row-recommended");
const productContainerTrending = document.querySelector(".game-row-trending");

async function getRecommendedGames() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();

        productContainerRecommended.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            if (i === 4) {
                break;
            }

            productContainerRecommended.innerHTML += `<a href="productpage.html?id=${results[i].id}">
                <div class="game-item">
                    <img src="${results[i].image}" alt="${results[i].title}" />
                    <div class="game-description">
                        <p>${results[i].title}</p>
                        <div class="platforms">
                            <img src="images/playstation-logotype.png" width="20px" alt="Playstation" />
                            <img src="images/xbox-logo.png" width="20px" alt="Xbox" />
                            <img src="images/steam.png" width="20px" alt="Steam" />
                        </div>
                    </div>
                    <div class="game-price">
                        <span class="old-price">${results[i].price}$</span>
                        <span class="new-price">${results[i].discountedPrice}$</span>
                    </div>
                </div>
            </a>`;
        }
    } catch (error) {
        console.error("Error fetching recommended games:", error);
        productContainerRecommended.innerHTML = "There was an error fetching recommended games, please contact us or wait.";
    }
}

async function getTrendingGames() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();

        productContainerTrending.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            if (i === 8) {
                break;
            }

            productContainerTrending.innerHTML += `<a href="productpage.html?id=${results[i].id}">
                <div class="game-item">
                    <img src="${results[i].image}" alt="${results[i].title}" />
                    <div class="game-description">
                        <p>${results[i].title}</p>
                        <div class="platforms">
                            <img src="images/playstation-logotype.png" width="20px" alt="Playstation" />
                            <img src="images/xbox-logo.png" width="20px" alt="Xbox" />
                            <img src="images/steam.png" width="20px" alt="Steam" />
                        </div>
                    </div>
                    <div class="game-price">
                        <span class="old-price">${results[i].price}$</span>
                        <span class="new-price">${results[i].discountedPrice}$</span>
                    </div>
                </div>
            </a>`;
        }
    } catch (error) {
        console.error("Error fetching trending games:", error);
        productContainerTrending.innerHTML = "There was an error fetching trending games, please contact us or wait.";
    }
}

getRecommendedGames();
getTrendingGames();






