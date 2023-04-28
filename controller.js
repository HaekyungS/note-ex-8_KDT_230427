import inquirer from "inquirer"

inquirer
  .prompt([{
    type: "list",
    name: "floornumber",
    message: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }])
  .then((answers)=>{
    console.log()
  })