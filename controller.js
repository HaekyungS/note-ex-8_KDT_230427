import inquirer from "inquirer"
// import evenElevator from "./models/evenElevator.js"
// import oddElevator from "./models/oddElevator.js"
import Choice from "inquirer/lib/objects/choice.js"
import elevator from "./models/Elevator.js"

inquirer
  .prompt([
    {
      type: "list",
      name: "chooseElevator",
      message: "엘리베이터를 골라주세요. (even 은 짝수, odd는 홀수)",
      choices: ["evenElevator", "oddElevator"]
    },
    {
      type: "list",
      name: "floornumber",
      message: "몇층을 가시나요?",
      choices: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }])
  .then((answers) => {
    elevator(answers)
  }
  )