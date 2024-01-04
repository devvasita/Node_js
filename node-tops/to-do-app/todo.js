const fs = require("fs");
const yargs = require("yargs");

const todoFile = "todo.json";

const loadTodos = () => {
  try {
    const data = fs.readFileSync(todoFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveTodos = (data) => {
  const saveData = JSON.stringify(data);
  fs.writeFileSync(todoFile, saveData);
};

yargs.command({
  command: "add",
  describe: "To add new Todo",
  builder: {
    title: {
      type: String,
    },
  },
  handler: function (arguments) {
    console.log(arguments);
    console.log("=====>>>> inside the add command");
    const todos = loadTodos();
    todos.push({ title: arguments.title });
    saveTodos(todos);
    console.log("Todo added");
  },
});

yargs.command({
  command: "showtodo",
  describe: "List of Todos",
  handler: function () {
    const todos = loadTodos();
    console.log(todos);
    todos.forEach((todo, index) => {
      console.log(`${index + 1} ==> ${todo.title}`);
    });
  },
});

console.log(yargs.argv);
