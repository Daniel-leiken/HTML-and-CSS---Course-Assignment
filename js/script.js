const url = "https://api.noroff.dev/api/v1/gamehub";

const resultsContainer = document.querySelector(".results");

async function getGames () {

    const response = await fetch(url);

    const results = await response.json();

    resultsContainer.innerHTML = "";
    
    for(let i = 0; i < results.length; i++) {
        console.log(results[i].title);

        if(i === 8) {
            break;
        }
       
       //resultsContainer.innerHTML += `<div class="game-item">${results[i].title}</div> <div class="game-description">hello</div>`;
       resultsContainer.innerHTML += `<a href="productpage.html">
                    <div class="game-item">
                        <img src="/images/GameHub_covers3.jpg" alt="Black"/>
                        <div class="game-description">
                            <p>${results[i].title}</p>
                            <div class="platforms">
                                <img src="images/playstation-logotype.png" width="20px" alt="Playstation" />
                                <img src="images/xbox-logo.png" width="20px" alt="Xbox" />
                                <img src="images/steam.png" width="20px" alt="Steam" />
                            </div>
                        </div>
                        <div class="game-price">
                            <span class="old-price">59,99$</span>
                            <span class="new-price">39,99$</span>
                        </div>
                    </div>
                </a>`;
    }


}

getGames();