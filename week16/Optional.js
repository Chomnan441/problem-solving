function groupBy(items, property) {
  //Start Coding Here
  const result = {};
  for (let i = 0; i <= items.length - 1; i++) {
    if (!(items[i][property] in result)) {
      result[items[i][property]] = [items[i]];
    } else if (items[i][property] in result) {
      result[items[i][property]].push(items[i]);
    }
  }
  return result;
}
let result1 = groupBy(
  [
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" },
  ],
  "type",
);

console.log(result1);
// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }
