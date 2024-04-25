const query = window.location.search;
const productId = query.split("=")[1];

fetchDetails();
function fetchDetails() {
  const productSection = document.querySelector(".product-section");

  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
      productSection.innerHTML = `
      <div class="img-container">
        <img
          src="${product.image}"
          alt="${product.title}"
        />
      </div>
      <div class="product-container">
        <h1>${product.title}</h1>
        <p>
          ${product.description}
        </p>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating.rate} ⭐ (${product.rating.count})</p>
        <button>Add To Cart</button>
      </div>
      `;
    });
}
