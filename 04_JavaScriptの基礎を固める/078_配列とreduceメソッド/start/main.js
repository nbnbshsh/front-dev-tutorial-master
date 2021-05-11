const arry = [1,2,3,4,5];

arry.reduce(function(accu,curr){
  console.log(accu,curr);
  return accu+curr;
})

arry.reduce(function(accu,curr){
  console.log(accu,curr);
  return accu+curr;
},10)

const str="animation";
const strArry=str.split('');

const result = strArry.reduce((accur,curr)=>{
 return accur+"<"+curr+">";
},"")

const result1 = strArry.reduce((accur,curr)=>{
  return `${accur}<${curr}>`;
 },"")

 console.log(result1);
 console.log(result);
