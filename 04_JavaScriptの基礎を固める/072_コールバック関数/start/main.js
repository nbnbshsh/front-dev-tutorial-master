function doSomething1(a,b,callback){
  // console.log(callback(a,b));
  const result=callback(a,b)
  console.log(result);
}

function multiply1(a,b){
  return a*b;
}
function plus1(a,b){
  return a+b;
}

doSomething1(4,5,multiply1);
doSomething1(4,5,plus1);


function doSomething(a,b,callback){
  const result=callback(a,b)
  console.log(result);
}

function multiply(a,b){
  return a*b;
}
function plus(a,b){
  return a+b;
}

doSomething(2,2,multiply);
doSomething(2,3,plus);



function hello4(callback,name){
  console.log(callback);
  console.log("hello "+callback(name));
}
hello4(function(getname){
  return "NOBUHIKO "+getname;
},"ITO ");

function hello3(callback){
  console.log(callback);
  console.log("hello "+callback());
}
hello3(()=>"NOBUHIKO");


function hello2(callback){
  console.log(callback);
  console.log("hello "+callback());
}
hello2(function(){
  return "NOBUHIKO";
});


function hello1(callback){
  console.log(callback);
  console.log("hello "+callback());
}

function getName(){
  return "ITO";
}

hello1(getName);

function hello(name){
  console.log("hello "+name);
}

hello("Code Mafia");