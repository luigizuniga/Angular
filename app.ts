
// Tipado de retorno de una funcion

(() => {
    const sumar = (a: number, b:number) : number => a + b;
    const nombre = () : string => 'Cell Jr';

    const obtenerSalario = (): Promise<string> => {
            return new Promise((resolve, reject) => {
                resolve('Luigi')
            });   
    }
   
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})()