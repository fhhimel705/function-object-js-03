let pc = {
  processor: "i7",
  ram: 16,
  gen: 10,
  monitor: "msi",
};

let pcKeys = Object.keys(pc);

for (i = 0; i < pcKeys.length; i++) {
    // console.log(pcKeys[i]);
    let pcValues = pc[pcKeys[i]];
    console.log(pcKeys[i],pcValues);
}
