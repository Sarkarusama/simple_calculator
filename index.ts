#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter a first number", type: "number", name: "firstNumber" },
  { message: "Enter a second number", type: "number", name: "secondNumber" },
  {
    message: "select a one method to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select a operator");
}
