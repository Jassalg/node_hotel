const exported  = require('./export');


var age = exported.age;
console.log("your export age is :"+age)

console.log("server is running")
var a = 10;
var b= 20 ;

var c = a+b
console.log("sum is: "+c)


function divide  (c ,d ){
  console.log("Divide is the: " +c/d)
}

divide(20,10);
// direct call function in the js


(function(){
    console.log("iam here bro");
})();

// callback func

function minus (e,f,tanish){

     var minus = e-f ;
     console.log(minus);
     tanish();
}

minus(50,20,()=> console.log("task is completed :"))

// convert jsonstring to the object
const jsonstring = '{"name": "john","age":"20" ,"roll_no":"545"}';
const jsonobject = JSON.parse(jsonstring);
console.log(jsonobject);


console.log(" ");

// convert object  to the jsonstring
const jsonobject1 = { name: 'john', age: '20', roll_no: '545' };
const jsonstring1 = JSON.stringify(jsonobject1);
console.log(jsonstring1);


