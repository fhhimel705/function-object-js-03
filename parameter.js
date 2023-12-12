// parameter works like value which makes the code dynamic

function myFun(parameter) {
  let sum = parameter + 10;
  console.log(sum);
}
console.log("hello world!");
myFun(10);

// you can take parameters as much as you want but not infinity

function infinity(a,b,c,d,e,f){
    let add = a + b + c + d + e + f;
    console.log(add);
}
console.log("hello world!");
infinity(10,11,12,13,14,15);


// you can run conditions inside a function

function goo(ghost) {
  if (ghost < 20) {
    let sum02 = ghost + 30;
    console.log(sum02);
  } else if (ghost < 30) {
    let sum03 = ghost + 20;
    console.log(sum03);
  } else {
    let sum04 = ghost + 10;
    console.log(sum04);
  }
}
console.log("hello world!");
goo(30);
