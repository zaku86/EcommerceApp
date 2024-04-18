let icon = document.querySelector(".icon");
let mobileLinks = document.querySelector(".mobile-links");
let showMenu = true;
let productContainer = document.querySelector(".productContainer");

icon.addEventListener("click", function () {
  if (showMenu === true) {
    mobileLinks.style.display = "block";
    showMenu = false;
  } else {
    mobileLinks.style.display = "none";
    showMenu = true;
  }
});

getApi();

function getApi() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let product = data[i];

        productContainer.innerHTML += `
          <div class="card">
            <div class="cardImg">
              <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="cardContent">
              <h2>${product.title}</h2>
              <p>${product.description.slice(0, 100) + "..."}</p>
              
              <button>Buy for $${product.price}</button>
            </div>
          </div>
        `;
      }
    });
}
// TODO:Work with weather apis
// persisting data in browser
// work on cart page
// work on single product page
// work on footer
// implement add to cart functionality
// implement payment
