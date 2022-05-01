import chalk from 'chalk';
import * as yargs from 'yargs';
import * as fs from 'fs';
/**
 * watch command, it sees if the file you ae looking forEach
 * exists and has been changed or rename at any time
 */
yargs.command({
  command: 'watch',
  describe: 'watch a file',
  builder: {
  },
  handler() {
    if (process.argv.length !== 4) {
      console.log(chalk.green('Entra'));
      console.log(chalk.blue('node dist/ejercicio3/ejercicio-3.js watch [nombre archivo]'));
    } else {
      fs.access(process.argv[3], fs.constants.F_OK, (err) => {
        if (err) {
          console.log(chalk.red('No existe el fichero'));
          console.log(chalk.green('Escoja una nueva ruta'));
        } else {
          fs.watch(process.argv[3], (eventType, filename) => {
            if (eventType === 'change') {
              console.clear();
              console.log(chalk.green('Fichero modificado: ' + filename));
            } else if (eventType === 'rename') {
              console.clear();
              console.log(chalk.green('File renombrado: ' + filename));
            }
          });
        }
      });
    }
  },
});

yargs.parse();
