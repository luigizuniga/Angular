(function(){
    //Parametros opcionales, Obligatorios y por defecto
    function activar(quien: string, 
                     objeto: string = 'batiseñal', 
                     momento?: string) {
        if( momento ){
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        }else{
            console.log(`${ quien } activó la ${ objeto }`);
        }
    }

    activar('Gordon');
    activar('Gordon','batiseñal','noche');
})();