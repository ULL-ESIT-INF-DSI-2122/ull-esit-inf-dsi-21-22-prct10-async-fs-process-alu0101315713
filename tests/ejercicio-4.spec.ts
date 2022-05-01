import 'mocha';
import {expect} from 'chai';
import {CATcommand} from '../src/ejercicio4/comandos/catcommand';
import {LScommand} from '../src/ejercicio4/comandos/lscommand';
import {MKDIRcommand} from '../src/ejercicio4/comandos/mkdircommand';
import {LSFILEScommand} from '../src/ejercicio4/comandos/lsfilescommand';
import {RMcommand} from '../src/ejercicio4/comandos/rmcommand';
import {MVcommand} from '../src/ejercicio4/comandos/mvcommand';
import {CPcommand} from '../src/ejercicio4/comandos/cpcommand';

describe('Ejercicio 4', () => {
  it('should return the file content', () => {
    expect(new CATcommand().cat()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new LScommand().ls()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new LSFILEScommand().lsfiles()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new MKDIRcommand().mkdir()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new RMcommand().rm()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new MVcommand().mv()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(new CPcommand().cp()).to.be.equal(undefined);
  });
});
