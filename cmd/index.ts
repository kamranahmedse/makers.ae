import glob from 'glob';
import { argv } from 'yargs';
import { flatten, keyBy } from 'lodash';

export type Command = {
  title: string;
  signature: string; // Signature for the seeder to run
  description: string;
  run: (argv?: Record<string, any>) => Promise<void>;
};

////////////////////////////////////////////////
// List of available commands
// It reads all the command files at the root
// of the directory and automatically defines them
////////////////////////////////////////////////
const commandFiles: string[] = glob.sync('./**/*.cmd.ts', {
  cwd: __dirname,
  realpath: true
});

// Require each of the command files
const commandImports: any[] = commandFiles.map((file: string): any => Object.values(require(file)));
const commands: Command[] = flatten(commandImports);
const commandSignatures: any = keyBy(commands, 'signature');

////////////////////////////////////////////////
// Common functions
////////////////////////////////////////////////
function exitWithHelp(exitCode: number = 0): void {
  console.log(':: Available list of commands ::');
  Object.keys(commandSignatures).map((command: string) => console.info(`↳  yarn command ${ command }`));
  console.log();

  process.exit(exitCode);
}

////////////////////////////////////////////////
// Logic to run the command
////////////////////////////////////////////////

// Signature given by user
const [, , givenSignature]: string[] = process.argv;

// Command was not passed
if (!givenSignature) {
  exitWithHelp();
}

// Given command is not found
if (!commandSignatures[givenSignature]) {
  console.error(`✖ Invalid command ${ givenSignature }`);
  exitWithHelp(1);
}

const foundCommand: Command = commandSignatures[givenSignature];

console.info('✔ Command found');
console.info('::::::::::::::::::::::::::::::::::::::::::');
console.info(`:: ${ foundCommand.title }`);
console.info(`:: ${ foundCommand.description }`);
console.info('::::::::::::::::::::::::::::::::::::::::::');

(async (): Promise<void> => {
  console.info('Running the command');
  foundCommand
    .run(argv)
    .then(async () => {
      console.info('Command ran successfully');
    })
    .catch(async (e: Error) => {
      console.info('!!! Error occurred while running the command');
      console.error(`!!! ${ e.message }`);
      console.error(e.stack);
    });
})();
