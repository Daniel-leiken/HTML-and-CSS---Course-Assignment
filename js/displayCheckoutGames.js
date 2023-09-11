const singleProductContainer = document.querySelector(".layout");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function fetchSingleProduct() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const results = await response.json();


        singleProductContainer.innerHTML = `
        <div class="box-half">
        <h2>Enter your credit or debit card</h2>
        <form action="">
            <div style="display: flex; width:100%">
            <div style="width: 50%;">
                <input type="text" id="firstName" name="firstName" placeholder="CVC" style="width: 100%; box-sizing: border-box; margin-right: 4px;" />
            </div>
            <div style="width: 50%;">
                <input type="text" id="lastName" name="lastName" placeholder="Expiration date (MM/YY)" style="width: 100%; box-sizing: border-box; margin-left: 4px;" />
            </div>
            </div>
            <div>
            <input type="email" id="creditcard" name="Creditcard" placeholder="Creditcard number (XXXX XXXX XXXX XXXX)" style="width: 100%; box-sizing: border-box; margin-top: 10px;" />
            </div>
        </form>
        <h2>Returning customer?</h2>
        <form action="">
            <div style="display: flex; width:100%">
              <div style="width: 50%;">
                <input type="text" id="firstName" name="firstName" placeholder="First Name" style="width: 100%; box-sizing: border-box; margin-right: 4px;" />
              </div>
              <div style="width: 50%;">
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" style="width: 100%; box-sizing: border-box; margin-left: 4px;" />
              </div>
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder="Email" style="width: 100%; box-sizing: border-box; margin-top: 10px;" />
            </div>
        </form> 
    </div>
    <div style="padding-top: 100px;" class="box-half">
        <div class="checkout-summary">
            <h3>Subtotal</h3>
            <h3>${results.price}$</h3>
        </div>
        <div class="checkout-summary">
            <h3>1x ${results.title}</h3>
            <h3>${results.price}$</h3>

        </div>
        <div class="checkout-summary">
            <h2>Totalprice</h2>
            <h2>${results.price}$</h2>
        </div>
        <div class="checkout-summary">
            <a href="checkout-success.html" class="light-button">Confirm payment</a>
        </div>          
    </div>    
</h2>            
        `;
    } catch (error) {
        console.error("Error fetching product:", error);
        singleProductContainer.innerHTML = "There was an error fetching game details, please contact us or wait."
    }
}

fetchSingleProduct();