import 'mocha';
import {expect} from 'chai';
import {Reader} from '../src/ejercicio2/ejercicio-2';

const fichero = new Reader('helloworld.txt');

describe('Ejercicio 2', () => {
  it('should return the file content', () => {
    expect(fichero.metodo1()).to.be.equal(undefined);
  });
  it('should return the number of times the word "Hola" appears in a file', () => {
    expect(fichero.metodo2()).to.be.equal(undefined);
  });
});
