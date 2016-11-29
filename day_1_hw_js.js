//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number 
"cat"; //string
true; //boolean
[]; //array
{}; //object
1.1; //number
undefined;//undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number

var a = 1.1;

//3.2 Assign a variable that is a string

var b = "blah";

//3.3 Assign a variable that is a boolean

var c = false;

//3.4 Assign a variable that is an object

var d = {name: "alex"};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var flag = false;
if ( flag ) {
  console.log("hello");
}
else {
  console.log("bye");
};


//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable

var raccoon = animals[0];

//5.2. Assign the last element to a variable

var gerbil = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable

var length = animals.length;

//5.4. Add an item to the end of the array

animals.push("dog");

//5.5. Add an item to the start of the array

animals.unshift("cat");

//5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = null;
for (var i = 0; i< animals.length; i++){
  if (animals[i] === "hedgehog") {
    hedgehogIndex = i;
  }
}
console.log(hedgehogIndex);
console.log( animals.indexOf("hedgehog") );


//Section 6

//6.1 Create an array of 5 vegetables

var vegetables = ["potato", "carrot", "leek", "onion", "swede"];

//6.2 Loop over the array and write to the console using a "while"

var counter = 0;
while (counter < vegetables.length){
  console.log(vegetables[counter]);
  counter++
}

//6.3 Loop again using a "for" with a counter

for (var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i])  ;
}

//6.4 Loop again using a "for in"

for (vegetable of vegetables) {
  console.log(vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

//7.1 Calculate the total cash in accounts

var totalCash = 0; 
for (account of accounts) {
  totalCash += account["amount"];
}
console.log("Total:", totalCash);

//7.2 Find the amount of money in the account with the largest balance

var highestBalance = accounts[0]["amount"];
for (account of accounts) {
  var thisBalance = account["amount"];
  if (thisBalance > highestBalance) {
    highestBalance = thisBalance;
  }
}
console.log("Largest balance:", highestBalance);


//7.3 Find the name of the account with the smallest balance

var lowestBalance = accounts[0]["amount"];
var lowestBalanceIndex = 0;
for (var i = 0; i < accounts.length; i++) {
  var thisBalance = accounts[i]["amount"];
  if ( thisBalance < lowestBalance) {
    lowestBalance = thisBalance;
    lowestBalanceIndex = i;
  }
}
console.log("Smallest balance:", accounts[lowestBalanceIndex].name);

//7.4 Calculate the average bank account value

var averageBalance = totalCash / accounts.length;
console.log("Average balance:", averageBalance); 

//7.5 Find the value of marcs bank account

for (account of accounts){
  if (account["name"] === "marc") {
    console.log("Marc's balance:", account["amount"]);
  }
}

//7.6 Find the holder of the largest bank account

var highestBalance = accounts[0]["amount"];
var highestBalanceIndex = 0;
for (var i = 0; i < accounts.length; i++) {
  var thisBalance = accounts[i]["amount"];
  if ( thisBalance > highestBalance) {
    highestBalance = thisBalance;
    highestBalanceIndex = i;
  }
}
console.log("Richest:", accounts[highestBalanceIndex]["name"]);

//7.7 Calculate the total cash in business accounts

var totalBusinessCash = 0; 
for (account of accounts) {
  if (account.type === "business") {
    totalBusinessCash += account["amount"];
  }
}
console.log("Total of business accounts:", totalBusinessCash);


//7.8 Find the largest personal account owner

var highestBalancePersonal = accounts[0]["amount"];
var highestBalancePersonalIndex = 0;
for (var i = 0; i < accounts.length; i++) {
  var personalAccount = (accounts[i].type === "personal");
  
  
  if (personalAccount){ 
    var thisBalance = accounts[i]["amount"];
    var newHighestBalance = (thisBalance > highestBalancePersonal);
      if (newHighestBalance) {
        highestBalancePersonal = thisBalance;
        highestBalancePersonalIndex = i;
    }
  }
}
console.log("Largest personal account:", accounts[highestBalancePersonalIndex]["name"]);


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Alex",
  height: 1.8,
  favouriteFood: "curry",
  eat: function(){
    console.log("Yum, yum");
  }
}

myPerson.eat();