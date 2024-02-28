"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getOneBits' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function getOneBits(n) {
  function getOneBits(n) {
    // First, we convert the number 'n' to binary
    const binary = n.toString(2);

    // Then, we reverse this binary number to start from the least significant bit
    const reversedBinary = binary.split("").reverse().join("");

    // We create an empty list to keep track of the positions where we find 1s
    const oneBits = [];

    // We start counting how many 1s we find
    let count = 0;

    // Now, we go through each digit of the binary number
    for (let i = 0; i < reversedBinary.length; i++) {
      // If we find a 1, we increase the count of 1s and note down its position
      if (reversedBinary[i] === "1") {
        count++;
        oneBits.push(i + 1); // We add 1 to the position to make it easier to understand (counting from 1 instead of 0)
      }
    }

    // Finally, we return the count of 1s and their positions
    return [count, ...oneBits];
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const result = getOneBits(n);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
