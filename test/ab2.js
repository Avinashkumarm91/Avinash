// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
 let x=userInput[0];
 let y=userInput[1];
 let z=userInput[2];

  console.log(Math.max(userInput[0],userInput[1],userInput[2]));

  //end-here
});