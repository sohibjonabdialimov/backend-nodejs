const getArgs = require("./helpers/args")

const cliFunction = () => {
  const args = getArgs(process.argv);

  if(args.h){
    // help
  }
  if(args.s){
    // save city
  }
  if(args.t){
    // save token
  }
  console.log(args);
  console.log(process.argv);
}

cliFunction();