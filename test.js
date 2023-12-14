let mobile = {
  brand: "samsung",
  model: 2023,
  weight: "150g",
  price: 22,
};
let keys = Object.keys(mobile);
console.log(keys);

for (i = 0; i < keys.length; i++) {
  console.log(keys[i]);
  let value = mobile[keys[i]];
  console.log(value);
}
