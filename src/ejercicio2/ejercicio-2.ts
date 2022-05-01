import {spawn} from 'child_process';
import chalk from 'chalk';
/**
 * Reader class, it has 2 methods, 1 using pipe and
 * another one without it
 */
export class Reader {
  /**
   * @param file file to read
   */
  constructor(private file: string) {
  }
  /**
   * it makes a cat and grep command using pipe
   */
  metodo1() {
    const cat = spawn('cat', ['-n', this.file]);
    const grep = spawn('grep', ['Hola']);
    cat.stdout.pipe(grep.stdin);
    let auxiliaryGrep: String = '';
    grep.stdout.on('data', (piece) => {
      auxiliaryGrep = piece.toString();
    });
    grep.on('close', () => {
      console.log();
      console.log(chalk.green('File Content:'));
      console.log(auxiliaryGrep);
    });
  }
  /**
 * it makes a cat and grep command without pipe
 */
  metodo2() {
    const catGrep = spawn('cat', [this.file, 'grep', 'Hola']);
    let contador = 0;
    let auxiliaryCatGrep = '';
    catGrep.stdout.on('data', (piece) => {
      auxiliaryCatGrep = piece.toString();
    });
    catGrep.on('close', () => {
      console.log();
      console.log(chalk.green('File Content:'));
      console.log(auxiliaryCatGrep);
      const result = auxiliaryCatGrep.split(/\s+/);
      result.forEach((element) => {
        if (element === 'Hola') {
          contador++;
        }
      });
      if (contador === 0) {
        console.log();
        console.log(chalk.red('No se encontró la palabra'));
      } else {
        console.log();
        console.log(chalk.green('The word "Hola" appears ' + contador + ' times'));
      }
    });
  }
}

