const arry= new Array(1,2,3,4,5,6);
console.log(arry[5]);
arry[5]=8;
arry.push('moji');
console.log(arry);

const arry2=[1,2,3,4,5,6,"nobu",false];
arry2.unshift('new');
arry2.pop();
console.log(arry2);
console.log(arry2.length);
const val=arry2.pop();
console.log(val);
const val2=arry2.shift();
console.log(val2);
console.log(arry2);