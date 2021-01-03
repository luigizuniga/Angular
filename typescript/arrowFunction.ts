(() => {
    //Funcion es5
    const mufuncion = function (a: string) {
        return a.toUpperCase();
    }
    //Funcion de Flecha
    const mifunctionF = (a: string) => a.toUpperCase();

    const suma = (a: number, b: number) => a + b;
    const resta = (a: number, b: number) => a - b;

    console.log(suma(5, 10));
    console.log(resta(5, 10));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 4000);
        }
    }
    
    hulk.smash();
})();