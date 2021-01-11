(() => {

    // 1 - Uso de Let y Const

    const personaje = {
        nombre: 'Luigi Zuniga',
        edad: 30,
        smash() {
            setTimeout(() => {
                console.log('============ 1.Uso de Let y Const ============');
                console.log(`Heroe ${this.nombre}`);
            }, 3000);
        }
    };

    personaje.smash();

    // 2 - Cree una interfaz que sirva para validar el siguiente objeto
    const batman = {
        nombre: 'Bruce Wayne',
        artesMarciales: ['Karate','Aikido','WingChun','JiuJitsu']
    }

    // 2.1 Creacion de interface
    interface heroe {
        nombre: string,
        artesMarciales: string[] 
    }

    // 2.3 Validacion de Objeto 
    const readHero = ( heroe: heroe ) => {
       console.log(`Datos del heroe ${ heroe.nombre }`);
    }

    // 2.4 Desestructuracion de Arreglo de artes marciales por medio de una funcion
    const extraerArtesMarciales = ([ karate, aikido,wingChun,jiuJitsu]: string[]) => {
        console.log(karate);
        console.log(aikido);
        console.log(wingChun);
        console.log(jiuJitsu);
    };

    console.log('============ 2.Interface y Desestructuracion ============');
    readHero(batman);
    extraerArtesMarciales(batman.artesMarciales);

    // 3 -  Convertir funcion en arrow function
    const resultadoDoble = (a:number,b:number) => a + b * 2; 

    console.log('============ 3.Funcion de Fecha ============');
    console.log(resultadoDoble(5,10));

    // 4 - Funcion con parametros obligatorios, opcionales y por defecto
    //     donde NOMBRE = Obligatorio 
    //           PODER = opcional
    //           ARMA  = por defecto = 'arco'
    function getActivar(nombre: string, poder?: string, arma : string = 'arco'){
        if( poder ){
            console.log(`${ nombre } tiene el poder de ${ poder } y un arma ${ arma }`);
        }else{
            console.log(`${ nombre } tiene un arma ${ arma }`);
        }
    }

    console.log('============ 4. Funcion con parametros ============');
    getActivar('Sasuke');
    getActivar('Shikamaru','Sombras','arco');


    // 5 - Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(public base: number,
                    public altura: number) {}
    
        retornarArea() {
            return this.base * this.altura;
        }
    } 

    console.log('============ 5. Clases con propiedades ============');
    const area = new Rectangulo(5,10);
    console.log(area.retornarArea());

    
})()