const url = "https://api.noroff.dev/api/v1/gamehub";
const productContainer = document.querySelector(".game-row");

async function getAllGames() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const results = await response.json();

    productContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 16) {
        break;
      }

      productContainer.innerHTML += `<a href="productpage.html?id=${results[i].id}">
        <div class="game-item">
          <img src="${results[i].image}" alt="${results[i].title}"/>
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
    console.error("Error fetching games:", error);
    productContainer.innerHTML = "There was an error fetching our games, please contact us or wait.";
  }
}

getAllGames();