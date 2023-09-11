const url = "https://api.noroff.dev/api/v1/gamehub";

const productContainerRecommended = document.querySelector(".game-row-recommended");
const productContainerTrending = document.querySelector(".game-row-trending");

async function getRecommendedGames () {

    const response = await fetch(url);

    const results = await response.json();

    productContainerRecommended.innerHTML = "";
    
    for(let i = 0; i < results.length; i++) {

        if(i === 4) {
            break;
        }
       
       productContainerRecommended.innerHTML += `<a href="productpage.html?id=${results[i].id}">
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


}

async function getTrendingGames () {

    const response = await fetch(url);

    const results = await response.json();

    productContainerTrending.innerHTML = "";
    
    for(let i = 0; i < results.length; i++) {

        if(i === 8) {
            break;
        }
       
       productContainerTrending.innerHTML += `<a href="productpage.html?id=${results[i].id}">
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


}

getRecommendedGames();
getTrendingGames();






