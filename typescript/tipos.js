"use strict";
(function () {
    //Declaracion y asignacion de variables 
    var mensaje = 'Hello';
    var numero = 30;
    var booleano = true;
    var hoy = new Date();
    var anything;
    anything = mensaje;
    anything = numero;
    anything = booleano;
    anything = hoy;
    //Declaracion de Objeto
    var spiderman = {
        nombre: '',
        edad: 0
    };
    spiderman = {
        nombre: 'Alex',
        edad: 31
    };
    //Template Literales 
    var salida = mensaje + " edad " + spiderman.edad + " " + spiderman.nombre + " a\u00F1o " + hoy.getUTCFullYear();
    console.table(salida);
    //Parametros opcionales, Obligatorios y por defecto
    function activar(quien, objeto, momento) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activ\u00F3 la " + objeto + " en la " + momento);
        }
        else {
            console.log(quien + " activ\u00F3 la " + objeto);
        }
    }
    activar('Gordon');
    activar('Gordon', 'batiseñal', 'noche');
})();
