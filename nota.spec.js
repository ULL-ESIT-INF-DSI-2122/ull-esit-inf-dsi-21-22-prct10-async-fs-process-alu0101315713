"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notas_1 = require("../src/notas");
require("mocha");
const chai_1 = require("chai");
describe("Nota", () => {
    it("Debería crear una nota", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo");
        (0, chai_1.expect)(nota.getTitulo()).to.equal("Titulo");
        (0, chai_1.expect)(nota.getCuerpo()).to.equal("Cuerpo");
        (0, chai_1.expect)(nota.getColor()).to.equal("Rojo");
    });
    it("Debería crear una nota con id", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo", 1);
        (0, chai_1.expect)(nota.getId()).to.equal(1);
    });
    it("Debería guardar una nota", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo");
        const lib = [];
        nota.saveNotas(lib);
        (0, chai_1.expect)(nota.getId()).to.equal(undefined);
    });
    it("Debería guardar varias Nota", () => {
        const nota1 = new notas_1.Nota("Titulo1", "Cuerpo1", "Rojo");
        const nota2 = new notas_1.Nota("Titulo2", "Cuerpo2", "Verde");
        const nota3 = new notas_1.Nota("Titulo3", "Cuerpo3", "Azul");
        const lib = [];
        nota1.saveNotas(lib);
        nota2.saveNotas(lib);
        nota3.saveNotas(lib);
        (0, chai_1.expect)(notas_1.Nota.getNotas(lib)).to.deep.equal([nota1, nota2, nota3]);
    });
    it("Debería leer una nota", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo");
        nota.saveNotas([nota]);
        (0, chai_1.expect)(notas_1.Nota.getNotas([nota])).to.deep.equal([nota]);
    });
    it("Debería leer varias Nota", () => {
        const nota1 = new notas_1.Nota("Titulo1", "Cuerpo1", "Rojo");
        const nota2 = new notas_1.Nota("Titulo2", "Cuerpo2", "Verde");
        const nota3 = new notas_1.Nota("Titulo3", "Cuerpo3", "Azul");
        const lib = [];
        nota1.saveNotas(lib);
        nota2.saveNotas(lib);
        nota3.saveNotas(lib);
        (0, chai_1.expect)(notas_1.Nota.getNotas([nota1, nota2, nota3])).to.deep.equal([nota1, nota2, nota3]);
        (0, chai_1.expect)(notas_1.Nota.getNotas(lib)).to.deep.equal([nota1, nota2, nota3]);
    });
    it("Debería actualizar una nota", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo");
        nota.saveNotas([nota]);
        nota.setTitulo("Titulo2");
        nota.setCuerpo("Cuerpo2");
        nota.setColor("Verde");
        (0, chai_1.expect)(notas_1.Nota.getNotas([nota])).to.deep.equal([nota]);
    });
    it("Debería eliminar una nota", () => {
        const nota = new notas_1.Nota("Titulo", "Cuerpo", "Rojo");
        nota.saveNotas([nota]);
        notas_1.Nota.deleteNota(nota);
        (0, chai_1.expect)(notas_1.Nota.getNotas([])).to.deep.equal([]);
    });
    it("Debería eliminar varias Nota", () => {
        const nota1 = new notas_1.Nota("Titulo1", "Cuerpo1", "Rojo");
        const nota2 = new notas_1.Nota("Titulo2", "Cuerpo2", "Verde");
        const nota3 = new notas_1.Nota("Titulo3", "Cuerpo3", "Azul");
        const lib = [];
        nota1.saveNotas(lib);
        nota2.saveNotas(lib);
        nota3.saveNotas(lib);
        notas_1.Nota.deleteNota(nota1);
        notas_1.Nota.deleteNota(nota2);
        notas_1.Nota.deleteNota(nota3);
        (0, chai_1.expect)(notas_1.Nota.getNotas([])).to.deep.equal([]);
    });
});
