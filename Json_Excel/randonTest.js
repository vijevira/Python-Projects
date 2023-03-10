
let check = () => {
  let i = 0;
  let arr = [];
  while (true) {
    let randInt = Math.floor(Math.random() * 1000000);
    if (arr.includes(randInt)) {
      break;
    }
    arr.push(randInt);
    i += 1
  }
  // console.log(i);
  return i;
}
let arr = [];
let x = 1000000;
for (let i = 0; i<1000; i++){
  let num = check();
  arr.push(num);
  x = Math.min(x, num);
  // console.log(x);
}
console.log(arr,"\nMinimum: ",x);