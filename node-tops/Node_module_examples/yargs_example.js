const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "to add something",
  builder: {
    num1: {
      type: "number",
    },
    num2: {
      type: "number",
    },
  },
  handler: function (arguments) {
    console.log(arguments.num1 + arguments.num2);
    return arguments.num1 + arguments.num2;
  },
});

yargs.command({
  command: "multiply",
  describe: "to multiPly numbers",
  builder: {
    num1: {
      type: "number",
    },
    num2: {
      type: "number",
    },
  },
  handler: function (terms) {
    console.log(terms.num1 * terms.num2);
  },
});

console.log(yargs.argv);

/**
 * main Four Points :
 *  1 ) Command -- you have to write it into cmd
 * 2 ) describe  -- descriptions
 *  * 3 ) builder -- type of arguments
 * 4 ) handler -- function which will perform some task
 */
