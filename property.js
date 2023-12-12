let mobile = {
  brand: "samsung",
  model: "s20",
  weight: 200,
  version: 2022,
};
console.log(mobile);

// you can either change values and add properties.
mobile["weight"] = 150;
mobile["ram"] = "8gb";
mobile.version = "2023";
console.log(mobile);

// you can create properties using same values.
mobile.update = mobile.version;
console.log(mobile);

// you can change property name by deleting that one by sharing same values; but it will cause index cahnge because thr property you added will appear in last.
mobile.company = mobile.brand;
delete mobile.brand;
console.log(mobile);
