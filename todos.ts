` #! /usr/bin/env node`
 import inquirer from "inquirer";

let todos: string[] = ["coding", "Gym"];

async function createTodos(todos: string[]) {
    
 
    let answer = await inquirer.prompt({
        type: "list",
        message: "Select an option",
        name: "option",
        choices: ["Add", "Update", "View", "Delete"]
    });

    if (answer.option === "Add") {
        let addMore = await inquirer.prompt({
            type: "input",
            message: "Add task to the list",
            name: "addmore"
        });

        todos.push(addMore.addmore);
        todos.forEach((task) => console.log(task));
    }

    if (answer.option === "Update") {
        let updateMore = await inquirer.prompt({
            type: "list",
            message: "Update task in the list",
            name: "updateTask",
            choices: todos.map((item) =>(item))
        });
    
         let addMore = await inquirer.prompt(
          {
            type: "input",
            message: "Add task to the list",
            name: "todo",
          }          
       
        );
       
        let newTask = todos.filter((val) =>val !==updateMore.updateTask);
        todos =[...newTask,addMore.todo]
    }
    if (answer.option === "View") {
        console.log("**** TO DO LIST ****")
        console.log(`todos:`,todos);
        console.log("*****************");
    }
    if (answer.option === "Delete") {
       
    }
        let deleteTask = await inquirer.prompt({
            type:   "list",
            message: `Delete task from the list`,
            name:    "deleteTask",
            choices: todos.map((item)=>(item))
        });

        let newTask = todos.filter((val) => val !== deleteTask .deletTask);
        todos = [...newTask];
        console.log(todos);
                 
   
      }  

        createTodos(todos);




