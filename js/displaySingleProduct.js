const singleProductContainer = document.querySelector(".layout");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);



const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function fetchSingleProduct() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();


        singleProductContainer.innerHTML = `
        <div style="padding-top: 50px" class="box-half">
        <img class="product-image" src="${results.image}" alt="${results.title}"/>
    </div>
    <div style="padding-top: 100px;" class="box-half">
        <h2>${results.title}</h2>    
            <p>${results.description}</p>
        <div class="product-x">
            <input style="width: 25px" type="number" id="quantity" name="quantity" min="1" value="5">
            <a href="checkout.html?id=${results.id}" class="light-button">Add to cart</a>
        </div>    
    </div>            
        `;
    } catch (error) {
        console.error("Error fetching product:", error);
        singleProductContainer.innerHTML = "There was an error fetching game details, please contact us or wait."
    }
}

fetchSingleProduct();