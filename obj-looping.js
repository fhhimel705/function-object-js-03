let car = {
  brand: "toyota",
  model: "supar mk4",
  color: "white",
  price: 150,
  weight: 110,
};
let tools = ["mirror", "gear", "tier", "bar"];
let age = [22, 23, 18, 15, 12, 56];
let frinedsAge = {
    roni : 22,
    bonny : 23,
    boltu : 18,
    shelum : 15,
    Rumi : 12,
    baga : 56,
};
const keys = Object.keys(car);
console.log(keys);

const values = Object.values(car);
console.log(values);

for(i=0; i<keys.length; i++){
    let property = keys[i];
    let propertyValue = car[property];
    console.log(property,propertyValue);
}