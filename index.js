import getArgs from "./helpers/args.js";
import {printError, printSuccess, printHelp} from "./services/log.service.js";

const cliFunction = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if(args.h){
    // help
    printHelp();
  }
  if(args.s){
    // save city
  }
  if(args.t){
    // save token
  }
}

cliFunction();