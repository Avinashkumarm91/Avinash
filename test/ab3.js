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
 b=1000;
 c=100000;

 console.log(userInput[0]*[b]);
 console.log(userInput[0]*[c]);

  //end-here
});