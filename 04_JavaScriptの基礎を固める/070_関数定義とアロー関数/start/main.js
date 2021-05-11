arry=[1,2,3,4]

arry.forEach(value => console.log(value));

const hello4 = (name,age) =>{
console.log(name+age);
console.log("hello "+name+age);
}
hello4("yamada ",22);

const hello3 = (name,age) =>console.log(name+age);
hello3("yagami ",40);

const hello2 = name =>console.log(name);
hello2("yagami");

function hello(name="Tom"){
  console.log("hello"+name);
}

hello();
hello(" Code ");
hello(" Code2 ");

const hello1=function(name="ito"){
  console.log("hello "+name)
}

hello1();
hello1("nobu ");