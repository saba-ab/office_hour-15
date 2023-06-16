function getSalePrice(productPrice, salePercentage) {
  let sale = (productPrice * salePercentage) / 100;
  let salePrice = productPrice - sale;
  price = document.createElement("p");
  price.textContent = salePrice;
  document.body.appendChild(price);
}
getSalePrice(120, 20);

const productArr = [
  {
    name: "Product 1",
    price: 200,
    created_at: "01-02-2022",
  },
];
function renderProductData(array) {
  array.forEach((object) => {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    const productName = document.createElement("div");
    container.appendChild(productName);
    productName.innerHTML = `სახელი : ${object.name}`;
    const productPrice = document.createElement("div");
    container.appendChild(productPrice);
    productPrice.innerHTML = `ფასი : ${object.price}`;
    const creationDate = document.createElement("div");
    container.appendChild(creationDate);
    creationDate.innerHTML = `გამოქვეყნების თარიღი : ${object.created_at}`;
  });
}

renderProductData(productArr);

const button = document.createElement("button");
// button.setAttribute("onClick", "openLink()");

button.addEventListener("click", () => {
  window.open("https://www.youtube.com");
});
button.textContent = "click";
document.body.appendChild(button);

const mixArr = [1, 7, "one", 10, 30, 3, "two"];

function getNumbers(arr) {
  return arr.filter((element) => typeof element === "number");
}
let numbers = getNumbers(mixArr);
const numbersparagraph = document.createElement("p");
numbersparagraph.innerHTML = numbers;
document.body.appendChild(numbersparagraph);
console.log(numbers);

const products = [
  { product_id: 1, amount: 200 },
  { product_id: 2, amount: 300 },
  { product_id: 3, amount: 500 },
];
let amounts = [];

function getSum(productArr) {
  productArr.forEach((product) => {
    amounts.push(product.amount);
    return amounts;
  });
  const amountsSum = amounts.reduce(
    (acumulator, currentvalue) => acumulator + currentvalue,
    0
  );
  return amountsSum;
}
let sum = getSum(products);
console.log(sum);

const laptops = [
  { product_id: 1, price: 200 },
  { product_id: 2, price: 50 },
  { product_id: 3, price: 500 },
];

const filteredLaptops = laptops.filter(function (laptop) {
  return laptop.price > 100;
});
filteredLaptops.forEach((laptop) => {
  const expensiveLaptops = document.createElement("p");

  expensiveLaptops.innerHTML = `<div>
    ${laptop.product_id} ${laptop.price}
  </div>`;
  document.body.appendChild(expensiveLaptops);
});

function sortWithPrice(products) {
  products.sort((a, b) => a.price - b.price);
}
sortWithPrice(laptops);

const laptopsDiv = document.createElement("div");
document.body.appendChild(laptopsDiv);
function addLaptopToHTML(productArr) {
  productArr.forEach((laptop) => {
    const laptopParagraph = document.createElement("p");
    const values = Object.values(laptop);
    const valueSeparated = values.join("-");
    laptopParagraph.textContent = valueSeparated;
    laptopsDiv.appendChild(laptopParagraph);
    console.log(values);
  });
}
addLaptopToHTML(laptops);

laptops.forEach((laptop) => {
  laptop.is_manual = true;
});
console.log(laptops);
addLaptopToHTML(laptops);
