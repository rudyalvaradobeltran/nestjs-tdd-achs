export class Calculadora {
    sumar(valorEntrada:string):number {
        if(valorEntrada==="") return 0;
        const valores = valorEntrada.split(',');
        var suma = 0;
        valores.forEach(item => {
            suma = suma + parseInt(item);
        });
        return suma;
    }
}