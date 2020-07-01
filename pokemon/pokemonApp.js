var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */ {
      input: "type",
      message: "What is your trainer name",
      name: "trainerName",
    },
    {
      type: "password",
      message: "password: ",
      name: "trainerPassword",
    },
    {
      type: "list",
      message: "Choose your starting Pokemon",
      choices: ["Bulbasaur", "Squirtle", "Charmeleon"],
      name: "trainerChoice",
    },
    {
      type: "confirm",
      message: "Are you sure?",
      default: "true",
      name: "trainerConfirm",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.trainerConfirm == true) {
      console.log(
        `Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for battle`
      );
    } else {
      console.log(
        `Thats okay ${answers.trainerName} come back when you are sure`
      );
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

let login = () => {
  console.log("logging in");
};

login();
