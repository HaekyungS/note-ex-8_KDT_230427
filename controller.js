import inquirer from "inquirer"
import evenElevator from "./models/evenElevator.js"
import oddElevator from "./models/oddElevator.js"
import Choice from "inquirer/lib/objects/choice.js"

inquirer
  .prompt([
    {
      type: "list",
      name: "chooseElevator",
      message: "엘리베이터를 골라주세요. (even 은 짝수, odd는 홀수)",
      choices: [evenElevator, oddElevator]
    },
    {
      type: "list",
      name: "floornumber",
      message: "몇층을 가시나요?",
      choices: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }])
  .then((answers) => {
    // console.log(answers)
    async function elevator(answers) {
      console.log('문이 열렸습니다.')
      console.log(`${answers.floornumber}층을 누르셨습니다.`)

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('문이 닫힙니다. 올라가겠습니다.')
          resolve()
        }, 1000)
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (answers.chooseElevator === 'evenElevator') {
                evenElevator(answers.floornumber)
              } else {
                oddElevator(answers.floornumber)
              }
              resolve()
            }, answers.floornumber * 1000)
          })
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('문이 닫힙니다.')
              resolve()
            }, 1000)
          })
        })
    }
    elevator(answers)
  })