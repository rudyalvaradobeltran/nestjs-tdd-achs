import { Test, TestingModule } from '@nestjs/testing';
import { Calculadora } from './calculadora';

describe('Calculadora', () => {
    it('Cuando se ingresa doble comillas se debe retornar 0', () => {
        const valorEntrada = "";
        const valorEsperado = 0;
        const calculadora = new Calculadora();
        const resultado = calculadora.sumar(valorEntrada);
        expect(resultado).toBe(valorEsperado);
    });
    it('Cuando se ingresa uno entre comillas se debe retornar 1', () => {
        const valorEntrada = "1";
        const valorEsperado = 1;
        const calculadora = new Calculadora();
        const resultado = calculadora.sumar(valorEntrada);
        expect(resultado).toBe(valorEsperado);
    });
    it('Cuando se ingresa 1,2 entre comillas se debe retornar 3', () => {
        const valorEntrada = "1,2";
        const valorEsperado = 3;
        const calculadora = new Calculadora();
        const resultado = calculadora.sumar(valorEntrada);
        expect(resultado).toBe(valorEsperado);
    });
    it('Cuando se ingresa 1,2,1 entre comillas se debe retornar 4', () => {
        const valorEntrada = "1,2,1";
        const valorEsperado = 4;
        const calculadora = new Calculadora();
        const resultado = calculadora.sumar(valorEntrada);
        expect(resultado).toBe(valorEsperado);
    });
});