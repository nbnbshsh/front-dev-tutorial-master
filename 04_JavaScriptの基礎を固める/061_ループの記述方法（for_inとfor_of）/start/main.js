const arry = [1, 2, 3, 4, 5, 6];

for (let i in arry) {
    console.log(i);
};

for (let i in arry) {
    console.log(arry[i]);
};

for(let i in arry){
    console.log(i, arry[i]);
};

console.log("of");

for(let v of arry){
  console.log(v);
};