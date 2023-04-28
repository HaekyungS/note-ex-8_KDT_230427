import inquirer from "inquirer"
import evenElevator from "./evenElevator.js"
import oddElevator from "./oddElevator.js"
import Choice from "inquirer/lib/objects/choice.js"

inquirer
  .prompt([
    {
      type: "list",
      name: "chooseElevator",
      message: "어느 엘리베이터를 타시겠습니까?",
      choices : [evenElevator, oddElevator]
    },
    {
      type: "list",
      name: "floornumber",
      message: "몇층을 가시나요?",
      choices: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }])
  .then((answers) => {
    console.log(answers)
    if(answers.chooseElevator==='evenElevator'){
      evenElevator(answers.floornumber)
    }else{
      oddElevator(answers.floornumber)
    }
  })