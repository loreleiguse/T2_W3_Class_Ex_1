let valOne = 5;

if(valOne >= 0){
    console.log("The Number is Positive")
} else {
    console.log("This Number is Negative")
}

let value = 6;

if(value % 2 === 0){
    console.log("The Number is Even")
} else {
    console.log("The Number is Odd")
}

let str = "Hello World";

if(str.length > 10){
    console.log("String count is over 10 and is " + str.length)
} else {
    console.log("String count is not over 10 and is " + str.length)
}

let valTwo = 10;

if(valTwo > 5 && valTwo < 15){
    console.log("The Number is between 5 & 15")
} else {
    console.log("The Number is not between 5 & 15")
}

let age = 18;
let user = "Lorelei";

if(age > 18 || user === "Lorelei"){
    console.log("I Pull Up")
} else {
    console.log("No Way China!")
}

let valThree = 10;

for(let i = 0; i <= valThree; i++){
    console.log(i)
}

for(let i = valThree; i >= 0; i--){
    console.log(i)
}

let totalTwo = 0;

for(let i = 0; i <= 10; i++){
    totalTwo += i;
}

console.log(totalTwo)

let nameArray = ["Mike", "James", "Tim", "Greg", "Annie", "Susan", "Jacob"];
let isSusan = false;
let isJames = false;
let isDave = false;

for(let i = 0; i < nameArray.length; i++){
   if(nameArray[i] === "Susan"){
    isSusan = true;
   }

   if(nameArray[i] === "James"){
    isJames = true;
   }

   if(nameArray[i] === "Dave"){
    isDave = true;
   }
}

// if(!isSusan){
//     console.log("Yeah! Susan is on the list!")
// } else {
//     console.log("Susan is Not on the list!")
// }

console.log("Is Susan on the list? Answer: " + isSusan);
console.log("Is James on the list? Answer: " + isJames);
console.log("Is Dave on the list? Answer: " + isDave);

let numberArray = [10, 50, 83, 54, 32, 78, 65, 100];
let total = 0;

for(let i = 0; i < numberArray.length; i++){
    total += numberArray[i];
}

console.log(total)