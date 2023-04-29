import evenElevator from "./evenElevator.js"
import oddElevator from "./oddElevator.js"

export default function elevator(answers) {
  // console.log(answers)
  // async function elevator(answers) {
  console.log('문이 열렸습니다.')
  console.log(`${answers.floornumber}층을 누르셨습니다.`)

  // await 
  new Promise((resolve, reject) => {
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
  // elevator(answers)
  // }
}