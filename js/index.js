let productContainer = document.querySelector(".productContainer");

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
              <a class="title" href="details.html?id=${product.id}">${
          product.title
        }</a>
              <p>${product.description.slice(0, 100) + "..."}</p>
              
              <a class="buyBtn" href="details.html?id=${product.id}">Buy for $${
          product.price
        }</a>
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
