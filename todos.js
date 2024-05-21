"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
` #! /usr/bin/env node`;
const inquirer_1 = __importDefault(require("inquirer"));
let todos = ["coding", "Gym"];
function createTodos(todos) {
    return __awaiter(this, void 0, void 0, function* () {
        let answer = yield inquirer_1.default.prompt({
            type: "list",
            message: "Select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (answer.option === "Add") {
            let addMore = yield inquirer_1.default.prompt({
                type: "input",
                message: "Add task to the list",
                name: "addmore"
            });
            todos.push(addMore.addmore);
            todos.forEach((task) => console.log(task));
        }
        if (answer.option === "Update") {
            let updateMore = yield inquirer_1.default.prompt({
                type: "list",
                message: "Update task in the list",
                name: "updateTask",
                choices: todos.map((item) => (item))
            });
            let addMore = yield inquirer_1.default.prompt({
                type: "input",
                message: "Add task to the list",
                name: "todo",
            });
            let newTask = todos.filter((val) => val !== updateMore.updateTask);
            todos = [...newTask, addMore.todo];
        }
        if (answer.option === "View") {
            console.log("**** TO DO LIST ****");
            console.log(`todos:`, todos);
            console.log("*****************");
        }
        if (answer.option === "Delete") {
        }
        let deleteTask = yield inquirer_1.default.prompt({
            type: "list",
            message: `Delete task from the list`,
            name: "deleteTask",
            choices: todos.map((item) => (item))
        });
        let newTask = todos.filter((val) => val !== deleteTask.deletTask);
        todos = [...newTask];
        console.log(todos);
    });
}
createTodos(todos);
