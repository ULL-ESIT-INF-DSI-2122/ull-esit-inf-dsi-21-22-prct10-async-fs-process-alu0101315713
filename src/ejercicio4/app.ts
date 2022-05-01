
import * as yargs from 'yargs';
import {LScommand} from './comandos/lscommand';
import {MKDIRcommand} from './comandos/mkdircommand';
import {LSFILEScommand} from './comandos/lsfilescommand';
import {CATcommand} from './comandos/catcommand';
import {RMcommand} from './comandos/rmcommand';
import {MVcommand} from './comandos/mvcommand';
import {CPcommand} from './comandos/cpcommand';

const ls = new LScommand();
const mkdir = new MKDIRcommand();
const lsfiles = new LSFILEScommand();
const cat = new CATcommand();
const rm = new RMcommand();
const mv = new MVcommand();
const cp = new CPcommand();

ls.ls();
mkdir.mkdir();
lsfiles.lsfiles();
cat.cat();
rm.rm();
mv.mv();
cp.cp();

yargs.parse();
