'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fizzBuzz(n) {
    
    for(let i=1; i<=n; i++){
        //var number = 1;
        //console.log(i);
        if(i%15===0){
            console.log("FizzBuzz");
        }
        else if(i%3===0){
            console.log("Fizz");
        } 
        else if(i%5===0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

}

rl.question("Enter a number: ", (input) => {
    const n = parseInt(input, 10);
    if (!isNaN(n)) {
      fizzBuzz(n);
    } else {
      console.log("Invalid input. Please enter a number.");
    }
    rl.close();
  });
