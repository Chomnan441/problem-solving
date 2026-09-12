function filterProducts(products, targetCategory, targetPrice) {
  //Start Coding Here
  const result = [];
  for (let i = 0; i <= products.length - 1; i++) {
    if (
      products[i].category === targetCategory &&
      products[i].price <= targetPrice
    ) {
      result.push(products[i]);
    }
  }
  return result;
}

let result = filterProducts(
  [
    { name: "Notebook", category: "stationery", price: 50 },
    { name: "Pen", category: "stationery", price: 20 },
    { name: "Shoes", category: "fashion", price: 90 },
    { name: "Bag", category: "fashion", price: 300 },
    { name: "Pencil", category: "stationery", price: 10 },
  ],
  "stationery",
  30,
);

console.log(result);
// Expected Output:
// [
//   { name: "Pen", category: "stationery", price: 20 },
//   { name: "Pencil", category: "stationery", price: 10 }
// ]
