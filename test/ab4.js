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
  let a=parseFloat(userInput[0]);
  let b=parseFloat(a * [9/5]+32);

  console.log(b.toFixed(2));

  //end-here
});