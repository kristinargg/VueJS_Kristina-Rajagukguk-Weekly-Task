// No 3

const foo = ["Budi", "Sita", "Ayu"];
const [a, b, c] = foo;

console.log("variabel a adalah " + a);
console.log("variabel b adalah " + b);
console.log("variabel c adalah " + c);

// No 4

let bdays = ["10/17", "05/19", "20/19"];
console.log(bdays);

//No 5
let value = [1, 2, 3, 4, 5, 6];
let map1 = value.map((a) => a * 2);

console.log(map1);

// No 6
let arr = [1.5, 2.56, 5.1, 12.33];
console.log([
  Math.round(arr[0]),
  Math.round(arr[1]),
  Math.round(arr[2]),
  Math.round(arr[3]),
]);
