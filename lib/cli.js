const inquirer = require("inquirer");

class CLI {
  constructor() {
    this.employee_name = "";
    this.department_name = "";
    this.salary = "";
    this.shapeColor = "";
  }

  run() {
    return (
      inquirer
        .prompt([
          {
            name: "employee_manager",
            type: "list",
            message: "What would you like to do?",
            choices: [
              {
                name: "employee_name",
                value: "rect",
              },
              {
                name: "employee_id",
                value: "circle",
              },
              {
                name: "department_name",
                value: "triangle",
              },
              {
                name: "department_id",
                value: "triangle",
              },
              {
                name: "department_role",
                value: "triangle",
              },
              {
                name: "salary",
                value: "triangle",
              },
              {
                name: "manager",
                value: "triangle",
              },
            ],
          },
        ])
        .then(({ shape }) => {})
        //   .then(({ textColor }) => {})
        //   .then(({ shape }) => {})
        //   .then(({ shapeColor }) => {})
        .then(() => {
          return this;
        })
        .catch((err) => {
          console.log(err);
          console.log("Oops. Something went wrong.");
        })
    );
  }
}

module.exports = CLI;

// inquirer docs

//lists and choices let you choose items
//this means this instance of a class
//constructor is what gets called when you make a new instance
//constructor is for classes / creating a class
//use output to display the final product
//
