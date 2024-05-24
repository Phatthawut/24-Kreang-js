let productLists = [];
let productId = 0;
let totalPrice = 0;

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const imageURL = document.getElementById("imageURL").value;

  const newProduct = {
    id: productId++,
    productName: productName,
    productPrice: productPrice,
    imageURL: imageURL,
  };

  productLists.push(newProduct);

  console.log(productLists);

  productDashboard(newProduct);
});

function productDashboard(productList) {
  const dashSection = document.getElementById("productDashboard");
  const productCard = document.createElement("div");
  productCard.className = "flex gap-2 px-2 py-2";
  productCard.innerHTML = `<input type="checkbox" />
  <img class="h-24 object-contain" src="${productList.imageURL}"/>
  <div>
    <h3>${productList.productName}</h3>
    <p>${productList.productPrice}</p>
    <button class="rounded bg-blue-400 px-2 py-1 font-bold text-white">Edit</button>
  </div>`;
  dashSection.appendChild(productCard);
}
